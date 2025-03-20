# ContentTypeRepository Class Documentation

The `ContentTypeRepository` class is a repository for managing `ContentType` entities in a MongoDB context. It inherits from [[SiteAssociatedRepository<ContentType>]] and implements the [{IContentTypeRepository}] interface.

## Constructor

### ContentTypeRepository
```csharp
public ContentTypeRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
```
- **Parameters:**  
  - `mongoDbContext`: An instance of `IMongoDBContext` used to interact with the MongoDB database.  
  - `apiExecutionContext`: An instance of `IApiExecutionContext` that provides the API execution context specifics.  

**Note:** The `ContentTypeRepository` class cannot be instantiated directly due to its design for inheritance, which is reflected in the constructor syntax. Users should create a derived class that implements specific functionality.

### Example Signature of Derived Class
```csharp
public class MyContentTypeRepository : ContentTypeRepository
{
    public MyContentTypeRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)
        : base(mongoDbContext, apiExecutionContext)
    {
    }
}
```

## Methods

### GetBySlug
```csharp
public async Task<ContentType?> GetBySlug(Guid siteId, string contentTypeSlug, CancellationToken cancellationToken = default)
```
- **Parameters:**  
  - `siteId`: The unique identifier for the site associated with the content type. Must not be an empty Guid; an `ArgumentException` will be thrown if it is derived from a comparison to `Guid.Empty`.  
  - `contentTypeSlug`: The slug of the content type to retrieve. It should not be null or whitespace; an `ArgumentNullException` will be thrown if this condition isn't met.  
  - `cancellationToken`: An optional cancellation token to signal cancellation of the operation; checked at the beginning of the method.

- **Returns:**  
  - A `ContentType` object if found; otherwise, returns `null` if no matching content type is found.

### Behavior
- The `cancellationToken.ThrowIfCancellationRequested()` method is called at the start of the method to handle cancellation requests effectively.
- The method will throw an `ArgumentNullException` if the `contentTypeSlug` is null or whitespace and an `ArgumentException` if the `siteId` is an empty Guid.
- The method uses a filter to build the search query against the MongoDB collection by checking both `SiteId` and `Slug` values.  
- It may also throw the following exceptions during execution:
  - `MongoConnectionException`: If there are connectivity issues with the database.
  - `InvalidOperationException`: If the query is malformed.
  - `TaskCanceledException`: If the task is canceled.
  - Additional exceptions may arise from null references when processing the results.
- If no content type matches the provided slug and site ID, the method returns `null`, indicating an empty result without throwing an exception.
- The method operates asynchronously, therefore await the call or handle the task appropriately. 

### Example Usage
```csharp
// Assume we have a valid implementation of IMongoDBContext and IApiExecutionContext
ContentTypeRepository contentTypeRepository = new MyContentTypeRepository(mongoDbContext, apiExecutionContext);
var contentType = await contentTypeRepository.GetBySlug(siteId, "blog-post", cancellationToken);
if (contentType == null)
{
    // Handle case when no content type is found, perhaps logging an error or notifying the user.
}
```

### Remarks
- The method utilizes a filter to search for the `ContentType` in the database, specifically by filtering using both `SiteId` and `Slug`, clarifying the interaction of parameters with the MongoDB context.
- The `Collection` property, inherited from [[SiteAssociatedRepository<ContentType>]], is a representation of the MongoDB collection containing the `ContentType` documents. This property is used in the `GetBySlug` method to execute queries against the database.
- Proper handling of the `cancellationToken` is crucial, especially in longer operations, to respect user cancellation requests effectively. 

## Dependency Injection Configuration
- To use the `ContentTypeRepository` within a Dependency Injection (DI) container, register it in your startup configuration:
```csharp
services.AddScoped<IContentTypeRepository, ContentTypeRepository>();
```
- Ensure your configuration class includes all necessary services, especially `IMongoDBContext` and `IApiExecutionContext` necessary for proper functionality.

## Integration Context
- The `IApiExecutionContext` provided to the `ContentTypeRepository` offers essential API context, such as user information and logging capabilities that are relevant during the execution of repository methods. Make use of this context appropriately alongside repository operations.

## Additional Information
- Manage exceptions gracefully when using repository methods, particularly around database connectivity or query execution failures. 
- Review document validation settings via `InsertOneOptions` or `InsertManyOptions` in the context of creating or updating entities in your MongoDB repository.  
- When implementing dependency injection, ensure your repository is registered correctly within the FluentCMS framework, typically in your configuration class.
- Best practices for using cancellation tokens in asynchronous methods include passing a CancellationToken to long-running tasks and ensuring proper handling of cancellation requests during method execution.

This documentation provides insights into using the `ContentTypeRepository` class for managing `ContentType` objects in MongoDB, detailing method functionality and best practices.