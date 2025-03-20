# BlockRepository Class Documentation

The `BlockRepository` class is part of the `FluentCMS.Repositories.MongoDB` namespace and facilitates the management of `Block` entities within a MongoDB context. It inherits from `SiteAssociatedRepository<Block>`, adapting its functionality for site-specific operations. Additionally, this class implements the `IBlockRepository` interface, ensuring adherence to repository patterns and consistency.

## Class Hierarchy
- **Base Class**: `SiteAssociatedRepository<Block>`  
- **Interface**: `IBlockRepository`

## Constructor

### `BlockRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)`
- **Visibility**: `public`  
- **Parameters**:
  - `IMongoDBContext mongoDbContext`: The MongoDB context required for database connectivity and operations.
  - `IApiExecutionContext apiExecutionContext`: The API execution context, which holds important execution information, such as `ApiToken`.

### Exception Handling
Ensure that neither `mongoDbContext` nor `apiExecutionContext` is null, as doing so will result in an `ArgumentNullException` when invoking repository functionalities.

## Functionality and Use Cases
The `BlockRepository` provides a specialized environment to manage block entities tied to specific sites, leveraging methods from the base class `SiteAssociatedRepository<Block>` to streamline access to site-specific data.

### Sample Instantiation
```csharp
var mongoDbContext = new MyMongoDBContext(); // Replace with your MongoDB context implementation
var apiExecutionContext = new MyApiExecutionContext(); // Replace with your API execution context implementation
var blockRepository = new BlockRepository(mongoDbContext, apiExecutionContext);
```

This example demonstrates how to instantiate the `BlockRepository` with required dependencies.

### Inheritable Methods
#### Public Methods from `SiteAssociatedRepository<Block>`
Here are the publicly accessible methods inherited from `SiteAssociatedRepository<Block>`:  

- **`public async Task<Block?> GetByIdAsync(string id, CancellationToken cancellationToken = default)`**: Retrieves a block entity by its identifier.  
  - **Return Type**: `Block?`  
  - **Exceptions**: Throws `InvalidOperationException` if the entity with the given ID does not exist.  
  - **Usage Example**:  
  ```csharp
var block = await blockRepository.GetByIdAsync("blockId");
if (block == null) {
    // Handle null case: block not found
}
```

- **`public Block Create(Block block)`**: Creates a new block entity in the database.  
  - **Return Type**: `Block`  
  - **Exceptions**: Throws `ValidationException` if the entity is not valid.  
  - **Usage Example**:  
  ```csharp
var newBlock = new Block { /* properties */ };
try {
    var createdBlock = blockRepository.Create(newBlock);
} catch (ValidationException ex) {
    // Handle validation errors
}
```

- **`public Block Update(Block block)`**: Updates an existing block entity.  
  - **Return Type**: `Block`  
  - **Exceptions**: Throws `InvalidOperationException` if the entity ID does not exist.  
  - **Usage Example**:  
  ```csharp
var existingBlock = await blockRepository.GetByIdAsync("blockId");
if (existingBlock != null) {
    existingBlock.Property = newValue;
    blockRepository.Update(existingBlock);
} else {
    // Handle not found case
}
```

- **`public void Delete(string id)`**: Deletes a block entity by its identifier.  
  - **Return Type**: `void`  
  - **Exceptions**: Throws `InvalidOperationException` if the entity with the given ID does not exist.  
  - **Usage Example**:  
  ```csharp
blockRepository.Delete("blockId");
```

These public methods offer standard CRUD operations tailored to site-specific requirements for block entities.

### IBlockRepository Interface Details
The `IBlockRepository` interface outlines the contract for `BlockRepository`, including methods specific to block operations:
- `Task<Block?> GetByIdAsync(string id, CancellationToken cancellationToken = default)`
- `Block Create(Block block)`
- `Block Update(Block block)`
- `void Delete(string id)`

Each method is intended to work seamlessly with the repository pattern and ensure expected behavior when managing block entities.

## Block Class Properties
The `Block` class must implement properties that adhere to the `IAuditableEntity` interface:
- `string Id`: Unique identifier for the block.
- `string Name`: The name of the block.
- `string Content`: The content held within the block.
- `DateTime CreatedAt`: Timestamp for when the block was created.
- `DateTime? UpdatedAt`: Timestamp for when the block was last updated.

Understanding these properties is crucial for creating or updating block entities without validation errors.

## Usage with Cancellation Tokens
While the constructor does not directly take a `CancellationToken`, it is essential to handle cancellation tokens throughout your repository usage, especially for longer-running operations.

### Example of Cancellation Handling
When utilizing methods that may take substantial time to complete, pass a `CancellationToken` where applicable:
```csharp
public async Task<Block?> GetBlockAsync(string id, CancellationToken cancellationToken = default)
{
    cancellationToken.ThrowIfCancellationRequested();
    return await GetByIdAsync(id, cancellationToken);
}
```
If the operation is canceled, handle the `OperationCanceledException` gracefully—for instance, logging the cancellation event or notifying users about the status of their request.

## Conclusion
The `BlockRepository` class serves as a refined repository for managing blocks within the FluentCMS framework, tailored for site-specific operations utilizing MongoDB. Proper handling of dependencies and cancellation tokens enhances robustness in your implementations.

---

### Contributions
Contributions to this repository are welcome! Please ensure code adheres to existing style guidelines and provide meaningful commit messages that detail the changes made.