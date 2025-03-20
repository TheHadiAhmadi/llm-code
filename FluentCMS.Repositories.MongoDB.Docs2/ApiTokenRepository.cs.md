# ApiTokenRepository Class

The `ApiTokenRepository` class is responsible for managing the persistence and retrieval of `ApiToken` entities in a MongoDB database. It inherits from `[[AuditableEntityRepository<ApiToken>]]` and implements the `[{IApiTokenRepository}]` interface. This class provides specialized methods for fetching API tokens by their unique attributes, making it straightforward to work with API tokens in a MongoDB context. It cannot be instantiated directly and is designed to work with a valid implementation of `IMongoDBContext` through dependency injection.

## Constructor

```csharp
public ApiTokenRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
```

### Parameters
- **mongoDbContext**: An instance of the `IMongoDBContext` to access the underlying MongoDB database.
- **apiExecutionContext**: An instance of `IApiExecutionContext` to facilitate API execution context management.

### Dependency Injection
To instantiate this class, ensure you configure it for dependency injection in your application. This typically involves setting up the service provider with the necessary implementations of `IMongoDBContext` and `IApiExecutionContext`.

## Methods

### GetByKey

```csharp
public async Task<ApiToken?> GetByKey(string apiKey, CancellationToken cancellationToken = default)
```

Retrieves an `ApiToken` entity by its unique key.

#### Parameters
- **apiKey**: A string representing the API key to search for. This parameter is required.
- **cancellationToken**: An optional parameter used to propagate notifications that the operation should be canceled. If cancellation is requested, an `OperationCanceledException` will be thrown at the beginning of the method.

#### Returns
- An `ApiToken` instance if a matching entity is found, or null if no matching entity is found.

#### Remarks
- At the beginning of this method, `cancellationToken.ThrowIfCancellationRequested()` is invoked to check for cancellation requests.
- Successful execution will yield a null result if no API token matches the specified key. The method does not throw an exception for an empty result set.

#### Example Usage
```csharp
var apiToken = await apiTokenRepository.GetByKey("your-api-key");
if (apiToken == null)
{
    // Handle the case where the api token was not found.
}
```  

### GetByName

```csharp
public async Task<ApiToken?> GetByName(string name, CancellationToken cancellationToken = default)
```

Retrieves an `ApiToken` entity by its name.

#### Parameters
- **name**: A string representing the name of the API token to search for. This is a required parameter.
- **cancellationToken**: An optional parameter for cancellation purposes. The method checks for cancellation requests at the start of execution.

#### Returns
- An `ApiToken` instance if a matching entity is found, or null if no matching entity is found.

#### Remarks
- If there is no matching result for the specified name, the method returns null without throwing exceptions.  
- Cancellation is handled at the beginning of the method with `cancellationToken.ThrowIfCancellationRequested()`.

#### Example Usage
```csharp
var apiToken = await apiTokenRepository.GetByName("your-token-name");
if (apiToken == null)
{
    // Handle the case where the api token was not found.
}
```

## Exception Handling

While this class handles cancellation through the cancellation token, it is important to be aware that retrieval operations may fail due to issues related to the `IMongoDBContext`. For example, if the MongoDB service is down or misconfigured, exceptions such as `MongoConnectionException` or `MongoCommandException` may arise. Users should implement try-catch blocks to manage these exceptions accordingly.

## Thread Safety

While cancellation tokens are accepted to allow for graceful termination of the operations, this repository may not be thread-safe due to its design. Accessing this repository concurrently from multiple threads may lead to race conditions or data inconsistency. Therefore, care should be taken while utilizing this repository in multi-threaded scenarios.

## Implementation of IAuditableEntity
Ensure the `ApiToken` entity implements the `IAuditableEntity` interface, which should include necessary properties such as `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`, and `Id`, to track modifications and maintain auditing functionality.

## Conclusion

The `ApiTokenRepository` provides specialized methods for fetching API tokens by their unique attributes. When using this repository, be sure to check the parameters carefully and handle null returns from the repository methods appropriately.

## Integration with FluentCMS

For proper operation within the FluentCMS framework, ensure you configure dependency injection for the repository and MongoDB context. Refer to the connection configurations and other necessary initializations to ensure seamless operation.

### Example Dependency Registration
```csharp
services.AddScoped<IMongoDBContext, YourMongoDBContext>();
services.AddScoped<IApiExecutionContext, YourApiExecutionContext>();
services.AddScoped<IApiTokenRepository, ApiTokenRepository>();
```