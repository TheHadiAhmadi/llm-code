# ApiTokenRepository Class Documentation

## Overview
`ApiTokenRepository` is a class that extends the `[AuditableEntityRepository<ApiToken>]` and implements the [{IApiTokenRepository}] interface. It is designed to handle CRUD operations for `ApiToken` entities in a MongoDB context utilizing `IMongoDBContext` and `IApiExecutionContext` for execution context management.

## Class Hierarchy
- **Base Class:** [AuditableEntityRepository<ApiToken>]  
- **Interface:** [{IApiTokenRepository}]  
- **Dependencies:** [(IMongoDBContext)], [(IApiExecutionContext)]

## Constructor
### `ApiTokenRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)`  
- **Parameters:**  
  - `mongoDbContext` (IMongoDBContext): The MongoDB context for database operations.  
  - `apiExecutionContext` (IApiExecutionContext): The execution context that provides contextual information during API calls.

## Methods

### `Task<ApiToken?> GetByKey(string apiKey, CancellationToken cancellationToken = default)`  
- **Visibility:** public  
- **Description:**  Retrieves an `ApiToken` by its key. If the token is found, it is returned; otherwise, null is returned.  
- **Parameters:**  
  - `apiKey` (string): The unique key associated with the API token.  
  - `cancellationToken` (CancellationToken, optional): Allows for operation cancellation. It defaults to a new cancellation token.  
- **Returns:**  
  - `Task<ApiToken?>`: A task representing the asynchronous operation, with the result being the `ApiToken` associated with the provided key or null.  
- **Exceptions:**  
  - Throws `OperationCanceledException` if cancellation is requested via `cancellationToken`.  
  - Throws `MongoConnectionException`  if there is a connectivity issue or an invalid connection string.
- **Example Usage:**  
```csharp  
var apiToken = await apiTokenRepository.GetByKey("your-api-key", cancellationToken);  
if (apiToken == null)  
{  
    // Handle null case (e.g., log not found)  
}  
```

### `Task<ApiToken?> GetByName(string name, CancellationToken cancellationToken = default)`  
- **Visibility:** public  
- **Description:**  Fetches an `ApiToken` by its name. Returns the token if it exists; otherwise, returns null.  
- **Parameters:**  
  - `name` (string): The name of the API token to search for.  
  - `cancellationToken` (CancellationToken, optional): Allows for operation cancellation. It defaults to a new cancellation token.  
- **Returns:**  
  - `Task<ApiToken?>`: A task representing the asynchronous operation, with the result being the found `ApiToken` or null.  
- **Exceptions:**  
  - Throws `OperationCanceledException` if cancellation is requested via `cancellationToken`.  
  - Throws `MongoConnectionException` if there are connectivity issues with the database.
- **Example Usage:**  
```csharp  
var apiToken = await apiTokenRepository.GetByName("TokenName", cancellationToken);  
if (apiToken == null)  
{  
    // Handle null case (e.g., log not found)  
}  
```

## Inheritable Methods
This class inherits methods from the `AuditableEntityRepository<T>` which provide various CRUD operations for `ApiToken`. The following methods are available:

### `Create(TEntity entity)`  
- **Visibility:** public  
- **Parameters:** `entity` (ApiToken): The `ApiToken` to be created.  
- **Returns:** `Task` indicating the completion of the operation.  
- **Exceptions:**  
  - Throws `MongoWriteException` for validation errors,  
  - `OperationCanceledException` if cancellation is requested.  
- **Example Usage:**  
```csharp  
await apiTokenRepository.Create(new ApiToken { /* properties */ });  
```

### `Update(TEntity entity)`  
- **Visibility:** public  
- **Parameters:** `entity` (ApiToken): The `ApiToken` to be updated.  
- **Returns:** `Task` indicating the completion of the operation.  
- **Exceptions:**  
  - Throws `MongoWriteException` for validation errors,  
  - `KeyNotFoundException` if the entity ID does not exist,  
  - `OperationCanceledException` if cancellation is requested.  
- **Example Usage:**  
```csharp  
await apiTokenRepository.Update(existingApiToken);  
```

### `Delete(TKey id)`  
- **Visibility:** public  
- **Parameters:** `id` (string): The unique identifier of the `ApiToken` to delete.  
- **Returns:** `Task` indicating the completion of the operation.  
- **Exceptions:**  
  - Throws `KeyNotFoundException` if the ID does not correspond to an existing token,  
  - `OperationCanceledException` if cancellation is requested.  
- **Example Usage:**  
```csharp  
await apiTokenRepository.Delete("token-id");  
```

### `GetById(TKey id)`  
- **Visibility:** public  
- **Parameters:** `id` (string): The unique identifier of the `ApiToken` to retrieve.  
- **Returns:** `Task<ApiToken?>`: The matching `ApiToken` or null.  
- **Exceptions:**  
  - Throws `OperationCanceledException` if cancellation is requested.  
  - Throws `MongoConnectionException` if there are connectivity issues while querying.  
- **Example Usage:**  
```csharp  
var apiToken = await apiTokenRepository.GetById("token-id");  
if (apiToken == null)  
{  
    // Handle not found  
}  
```

Refer to the [AuditableEntityRepository<ApiToken>] documentation for further details on inherited methods.

## Cancellation Handling
All methods in `ApiTokenRepository`, including inherited ones, should consistently call `cancellationToken.ThrowIfCancellationRequested()` at the beginning of their implementations. This pattern allows for immediate cancellation if necessary, promoting responsiveness in long-running operations. If an operation is canceled, avoid processing further to save resources and handle errors gracefully.

## Auditing in Create/Update
The `ApiTokenRepository` manages the auditing fields during Create or Update operations, tracking changes automatically. This includes logging the user who made the change and timestamps for operations. Ensure correct validation is performed during these operations to prevent errors and inconsistencies in auditing data. The audit lifecycle impacts visibility and tracking across entities, making it imperative to adhere to best practices in maintaining the integrity of the audit record.

## Error Handling
When interacting with MongoDB, streamline error handling using common exceptions like `MongoConnectionException` for connection issues and `InvalidOperationException` for potential mismatches or validation failures. Ensure that documentation for exceptions includes clarity on which operations might throw them to prevent confusion:
- **GetByKey/GetByName**: `MongoConnectionException`, `OperationCanceledException`  
- **Create/Update/Delete**: `MongoWriteException`, `KeyNotFoundException`, `OperationCanceledException`  
- **GetById**: `OperationCanceledException`, `MongoConnectionException`

Implement error handling patterns, such as retry mechanisms or fallback strategies, especially for methods like `FindAsync` that interact with potentially transient external service failures. Always log error details for troubleshooting and review known exception scenarios to assist in both development and runtime error handling.

### Troubleshooting Common Issues
1. **Connection Timeouts**: Ensure your MongoDB instance is reachable from your application environment. Validate your connection string and firewall settings by testing connectivity with the MongoDB shell or a GUI client.  
2. **Invalid API Tokens**: Check the format of `apiKey` and `name` parameters in `GetByKey` and `GetByName`. Use regular expressions to validate token formats in compliance with your business rules and log any mismatches.  
3. **Handling Task<ApiToken?>**: When retrieving tokens, always check for null results to prevent null reference exceptions. Incorporate error logging where necessary to document retrieval issues for future resolution. For example, if `GetByKey` returns null for an expected token, log the situation with sufficient context to aid further investigation.

## Getting Started
To instantiate `ApiTokenRepository`, ensure that `IMongoDBContext` and `IApiExecutionContext` are properly configured within your dependency injection setup, particularly in the context of the FluentCMS framework. Below is an example of how to configure dependencies and use the `ApiTokenRepository`:

```csharp
services.AddSingleton<IMongoDBContext, MongoDBContext>();
services.AddScoped<IApiExecutionContext, ApiExecutionContext>();
services.AddScoped<IApiTokenRepository, ApiTokenRepository>();

// Example usage
var apiTokenRepo = new ApiTokenRepository(mongoDbContext, apiExecutionContext);
var token = await apiTokenRepo.GetByKey("example-api-key", cancellationToken);
```
Verify that both dependencies are registered correctly to avoid null reference exceptions during initialization. Explore suitable configurations for MongoDB connection strings, ensuring they specify the necessary parameters for your environment.

## Contributions
Contributions to `ApiTokenRepository` are welcome! Please adhere to the coding standards and ensure that all changes are documented to enhance clarity and maintainability. Additionally, consider subscribing to typical patterns of event logging related to auditing functionality for better monitoring of key operations.