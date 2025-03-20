# AuditableEntityRepository<TEntity>

The **AuditableEntityRepository<TEntity>** class is an abstract base class designed for repository implementations managing entities that implement the **IAuditableEntity** interface. This repository facilitates CRUD operations while maintaining auditing capabilities, such as tracking creation and modification details.

## Inheritance

This class inherits from the **EntityRepository<TEntity>** class, which provides basic CRUD operations, and implements **IAuditableEntityRepository<TEntity>**. It requires that the type parameter **TEntity** implements **IAuditableEntity**.

## Constructor

### `AuditableEntityRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)`

- **Parameters:**  
  - `mongoDbContext`: An instance of **IMongoDBContext** which provides the database connectivity.  
  - `apiExecutionContext`: An instance of **IApiExecutionContext** that contains runtime information about the API request, such as the username of the entity performing the operation.
- **Visibility:**  
  - Protected, allowing derived classes to use it.

## Thread Safety

When using this repository in multi-threaded scenarios, the **CancellationToken** must be carefully managed to ensure that operations can gracefully handle cancellation requests. Always check the token at the start of method execution.

## Public Methods

### `Create(TEntity entity, CancellationToken cancellationToken = default)`

- **Description:**  
  Asynchronously creates a new entity in the database, setting audit fields automatically.  
- **Parameters:**  
  - `entity`: The entity to create, which must implement **IAuditableEntity**.  
  - `cancellationToken`: An optional token for monitoring cancellation requests. Defaults to `default`.
- **Returns:**  
  - The created entity as a **Task<TEntity?>**.  
- **Exceptions:**  
  - Throws **OperationCanceledException** if the operation is canceled.  
  - Throws **MongoConnectionException** if there are issues connecting to the MongoDB.
- **Example:**  
  ```csharp
  var newEntity = new MyAuditableEntity();  
  var createdEntity = await repository.Create(newEntity, cancellationToken);
  ```

### `CreateMany(IEnumerable<TEntity> entities, CancellationToken cancellationToken = default)`

- **Description:**  
  Asynchronously creates multiple entities in the database, while setting audit fields for each entity.  
- **Parameters:**  
  - `entities`: A collection of entities to create, all implementing **IAuditableEntity**.  
  - `cancellationToken`: An optional token for monitoring cancellation requests. Defaults to `default`.
- **Returns:**  
  - A list of created entities as a **Task<IEnumerable<TEntity>>**.  
- **Exceptions:**  
  - Throws **OperationCanceledException** if the operation is canceled.  
  - Throws **InvalidOperationException** for any validation errors that occur during the creation process.  
- **Example:**  
  ```csharp
  var newEntities = new List<MyAuditableEntity>{ new MyAuditableEntity(), new MyAuditableEntity() };  
  var createdEntities = await repository.CreateMany(newEntities, cancellationToken);
  ```

### `Update(TEntity entity, CancellationToken cancellationToken = default)`

- **Description:**  
  Asynchronously updates an existing entity in the database, preserving audit information.  
- **Parameters:**  
  - `entity`: The entity to update, which must implement **IAuditableEntity**.  
  - `cancellationToken`: An optional token for monitoring cancellation requests. Defaults to `default`.
- **Returns:**  
  - The updated entity as a **Task<TEntity?>** or `null` if the entity was not found.  
- **Exceptions:**  
  - Throws **OperationCanceledException** if the operation is canceled.  
  - Throws **InvalidOperationException** if an entity with the specified ID does not exist.
- **Example:**  
  ```csharp
  var existingEntity = await repository.GetById(entityId, cancellationToken);
  if (existingEntity != null)
  {
      existingEntity.Property = newValue;
      var updatedEntity = await repository.Update(existingEntity, cancellationToken);
  }
  ```

## Protected Methods

### `protected void SetAuditableFieldsForCreate(TEntity entity)`

- **Description:**  
  Sets the creation timestamps and the creator's username for a new entity.

### `protected void SetAuditableFieldsForUpdate(TEntity entity, TEntity oldEntity)`

- **Description:**  
  Updates the timestamps and the last modifier's username for an existing entity while preserving the creation information.

## Inheritable Methods

The following methods from the base class **EntityRepository<TEntity>** are available in this class, and they inherit the same parameters and return types as described:
- `Create()`: Creates an entity in the database.  
- `CreateMany()`: Creates multiple entities in the database.  
- `Update()`: Updates an existing entity in the database.  
- `GetById()`: Retrieves an entity by its unique identifier.

### Exception Handling for Inherited Methods

While using these methods, ensure proper exception handling for potential exceptions thrown, such as **ValidationException** in the `CreateMany` method due to invalid entities.

## IAuditableEntity Interface

The **IAuditableEntity** interface requires the following properties to properly implement auditing:
- `DateTime CreatedAt`  
- `string CreatedBy`  
- `DateTime ModifiedAt`  
- `string ModifiedBy`  

This ensures the repository correctly tracks entity auditing information.

## Auditing Fields

When creating or updating entities, the fields `CreatedAt`, `CreatedBy`, `ModifiedAt`, and `ModifiedBy` are managed automatically. These fields help track changes made to each entity.

## Notes
- The repository requires an instance of **IMongoDBContext** for database operations. It also depends on **IApiExecutionContext** for obtaining user-related information required for auditing.
- Ensure proper handling of cancellation tokens in client code to avoid operation timeouts and manage thread safety. Always utilize `cancellationToken.ThrowIfCancellationRequested()` to handle cancellations effectively.

## Example Repository Implementation
```csharp
public class MyEntityRepository : AuditableEntityRepository<MyAuditableEntity>  
{
    public MyEntityRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)  
        : base(mongoDbContext, apiExecutionContext)  
    {
    }
}
```

---
## Contributions
Contributions to the **FluentCMS** repository are welcome. Please refer to the project's contribution guidelines for details.