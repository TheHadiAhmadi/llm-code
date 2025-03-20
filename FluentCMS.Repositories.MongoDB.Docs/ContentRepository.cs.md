# ContentRepository Class Documentation

## Namespace
`FluentCMS.Repositories.MongoDB`

## Class Hierarchy
- **SiteAssociatedRepository&lt;Content&gt;**  
- **ContentRepository**  
   - Implements **IContentRepository**

The `ContentRepository` class facilitates interactions with content items stored in a MongoDB database, specifically tailored for a Content Management System (CMS). It extends the capabilities of the `SiteAssociatedRepository` class, allowing for content-specific data operations such as creating, updating, retrieving, and deleting content items. This class plays a crucial role in managing various types of content (e.g., articles, media) throughout the application.

## Properties
### `Collection`
- **Visibility:** `protected`  
- **Type:** `IMongoCollection<Content>`  
- **Description:** This property provides direct access to the MongoDB collection for performing CRUD operations on `Content` items. The `Collection` is initialized automatically in the base class `SiteAssociatedRepository<Content>` using the provided `IMongoDBContext`. It's pivotal for executing database commands pertinent to content management tasks.

## Constructor
### `ContentRepository(IMongoDBContext mongoDbContext, IApiExecutionContext apiExecutionContext)`
- **Parameters:**  
  - `mongoDbContext`: An instance of `IMongoDBContext`, which is **mandatory** for MongoDB operations. It establishes the connection to the database.  
  - `apiExecutionContext`: An instance of `IApiExecutionContext`, also **mandatory**, containing context-specific information for API execution.

> **Note:** Ensure that neither `mongoDbContext` nor `apiExecutionContext` is null when constructing the `ContentRepository` to prevent runtime exceptions.

## Methods
### `GetAll(Guid contentTypeId, CancellationToken cancellationToken = default)`
- **Visibility:** `public`  
- **Parameters:**  
  - `contentTypeId`: A `Guid` representing the type of content to filter by.  
  - `cancellationToken`: An optional `CancellationToken` for proper cancellation support during long-running operations. Defaults to `default`.  

- **Returns:**  
  - A `Task<IEnumerable<Content>>` representing a collection of `Content` items matching the specified `contentTypeId`. An empty collection will be returned if no items are found without throwing an error, ensuring smooth handling in the calling logic.

- **Exceptions:**  
  - `OperationCanceledException`: Thrown if the operation is canceled via the `cancellationToken`.  
  - `MongoConnectionException`: May occur due to issues with the MongoDB connection during execution.  
  - `InvalidOperationException`: Thrown if the repository encounters operational issues, such as invalid filter conditions.

- **Usage Example:**  
```csharp
try
{
    var contentRepository = new ContentRepository(mongoDbContext, apiExecutionContext);
    var contents = await contentRepository.GetAll(contentTypeId, cancellationToken);
    if (!contents.Any())
    {
        // Handle scenario where no contents are found.
    }
}
catch (OperationCanceledException)
{
    // Handle the cancellation scenario here.
}
catch (MongoConnectionException ex)
{
    // Handle the connection error, log, or retry logic.
}
catch (InvalidOperationException ex)
{
    // Handle invalid operations, such as incorrect filters.
}
```

- **Cancellation Handling:**  
Ensure to call `cancellationToken.ThrowIfCancellationRequested()` at the start of the method to respect user or system-generated cancellation requests early on. This practice is vital in maintaining application responsiveness during long-running tasks.

- **Data Handling:**  
If no content items match the specified `contentTypeId`, an empty collection is returned. Always ensure that your application logic correctly handles this case to avoid potential null reference exceptions while processing the results.

## Inheritable Methods
The `ContentRepository` overrides several methods from the `SiteAssociatedRepository&lt;Content&gt;`. Specifics are as follows:

### `Create(Content entity)`  
  - **Description:** Inserts a new `Content` item into the database. On successful creation, the `Id` of the content is populated. Override this method to implement custom validation logic prior to calling the base method. This method can throw a `MongoConnectionException` if the database operation fails.
  - **Usage Example:**  
```csharp
public override async Task Create(Content entity)
{
    // Example validation logic here
    if (entity == null)
    {
        throw new ArgumentNullException(nameof(entity), "Content cannot be null.");
    }
    await base.Create(entity);
}
```

### `Update(Content entity)`  
  - **Description:** Updates an existing `Content` item based on its Id. If the Id does not exist in the database, it throws an `InvalidOperationException`. Override this method to enforce any additional business logic regarding updates. This method will not carry out the update operation if the specified entity is invalid.
  - **Usage Example:**  
```csharp
public override async Task Update(Content entity)
{
    // Example logging logic before the update
    if (entity == null)
    {
        throw new ArgumentNullException(nameof(entity), "Content cannot be null.");
    }
    await base.Update(entity);
}
```

### `Delete(Guid id)`  
  - **Description:** Deletes a `Content` item using its Id. If no item with the specified Id exists, an `InvalidOperationException` is thrown. You may override this method to implement custom functions for cascading deletions or executing specific business logic, such as logging prior to deletion.
  - **Usage Example:**  
```csharp
public override async Task Delete(Guid id)
{
    // Check related entities or log information before deletion
    await base.Delete(id);
}
```

### `GetById(Guid id)`  
  - **Description:** Retrieves a single `Content` item based on its Id. If the Id cannot be found, an `InvalidOperationException` is thrown. Use this method for quick access to a specific item.
  - **Usage Example:**  
```csharp
var content = await contentRepository.GetById(contentId);
if (content == null)
{
    // Handle scenario where content is not found
}
```

### `Count()`  
  - **Description:** Returns the total number of `Content` items within the database, facilitating pagination or interface updates reflecting content changes. Particularly useful for displaying the total number of records in a user interface.
  - **Usage Example:**  
```csharp
var count = await contentRepository.Count();
// Display or handle count as needed
```

## Best Practices
- **Cancellation Tokens:** Always pass cancellation tokens through various layers of your application to ensure immediate responsiveness to cancellation requests, particularly for lengthy data operations. This consistency is crucial for building responsive applications.
- **Error Handling:** Adopt comprehensive error handling strategies for all database interactions, especially taking into account the potential for connectivity issues with MongoDB. Implement retry policies for transient errors when establishing connections to MongoDB.
- **Content Structure:** Confirm that your `Content` structure adheres to the anticipated design, possessing essential properties such as `Id`, `TypeId`, `Title`, `Body`, and auditing fields (`CreatedOn`, `UpdatedOn`, etc.) to facilitate seamless CRUD operations.

## Dependencies
- **IMongoDBContext:** This repository necessitates an implementation of `IMongoDBContext` to function effectively.  
- **IApiExecutionContext:** It provides crucial context information for managing API-specific operations.

## Common Use Cases
The `ContentRepository` serves various scenarios, including:
- Handling different types of content within a CMS (e.g., articles, blogs, multimedia).  
- Implementing dashboards to showcase or modify content entries based on preset filters.  
- Constructing custom workflows for creating, updating, and deleting content items as part of the application's logic.

## Project Contributions
For contributions to the FluentCMS project, please refer to the [contribution guidelines](#).