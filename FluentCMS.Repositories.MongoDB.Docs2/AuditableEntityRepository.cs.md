# AuditableEntityRepository<TEntity>

The `AuditableEntityRepository<TEntity>` class serves as an abstract base for repositories dealing with entities that require auditing capabilities. This class inherits from the `EntityRepository<TEntity>` and implements the `IAuditableEntityRepository<TEntity>` interface. It ensures that entities track their creation and modification details through auditing fields.

## Type Parameters
- `TEntity`: The type of the entity being managed. This type must implement the `IAuditableEntity` interface, which includes properties for tracking creation and modification information.

## Inheritance
This class inherits from `EntityRepository<TEntity>` and **cannot be instantiated directly**. Instead, you should use concrete implementations such as `ContentRepository` or `AnotherEntityRepository`. For further documentation on these concrete classes, refer to their respective documents.

## Constructor
```csharp
public AuditableEntityRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
```
### Parameters:
- `mongoDbContext`: An instance of `IMongoDBContext` used for interacting with the MongoDB database.
- `apiExecutionContext`: An instance of `IApiExecutionContext` that provides context about the API execution, including user information. This property is protected and should be accessed only within this class and derived classes.

## Properties
- `ApiExecutionContext`: Stores the execution context for use in auditing entity operations.

## Methods
### Create
```csharp
public override async Task<TEntity?> Create(TEntity entity, CancellationToken cancellationToken = default)
```
- **Description**: Creates a new entity in the database, setting its auditing fields before insertion.
- **Parameters**:
  - `entity`: The entity to create.
  - `cancellationToken`: An optional cancellation token to cancel the operation (default is `default`). The `cancellationToken.ThrowIfCancellationRequested()` method is invoked at the start of this method to handle cancellation requests.
- **Returns**: The created entity or `null` if the creation fails or if validation errors occur.
- **Throws**: 
  - `OperationCanceledException` if the operation is canceled via `cancellationToken`.
  - `ValidationException` when the entity fails validation.
- **Example**:
  ```csharp
  var newEntity = new MyEntity(); // Assume MyEntity implements IAuditableEntity
  var createdEntity = await repository.Create(newEntity);
  ```

### CreateMany
```csharp
public override async Task<IEnumerable<TEntity>> CreateMany(IEnumerable<TEntity> entities, CancellationToken cancellationToken = default)
```
- **Description**: Creates multiple entities in the database, setting their auditing fields.
- **Parameters**:
  - `entities`: The collection of entities to create.
  - `cancellationToken`: An optional cancellation token (default is `default`). As with the `Create` method, it checks for cancellation requests at the start.
- **Returns**: An enumerable of created entities.
- **Throws**: 
  - `OperationCanceledException` if the operation is canceled via `cancellationToken`.
  - `ValidationException` if any of the entities fail validation during the creation process. It's worth noting that if validation fails for any entity, it’s handled in a loop, ensuring that others can still succeed.
- **Example**:
  ```csharp
  var entities = new List<MyEntity> { new MyEntity(), new MyEntity() };
  try
  {
      var createdEntities = await repository.CreateMany(entities);
  }
  catch (ValidationException ex)
  {
      // Handle validation error
  }
  ```

### Update
```csharp
public override async Task<TEntity?> Update(TEntity entity, CancellationToken cancellationToken = default)
```
- **Description**: Updates an existing entity, preserving created fields while modifying the others. If the entity cannot be updated due to validation errors, appropriate exceptions will be thrown.
- **Parameters**:
  - `entity`: The entity containing updated data. The Id property of this entity must match the existing entity's Id in the database.
  - `cancellationToken`: An optional cancellation token (default is `default`). Cancellation requests are checked at the start.
- **Returns**: The updated entity or `null` if the entity with the provided Id does not exist.
- **Throws**:
  - `OperationCanceledException` if the operation is canceled via `cancellationToken`.
  - `ValidationException` if the entity fails validation during the update process.
- **Example**:
  ```csharp
  var existingEntityId = Guid.NewGuid(); // Assume this Id is retrieved from a valid source
  var existingEntity = await repository.GetById(existingEntityId); // Check where existingEntityId comes from
  if (existingEntity != null)
  {
      existingEntity.SomeProperty = newValue; // Validate new values if necessary
      var updatedEntity = await repository.Update(existingEntity);
  }
  else
  {
      // Handle the case where the entity is not found
      // Consider logging or notifying the user
  }
  ```

## Auditing Fields
Entities implementing `IAuditableEntity` should include the following properties:
- `CreatedAt`: DateTime when the entity was created. 
- `CreatedBy`: The user who created the entity.
- `ModifiedAt`: DateTime when the entity was last modified.
- `ModifiedBy`: The user who last modified the entity.
- `Id`: Unique identifier for the entity. This property is essential for methods like `Update` and is part of the `IAuditableEntity` interface.

## Remarks
- The `Create` and `CreateMany` methods ensure that the `CreatedAt` and `CreatedBy` fields are set according to the current execution context when creating new entities.
- The `Update` method will return `null` if no existing entity matches the provided entity's Id. If this happens, you should consider logging the issue or handling it gracefully, such as notifying the user of the non-existence.
- Note that while the repository accepts a cancellation token, it may not be safe for concurrent access due to its design. Ensure to handle the `ApiExecutionContext` properly to avoid unexpected behaviors in concurrent setups.

## Example Signatures
Example repository implementations:
```csharp
public class ContentRepository : AuditableEntityRepository<Content>
{
    public ContentRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
        : base(mongoDbContext, apiExecutionContext)
    {}
}

public class AnotherEntityRepository : AuditableEntityRepository<AnotherEntity>
{
    public AnotherEntityRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
        : base(mongoDbContext, apiExecutionContext)
    {}
}
```
These implementations demonstrate how to utilize the `AuditableEntityRepository` for managing entities with auditing functionalities.

## Error Handling and Best Practices
- Always check for null values and handle them appropriately when calling `GetById`, `Update`, or any operations that may return null. Specifically, for `Update`, validate whether the entity exists before proceeding with updates:
  ```csharp
  var entity = await repository.GetById(entityId);
  if (entity == null)
  {
      // Log or inform the user that the entity was not found
  }
  ```
- Use the `cancellationToken` effectively to ensure that long-running operations can be canceled if needed. Incorporate it as follows:
  ```csharp
  CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
  var token = cancellationTokenSource.Token;
  try
  {
      var entity = await repository.Create(newEntity, token);
  }
  catch (OperationCanceledException)
  {
      // Handle cancellation
      // Optionally log cancellation events
  }
  ```

### Cancellation Token Integration
The cancellation process should be factored into the auditing as follows:
- Be aware that if a cancellation occurs during entity creation or updates, the changes will not be committed to the database, ensuring data integrity remains intact. 

## IAuditableEntity Interface
The `IAuditableEntity` interface includes the following required properties:
- `DateTime CreatedAt`
- `string CreatedBy`
- `DateTime? ModifiedAt`
- `string? ModifiedBy`
- `Guid Id`

This interface mandates that any implementing class must provide appropriate properties to track its auditing details, ensuring consistency and data integrity.

## Conclusion
The `AuditableEntityRepository<TEntity>` provides a solid foundation for managing auditable entities in a MongoDB context, ensuring that every entity tracks its creation and modification history effectively.