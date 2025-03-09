## Project files

This section is the list of available files in current directory

nodes are formatted like this: 
[type] name - summary (keywords)


* **_Imports.razor**:
    Summary: Imports various namespaces for ASP.NET Core Blazor components and JS interop.
    Keywords: Blazor,components,JSInterop,FluentCMS
    Nodes: 



* **_GlobalUsings.cs**:
    Summary: Defines global using directives for components and JavaScript interop in a Blazor web application.
    Keywords: global usings,Blazor,components,JavaScript interop
    Nodes: 



* **StringExtensions.cs**:
    Summary: Provides an extension method for converting strings from PascalCase to kebab-case.
    Keywords: StringExtensions,PascalCase,kebab-case
    Nodes: 
         * [class] StringExtensions - Static class containing string extension methods. (extensions,string,static)
         * [function] FromPascalCaseToKebabCase - Converts a PascalCase string to a kebab-case format. (convert,PascalCase,kebab-case)


* **README.md**:
    Summary: Documentation for a custom Blazor-based component library using Flowbite styles, featuring reusable UI components.
    Keywords: Blazor,component library,UI,Flowbite,installation,contribution
    Nodes: 
         * [section] General Components - List of general UI components included in the library. (Accordion,Button,Modal)
         * [section] Form Components - List of form-related UI components available in the library. (Input,Checkbox,RichTextEditor)
         * [section] Getting Started - Instructions for installing and using the component library in a Blazor project. (installation,setup,usage)
         * [section] Contribution - Guidelines for contributing to the project. (contribution,open-source,pull request)
         * [section] License - Information about the project's licensing under MIT. (MIT License,license,open-source)


* **FluentCMS.Web.UI.Components.csproj**:
    Summary: Defines the project settings and dependencies for the FluentCMS Web UI Components library.
    Keywords: FluentCMS,UI,components,ASP.NET,Razor,project
    Nodes: 
         * [property] TargetFramework - Specifies the target framework the project is built for. (net9.0,framework)
         * [property] PackageId - Identifies the package name for the project. (package,identifier)
         * [property] Version - Defines the version of the package. (version,release)
         * [property] Description - Provides a brief description of the project. (description,info)
         * [package reference] Microsoft.AspNetCore.Components.Web - References the ASP.NET Core components library for web applications. (ASP.NET,Components,library)
         * [embedded resource] IconResource.resx - Specifies the embedded resource for icons. (resource,icon)
         * [none] wwwroot - Includes all files in the wwwroot directory and preserves them in the output directory. (wwwroot,output,files)


* **Styles/tailwind.config.js**:
    Summary: Configuration file for Tailwind CSS, defining content sources, theme colors, and plugins.
    Keywords: tailwindcss,configuration,theme,colors,plugins
    Nodes: 
         * [export] module.exports - Exports the Tailwind CSS configuration object. (export,module,configuration)
         * [constant] content - Specifies file paths for Tailwind to scan for class names. (content,file paths,scanning)
         * [constant] theme - Defines custom theme settings, including color extensions. (theme,custom,colors)
         * [constant] plugins - Lists plugins to be used with Tailwind CSS. (plugins,tailwind,flowbite)


* **Styles/package.json**:
    Summary: Defines scripts and development dependencies for building web UI components using Tailwind CSS and Sass.
    Keywords: package,tailwind,sass,UI,components
    Nodes: 
         * [script] tailwind - Compiles Tailwind CSS from the input file to minified output. (tailwind,css,build)
         * [script] sass - Compiles Sass to CSS from the specified input file. (sass,scss,compile)
         * [script] build - Runs both Sass and Tailwind scripts in sequence. (build,scripts,automation)


* **Styles/package-lock.json**:
    Summary: Manages the package dependencies and versions for the FluentCMS web UI components.
    Keywords: dependencies,fluentcms,web,ui,components,package-lock
    Nodes: 
         * [package] fluentcms.web.ui.components - The main package containing web UI components for FluentCMS. (fluentcms,ui,components,package)
         * [devDependency] flowbite - A set of UI components built on top of Tailwind CSS. (flowbite,ui,components,css)
         * [devDependency] sass - A CSS preprocessor that compiles Sass to CSS. (sass,css,preprocessor)
         * [devDependency] tailwindcss - A utility-first CSS framework for styling. (tailwindcss,css,framework)


* **Extensions/UIComponentServiceExtensions.cs**:
    Summary: Provides extension methods for registering UI component services in a dependency injection container.
    Keywords: UI components,dependency injection,service collection
    Nodes: 
         * [class] UIComponentServiceExtensions - Static class containing extension methods for IServiceCollection. (extensions,class,UIComponent)
         * [function] AddUIComponents - Registers UI components within the provided IServiceCollection. (AddUIComponents,service registration,UI)


* **Enums/Color.cs**:
    Summary: Defines an enumeration for color options used in the UI components.
    Keywords: enum,color,UI,components,FluentCMS
    Nodes: 
         * [enum] Color - Enumeration for various color options in the UI. (enum,colors,options,UI)


* **Base/IBaseComponent.cs**:
    Summary: Defines an interface for UI components including properties for visibility, CSS class, and additional attributes.
    Keywords: interface,UI,component,CSS,attributes,visibility
    Nodes: 
         * [interface] IBaseComponent - Defines properties and methods for a base UI component. (IBaseComponent,interface,component,UI)
         * [property] Visible - Gets or sets the visibility of the component. (visibility,boolean,property)
         * [property] Class - Gets or sets the CSS class of the component. (CSS,class,property)
         * [property] CSSName - Gets or sets the default CSS name of the component. (CSSName,property,CSS)
         * [property] AdditionalAttributes - Gets or sets additional attributes for the component. (attributes,dictionary,property)
         * [method] GetDefaultCSSName - Returns the default CSS name for the component. (method,CSSName,default)


* **Base/BaseComponentHelpers.cs**:
    Summary: Provides helper methods for generating CSS class names for components in a FluentCMS application.
    Keywords: CSS,class generation,components,FluentCMS,helpers
    Nodes: 
         * [class] BaseComponentHelper - Static class containing methods for generating CSS class names for components. (helpers,static,CSS)
         * [constant] CSS_PREFIX - The prefix used for auto-generated CSS class names. (constant,CSS,prefix)
         * [constant] SEPARATOR - The separator used in class name generation. (constant,separator,CSS)
         * [function] ClassName - Generates a class name based on the component and provided name. (class name,generation,component)
         * [function] ClassNames - Generates a list of class names based on component properties with CSS attributes. (class names,properties,CSS)
         * [function] GetClasses - Returns a string of CSS classes for the base component, including user-defined classes. (get classes,base component,CSS)


* **Base/BaseComponent.cs**:
    Summary: Abstract base class for components in the FluentCMS UI, providing common properties and methods for derived components.
    Keywords: FluentCMS,component,UI,base class,parameters,CSS
    Nodes: 
         * [class] BaseComponent - Defines shared properties and methods for UI components. (base class,UI,FluentCMS,abstract)
         * [property] Visible - Indicates whether the component is visible. (boolean,visibility,parameter)
         * [property] Class - Holds optional CSS class name for the component. (CSS,class name,parameter)
         * [property] AdditionalAttributes - Stores additional attributes for the component, captured in a dictionary. (attributes,dictionary,parameter)
         * [property] CSSName - Stores an optional CSS name for the component. (CSS,name,parameter)
         * [function] GetDefaultCSSName - Generates a default CSS class name based on the component's type. (CSS,name,default,method)


* **Attributes/CssPropertyAttribute.cs**:
    Summary: Defines a CSSPropertyAttribute for specifying CSS properties on properties of components.
    Keywords: attribute,CSS,property,FluentCMS,components
    Nodes: 
         * [class] CSSPropertyAttribute - Attribute to specify that a property is related to CSS. (attribute,CSS,FluentCMS)


* **wwwroot/js/tree-selector.js**:
    Summary: Creates a tree selector component for selecting options in a hierarchical format.
    Keywords: tree selector,options,UI component
    Nodes: 
         * [function] TreeSelector - Initializes the tree selector with given options and a callback for value changes. (initialize,tree selector,options)
         * [function] getText - Retrieves the text representation of a given value from the options. (get text,value,options)
         * [function] dispose - Logs a message to indicate that the tree selector should be disposed of. (dispose,cleanup)
         * [function] getValue - Fetches the currently selected value from the element's dataset. (get value,dataset)
         * [function] toggleValue - Toggles the selected value of the tree selector. (toggle,value)
         * [function] setValue - Sets the selected value and updates the UI accordingly. (set value,update,UI)
         * [function] toggleCollapsible - Toggles the visibility of nested options in the tree. (toggle,collapsible,options)
         * [function] setInnerOptions - Recursively sets inner options for the tree selector's menu. (set inner options,menu)
         * [function] setOptions - Sets the top-level options for the tree selector. (set options,top-level)
         * [function] openMenu - Shows the tree selector's dropdown menu. (open,menu)
         * [function] closeMenu - Hides the tree selector's dropdown menu. (close,menu)


* **wwwroot/js/helpers.js**:
    Summary: Implements a debounce function to limit the rate at which a callback can be invoked.
    Keywords: debounce,callback,timer,function
    Nodes: 
         * [function] debounce - Creates a debounced function that delays invoking the provided callback until after a specified timeout. (debounce,callback,timeout,utility)


* **Components/Typography/Typography.razor.cs**:
    Summary: Defines a Typography component with customizable text properties such as alignment, color, size, and weight.
    Keywords: Typography,TextAlign,Color,TextSize,TextWeight,RenderFragment
    Nodes: 
         * [class] Typography - Represents a Typography component with parameters for styling text. (Typography,component,UI)
         * [property] Align - Defines the text alignment for the Typography component. (Align,text,styles)
         * [property] Color - Sets the text color for the Typography component. (Color,text,styles)
         * [property] Size - Specifies the size of the text in the Typography component. (Size,text,styles)
         * [property] Weight - Determines the weight or thickness of the text in the Typography component. (Weight,text,styles)
         * [property] ChildContent - Defines the child content rendered within the Typography component. (ChildContent,RenderFragment,content)


* **Components/Typography/Typography.razor**:
    Summary: Renders a typography component with conditional visibility and additional attributes.
    Keywords: typography,visibility,attributes,component
    Nodes: 
         * [class] Typography - Component for rendering typography with customization options. (typography,component,FluentCMS)
         * [variable] Visible - Determines whether the typography component is displayed. (visibility,boolean)
         * [variable] AdditionalAttributes - Holds additional attributes for the typography component's HTML element. (attributes,HTML)
         * [variable] ChildContent - Represents the content to be displayed inside the typography component. (content,children)


* **Components/Typography/Typography.cs**:
    Summary: Defines enumerations for text alignment, size, and weight used in the UI components.
    Keywords: enums,text alignment,text size,text weight
    Nodes: 
         * [enum] TextAlign - Enumerates the various text alignment options. (alignment,text,UI)
         * [enum] TextSize - Enumerates the different text size options. (size,text,UI)
         * [enum] TextWeight - Enumerates the available text weight options. (weight,text,UI)


* **Styles/Flowbite/Base.scss**:
    Summary: Defines base styles and configurations using Tailwind CSS for the Flowbite component library.
    Keywords: Tailwind,CSS,styles,colors,dark mode,utilities
    Nodes: 
         * [variable] $prefix - Defines a prefix for Flowbite classes. (prefix,class,Flowbite)
         * [variable] $colors - Defines a color palette for the Flowbite components. (colors,palette,theme)
         * [style] html - Sets the font family for the HTML document. (font,family,HTML)
         * [style] body - Applies background color for the body in light mode. (background,body,light)
         * [style] .dark body - Applies background and color scheme for the body in dark mode. (dark mode,background,body)
         * [style] .hidden - Hides elements by setting display to none. (hidden,display,style)


* **Styles/Flowbite/App.scss**:
    Summary: Imports styles for various UI components from the Flowbite framework.
    Keywords: styles,UI components,Flowbite,SCSS
    Nodes: 
         * [import] Base - Imports base style definitions. (base,styles)
         * [import] Accordion - Imports styles for the Accordion component. (accordion,component,UI)
         * [import] Alert - Imports styles for the Alert component. (alert,component,UI)
         * [import] Avatar - Imports styles for the Avatar component. (avatar,component,UI)
         * [import] Badge - Imports styles for the Badge component. (badge,component,UI)
         * [import] Breadcrumb - Imports styles for the Breadcrumb component. (breadcrumb,component,UI)
         * [import] Button - Imports styles for the Button component. (button,component,UI)
         * [import] Card - Imports styles for the Card component. (card,component,UI)
         * [import] CloseButton - Imports styles for the CloseButton component. (close button,component,UI)
         * [import] Confirm - Imports styles for the Confirm component. (confirm,component,UI)
         * [import] DataTable - Imports styles for the DataTable component. (data table,component,UI)
         * [import] Divider - Imports styles for the Divider component. (divider,component,UI)
         * [import] Dropdown - Imports styles for the Dropdown component. (dropdown,component,UI)
         * [import] FormAutocomplete.core - Imports core styles for the FormAutocomplete component. (form,autocomplete,component,core)
         * [import] FormAutocomplete - Imports styles for the FormAutocomplete component. (form,autocomplete,component)
         * [import] FormCheckbox - Imports styles for the FormCheckbox component. (form,checkbox,component)
         * [import] FormCheckboxGroup - Imports styles for the FormCheckboxGroup component. (form,checkbox group,component)
         * [import] FormDateInput - Imports styles for the FormDateInput component. (form,date input,component)
         * [import] FormField - Imports styles for the FormField component. (form,field,component)
         * [import] FormFileUpload - Imports styles for the FormFileUpload component. (form,file upload,component)
         * [import] FormInput - Imports styles for the FormInput component. (form,input,component)
         * [import] FormLabel - Imports styles for the FormLabel component. (form,label,component)
         * [import] FormMarkdownEditor.core - Imports core styles for the FormMarkdownEditor component. (form,markdown editor,component,core)
         * [import] FormMarkdownEditor - Imports styles for the FormMarkdownEditor component. (form,markdown editor,component)
         * [import] FormNumberInput - Imports styles for the FormNumberInput component. (form,number input,component)
         * [import] FormTreeSelector - Imports styles for the FormTreeSelector component. (form,tree selector,component)
         * [import] FormRichTextEditor.core - Imports core styles for the FormRichTextEditor component. (form,rich text editor,component,core)
         * [import] FormRichTextEditor - Imports styles for the FormRichTextEditor component. (form,rich text editor,component)
         * [import] FormRadioGroup - Imports styles for the FormRadioGroup component. (form,radio group,component)
         * [import] FormSelect - Imports styles for the FormSelect component. (form,select,component)
         * [import] FormSwitch - Imports styles for the FormSwitch component. (form,switch,component)
         * [import] FormTextarea - Imports styles for the FormTextarea component. (form,textarea,component)
         * [import] Grid - Imports styles for the Grid component. (grid,component,UI)
         * [import] Icon - Imports styles for the Icon component. (icon,component,UI)
         * [import] Indicator - Imports styles for the Indicator component. (indicator,component,UI)
         * [import] InlineEditor - Imports styles for the InlineEditor component. (inline editor,component,UI)
         * [import] Modal - Imports styles for the Modal component. (modal,component,UI)
         * [import] Pagination - Imports styles for the Pagination component. (pagination,component,UI)
         * [import] Spacer - Imports styles for the Spacer component. (spacer,component,UI)
         * [import] Spinner - Imports styles for the Spinner component. (spinner,component,UI)
         * [import] Stack - Imports styles for the Stack component. (stack,component,UI)
         * [import] Stepper - Imports styles for the Stepper component. (stepper,component,UI)
         * [import] Tabs - Imports styles for the Tabs component. (tabs,component,UI)
         * [import] Toast - Imports styles for the Toast component. (toast,component,UI)
         * [import] Tooltip - Imports styles for the Tooltip component. (tooltip,component,UI)
         * [import] Typography - Imports styles for the Typography component. (typography,component,UI)


* **Components/Tooltip/Tooltip.razor.js**:
    Summary: Handles the initialization and disposal of tooltips in a web application using Flowbite.
    Keywords: tooltips,initialize,dispose,Flowbite,UI,update
    Nodes: 
         * [function] update - Updates the tooltip configuration for a given element. (update,tooltip,config)
         * [function] initialize - Initializes a tooltip for the specified element with defined configuration options. (initialize,tooltip,Flowbite)
         * [function] dispose - Destroys and removes the tooltip associated with the element. (dispose,destroy,tooltip)


* **Components/Tooltip/Tooltip.razor.cs**:
    Summary: Defines a Tooltip component that integrates with JavaScript for display and behavior, supporting asynchronous disposal and rendering.
    Keywords: Tooltip,Component,JavaScript,UI,Razor,Blazor
    Nodes: 
         * [class] Tooltip - Represents a Tooltip component that can be rendered in a Blazor application. (Tooltip,Component,Blazor)
         * [method] DisposeAsync - Asynchronously disposes of the Tooltip component and cleans up resources. (dispose,async,cleanup)
         * [method] OnInitializedAsync - Initializes the Tooltip component and sets up the .NET reference for JavaScript interop. (initialize,async,setup)
         * [method] OnAfterRenderAsync - Handles logic after the component has been rendered, including JavaScript module initialization. (render,async,JavaScript)


* **Components/Tooltip/Tooltip.razor**:
    Summary: Razor component that conditionally renders a tooltip based on visibility and allows for additional attributes.
    Keywords: tooltip,Razor,component,conditional rendering
    Nodes: 
         * [class] Tooltip - Represents a tooltip component that inherits from BaseComponent. (tooltip,component,UI)
         * [variable] Visible - Determines if the tooltip is shown or hidden. (visibility,boolean,conditional)
         * [variable] ChildContent - Holds the content to be displayed inside the tooltip. (content,render)
         * [function] GetClasses - Gets the CSS classes for the tooltip element. (CSS,classes,styling)


* **Components/Tooltip/Tooltip.cs**:
    Summary: Defines an enumeration for tooltip placement options in a UI component.
    Keywords: tooltip,placement,UI,enum
    Nodes: 
         * [enum] TooltipPlacement - Enumerates the possible placements for a tooltip. (tooltip,enum,placement,Top,Right,Bottom,Left)


* **Components/Toast/ToastService.cs**:
    Summary: Handles displaying toast notifications in the application.
    Keywords: toast,notifications,service,UI,FluentCMS
    Nodes: 
         * [class] ToastService - Provides methods to display toast notifications. (toast,service,notifications)
         * [property] ToastProvider - Provider responsible for showing toast notifications. (provider,toast)
         * [method] Show - Displays a toast notification with a message. (show,toast,notification)
         * [method] Show - Displays a toast notification with a message and type. (show,toast,notification,type)


* **Components/Toast/ToastProvider.razor.cs**:
    Summary: A component for managing and displaying toast notifications within a Blazor application.
    Keywords: toast,notifications,Blazor,UI,components
    Nodes: 
         * [class] ToastProvider - Manages toast notifications by showing messages on the UI. (toast,provider,Blazor)
         * [function] Show - Displays a toast message of a specified type for a duration. (show,toast,message)
         * [function] OnInitialized - Initializes the ToastProvider instance with the toast service. (initialize,service,toast)


* **Components/Toast/ToastProvider.razor**:
    Summary: A Blazor component for displaying toast notifications.
    Keywords: toast,Blazor,notifications,UI,components,dismissible
    Nodes: 
         * [component] ToastProvider - Renders a list of toast notifications based on visibility and content. (toast,provider,notifications,UI)


* **Components/Toast/ToastModel.cs**:
    Summary: Represents the model for toast notifications used in the UI components.
    Keywords: toast,notification,UI,model
    Nodes: 
         * [class] ToastModel - Defines a model for a toast notification including duration, message, and type. (class,model,notification)
         * [property] Duration - Specifies the duration for which the toast notification is displayed. (duration,property,int)
         * [property] Message - Contains the message to be displayed in the toast notification. (message,property,string)
         * [property] Type - Indicates the type of toast notification. (type,property,ToastType)


* **Components/Toast/Toast.razor.cs**:
    Summary: Defines a Toast component for displaying temporary notifications in the UI.
    Keywords: Toast,notification,UI,component,Blazor,dismissible
    Nodes: 
         * [class] Toast - Represents a Toast notification component with various parameters. (Toast,component,Blazor)
         * [property] Dismissible - Indicates whether the Toast can be dismissed by the user. (dismissible,boolean,parameter)
         * [property] Show - Controls the visibility of the Toast notification. (visibility,boolean,parameter)
         * [property] Type - Specifies the type of Toast notification (e.g., success, error). (type,ToastType,parameter)
         * [property] ChildContent - Contains the content to be displayed inside the Toast. (content,RenderFragment,parameter)
         * [function] Close - Closes the Toast notification by hiding it. (close,function,toast)


* **Components/Toast/Toast.razor**:
    Summary: Represents a toast notification component that can display messages and optionally be dismissible.
    Keywords: toast,notification,UI,component,alert
    Nodes: 
         * [property] Show - Determines whether the toast is visible. (visibility,show,boolean)
         * [property] Visible - Controls the visibility state of the component. (visibility,state,boolean)
         * [property] Dismissible - Indicates if the toast can be dismissed by the user. (dismiss,user interaction,boolean)
         * [method] Close - Handles the close action for the toast notification. (close,action,handler)
         * [method] GetClasses - Generates the CSS classes for the toast based on its state. (CSS,classes,styling)


* **Components/Toast/Toast.cs**:
    Summary: Defines an enumeration for different types of toast notifications.
    Keywords: toast,notification,enumeration,UI,FluentCMS
    Nodes: 
         * [enum] ToastType - Enumeration for specifying the type of toast notification. (enum,toast,notification,types,UI)


* **Components/Tabs/Tabs.razor.cs**:
    Summary: Defines a Tabs component for managing active tab states and handling change events.
    Keywords: Tabs,Component,Active,Event,RenderFragment,OnChange
    Nodes: 
         * [class] Tabs - Represents a Tabs component that manages the active tab. (Tabs,component,UI)
         * [property] Active - Stores the currently active tab name. (Active,tab,state)
         * [property] OnChange - Event callback triggered when the active tab changes. (OnChange,event,callback)
         * [property] ChildContent - Holds the rendered content of the tabs. (ChildContent,render,fragment)
         * [method] OnInitializedAsync - Initializes the active tab value. (OnInitializedAsync,initialize,async)
         * [method] Activate - Activates a tab and invokes the change event. (Activate,tab,change)


* **Components/Tabs/Tabs.razor**:
    Summary: Defines a tab component that conditionally renders its content based on visibility and supports additional attributes.
    Keywords: tabs,component,conditional rendering,cascading value,FluentCMS,UI
    Nodes: 
         * [component] Tabs - Renders a tab container that displays child content if the component is visible. (tabs,UI,rendering,visibility)
         * [property] Visible - Determines whether the tabs are displayed. (visibility,boolean,state)
         * [method] GetClasses - Returns the CSS classes for the tab component. (CSS,classes,styling)
         * [variable] AdditionalAttributes - Holds additional HTML attributes for the tab component. (attributes,HTML,customization)
         * [variable] ChildContent - Represents the content to be rendered inside the tab component. (content,rendering,children)


* **Components/Tabs/TabPanel.razor.cs**:
    Summary: Represents a panel within a tabbed interface, managing its active state and content.
    Keywords: TabPanel,tabs,UI,Blazor,render,components
    Nodes: 
         * [class] TabPanel - Component that defines a tab panel within the Tab control. (TabPanel,component,class)
         * [property] Active - Determines if the TabPanel is currently active based on its Name and the Parent's value. (active,property,tab)
         * [property] Name - The name of the TabPanel for identification purposes. (name,parameter,identifier)
         * [property] ChildContent - The content to be rendered within the TabPanel. (content,parameter,render)
         * [property] Parent - Reference to the parent Tabs component, enabling access to its state. (parent,cascading,tabs)


* **Components/Tabs/TabPanel.razor**:
    Summary: Defines a TabPanel component that conditionally renders its content based on visibility and additional attributes.
    Keywords: TabPanel,component,UI,FluentCMS,conditional rendering
    Nodes: 
         * [component] TabPanel - Renders a panel for tab content with visibility control and additional attributes. (TabPanel,rendering,visibility)


* **Components/Tabs/TabList.razor.cs**:
    Summary: Defines a TabList component that renders child content in a tabbed interface.
    Keywords: Tabs,Component,RenderFragment
    Nodes: 
         * [class] TabList - Represents a component for displaying a list of tabs. (TabList,component,UI)
         * [variable] ChildContent - Holds the content to be rendered inside the TabList. (RenderFragment,ChildContent,parameter)


* **Components/Tabs/TabList.razor**:
    Summary: Renders a list of tabs with conditional visibility in a Razor component.
    Keywords: tabs,Razor,component,UI,FluentCMS
    Nodes: 
         * [inherits] BaseComponent - Inherits functionality and properties from the BaseComponent class. (inheritance,BaseComponent,component)
         * [variable] Visible - Determines the visibility of the tab list. (visibility,condition)
         * [render block] ChildContent - Placeholder for rendering child content inside the tab list. (content,render,children)


* **Components/Tabs/TabItem.razor.cs**:
    Summary: Represents a single tab item within a tabbed interface, managing its active state and content.
    Keywords: TabItem,tabs,user interface,active state,parameters
    Nodes: 
         * [class] TabItem - Class representing an individual tab item in a tabs component. (TabItem,class,component)
         * [property] Active - Determines if the tab is currently active based on its name matching the parent's value. (active,state,boolean)
         * [property] Name - The name of the tab item, set as a parameter. (name,parameter,string)
         * [property] ChildContent - The content to be rendered within the tab item, set as a parameter. (content,renderfragment,parameter)
         * [property] Parent - Reference to the parent Tabs component, set as a cascading parameter. (parent,cascading,tabs)
         * [function] OnClicked - Handles click events, activating the tab if the parent exists. (click,event,async)


* **Components/Tabs/TabItem.razor**:
    Summary: Defines a tab item component that renders a button within a list item, which can be clicked to perform an action.
    Keywords: tab,component,button,click,UI,FluentCMS
    Nodes: 
         * [class] TabItem - TabItem component that displays a clickable button in a tab interface. (tab,component,UI)
         * [property] Visible - Controls the visibility of the tab item. (visibility,property)
         * [method] OnClicked - Event handler for the button click action. (event,click,handler)


* **Components/Tabs/TabHeader.razor.cs**:
    Summary: Defines a partial class for the TabHeader component, which accepts child content as a render fragment.
    Keywords: component,TabHeader,RenderFragment
    Nodes: 
         * [class] TabHeader - Partial class representing the TabHeader component. (component,UI,Blazor)
         * [parameter] ChildContent - Render fragment for child content to be displayed in the TabHeader. (RenderFragment,parameter,child)


* **Components/Tabs/TabHeader.razor**:
    Summary: Defines a TabHeader component that conditionally renders a header based on its visibility.
    Keywords: TabHeader,component,header,conditional rendering,FluentCMS,Razor
    Nodes: 
         * [component] TabHeader - Renders a header section for tabs, controlling visibility and attributes. (component,header,tab,visibility)


* **Components/Tabs/TabContent.razor.cs**:
    Summary: Represents the content of a tab in the FluentCMS UI, allowing for customizable child content.
    Keywords: tab,content,UI,Blazor,component,render
    Nodes: 
         * [class] TabContent - Partial class for rendering tab content in a UI component. (class,tab,UI,component,Blazor)
         * [property] ChildContent - Parameter to specify custom content for the tab. (parameter,content,render,Blazor)


* **Components/Tabs/TabContent.razor**:
    Summary: Represents the content of a tab in the tabbed interface, with conditional visibility.
    Keywords: tabs,UI,component,Blazor,visibility
    Nodes: 
         * [component] TabContent - Renders the content of a tab if it is visible. (tab,content,render,visible)


* **Components/Stack/Stack.razor.cs**:
    Summary: Defines a Stack component with parameters for gutter, items, justification, wrapping, and vertical layout.
    Keywords: Stack,component,Blazor,layout,parameters,CSS
    Nodes: 
         * [class] Stack - Represents a layout component that organizes child elements in a stack format. (Stack,component,layout,Blazor)
         * [property] Gutter - Defines the spacing between stack items. (gutter,spacing,parameter)
         * [property] Items - Specifies the collection of items to be displayed in the stack. (items,collection,parameter)
         * [property] Justify - Determines the justification of the stack items. (justify,alignment,parameter)
         * [property] Wrap - Indicates whether the items should wrap onto multiple lines. (wrap,line,parameter)
         * [property] Vertical - Specifies if the stack items should be arranged vertically. (vertical,orientation,parameter)
         * [property] ChildContent - Contains the renderable content of the stack component. (child content,render,parameter)


* **Components/Stack/Stack.razor**:
    Summary: Defines a Stack component that renders child content within a div, conditionally based on visibility.
    Keywords: component,stack,razor,UI,FluentCMS
    Nodes: 
         * [class] Stack - Represents a Stack component in the FluentCMS UI framework. (component,base,inheritance)
         * [function] GetClasses - Generates CSS class strings for the component based on its properties. (class,CSS,styles)
         * [variable] Visible - Indicates whether the stack component should be displayed. (visibility,state,boolean)
         * [variable] ChildContent - Represents the content to be rendered within the stack component. (content,child,render)
         * [variable] AdditionalAttributes - Allows additional attributes to be passed to the stack component. (attributes,flexibility,parameters)


* **Components/Stack/Stack.cs**:
    Summary: Defines enumerations for stack layout configurations used in the UI components.
    Keywords: stack,layout,enumerations,gutter,justify,items
    Nodes: 
         * [enum] StackGutter - Defines the spacing options for stack layouts. (gutter,spacing,stack)
         * [enum] StackItems - Specifies the alignment options for items within a stack. (alignment,items,stack)
         * [enum] StackJustify - Sets the justification options for stack layouts. (justification,stack,layout)


* **Components/Stepper/StepperItem.razor.cs**:
    Summary: Represents an item in a stepper UI component with customizable properties for color, icon, title, and subtitle.
    Keywords: stepper,UI component,properties,render fragment
    Nodes: 
         * [class] StepperItem - Defines a UI component that acts as an individual step in a stepper interface. (stepper,component,UI)
         * [variable] Color - Sets the color for the stepper item, defaulting to 'Color.Default'. (color,parameter,CSS)
         * [variable] Icon - Specifies the icon for the stepper item, defaulting to 'IconName.Default'. (icon,parameter,UI)
         * [variable] Subtitle - An optional subtitle for the stepper item. (subtitle,parameter)
         * [variable] Title - An optional title for the stepper item. (title,parameter)
         * [variable] ChildContent - An optional render fragment for custom content within the stepper item. (child content,parameter,render fragment)


* **Components/Stepper/StepperItem.razor**:
    Summary: Represents a stepper item component in a UI, which can display an icon, title, and optional subtitle based on visibility.
    Keywords: stepper,component,UI,icon,title,subtitle
    Nodes: 
         * [variable] Visible - Determines whether the stepper item is displayed. (visibility,condition)
         * [variable] Icon - Specifies the icon to be displayed within the stepper item. (icon,graphic)
         * [variable] Color - Defines the color of the icon displayed in the stepper item. (color,design)
         * [variable] Title - The title text displayed in the stepper item. (title,header)
         * [variable] Subtitle - An optional subtitle text displayed below the title in the stepper item. (subtitle,description)
         * [variable] ChildContent - Holds any additional content to be displayed within the stepper item. (children,content)


* **Components/Stepper/Stepper.razor.cs**:
    Summary: Defines the Stepper component for vertical navigation with child content rendering capabilities.
    Keywords: component,UI,blazor,stepper,navigation
    Nodes: 
         * [class] Stepper - Represents the Stepper component with vertical orientation and customizable child content. (class,component,stepper)
         * [property] Vertical - Indicates if the Stepper is oriented vertically. (boolean,orientation,vertical)
         * [property] ChildContent - Holds the child content to be rendered inside the Stepper. (RenderFragment,content,child)


* **Components/Stepper/Stepper.razor**:
    Summary: Renders a stepper component that displays a list of steps if visible.
    Keywords: stepper,component,UI,FluentCMS,razor
    Nodes: 
         * [component] Stepper - A component that displays a list of steps conditionally based on visibility. (step,list,conditional,render)


* **Components/Spinner/Spinner.razor.cs**:
    Summary: Defines a Spinner component with a configurable color property in a Blazor application.
    Keywords: Spinner,Blazor,UI component,CSS,Color
    Nodes: 
         * [class] Spinner - Represents a Spinner UI component. (Spinner,component,UI)
         * [variable] Color - Property to set the spinner's color, defaulting to the system default color. (Color,property,default)


* **Components/Spinner/Spinner.razor**:
    Summary: Renders a spinner component that displays an SVG based loading animation when visible.
    Keywords: spinner,loading,UI,component,SVG,FluentCMS
    Nodes: 
         * [component] Spinner - Displays a loading spinner based on visibility property. (visibility,render,svg,classes)
         * [property] Visible - Controls the visibility of the spinner. (boolean,control,visibility)
         * [method] GetClasses - Generates CSS classes for the spinner component. (CSS,class,style)


* **Components/Spacer/Spacer.razor.cs**:
    Summary: Defines a Spacer component with a configurable size property for UI layout.
    Keywords: Spacer,UI,component,size,parameter
    Nodes: 
         * [class] Spacer - Represents a UI component that creates a spacer element. (Spacer,component,UI,layout)
         * [variable] Size - Specifies the size of the spacer. (SpacerSize,size,property)


* **Components/Spacer/Spacer.razor**:
    Summary: Represents a spacer component that conditionally renders a div based on the visibility state.
    Keywords: spacer,component,conditional-rendering
    Nodes: 
         * [class] Spacer - Inherits from BaseComponent to create a spacer UI component. (component,spacer,inheritance)
         * [property] Visible - Indicates whether the spacer component is visible. (visibility,boolean,state)
         * [method] GetClasses - Returns CSS classes for the spacer component. (CSS,classes,styling)


* **Components/Spacer/Spacer.cs**:
    Summary: Defines an enumeration for different sizes of spacers used in the UI components.
    Keywords: spacer,size,enum,UI,components
    Nodes: 
         * [enum] SpacerSize - Enumeration representing different spacer sizes: Default, Small, Medium, and Large. (spacer,size,enum)


* **Components/Pagination/PaginationItem.razor.cs**:
    Summary: Represents an individual item in a pagination component, including properties for active and disabled states.
    Keywords: pagination,component,active,disabled,event,render
    Nodes: 
         * [class] PaginationItem - Defines the pagination item with properties for active state, disabled state, and click event handling. (pagination,component,class,UI)
         * [property] Active - Indicates whether the pagination item is currently active. (active,state,bool)
         * [property] Disabled - Indicates whether the pagination item is disabled. (disabled,state,bool)
         * [property] OnClick - Event callback triggered when the pagination item is clicked. (event,click,EventCallback)
         * [property] ChildContent - Content to be rendered inside the pagination item. (content,render,RenderFragment)


* **Components/Pagination/PaginationItem.razor**:
    Summary: Represents a pagination item component that can be displayed in a list with a button.
    Keywords: pagination,component,button,UI,FluentCMS
    Nodes: 
         * [component] PaginationItem - Renders a single pagination item with a button. (pagination,item,button,component)
         * [property] Visible - Determines if the pagination item should be displayed. (visibility,boolean)
         * [property] Disabled - Indicates if the button is disabled. (disabled,button)
         * [event] OnClick - Triggered when the button is clicked. (event,button,click)
         * [content] ChildContent - The content that will be displayed inside the button. (content,button)
         * [method] GetClasses - Returns the CSS classes for the component based on its state. (styles,CSS)


* **Components/Pagination/PaginationInfo.razor.cs**:
    Summary: Represents pagination information including current page, page size, and total items.
    Keywords: pagination,current,size,total,component
    Nodes: 
         * [class] PaginationInfo - Defines a component for displaying pagination information. (pagination,component,UI)
         * [variable] Current - Represents the current page number. (current,page,parameter)
         * [variable] Size - Specifies the number of items per page, defaults to 10. (size,items,parameter)
         * [variable] Total - Indicates the total number of items across all pages. (total,items,parameter)


* **Components/Pagination/PaginationInfo.razor**:
    Summary: Renders pagination information displaying the current range and total items.
    Keywords: pagination,component,Blazor,UI,FluentCMS
    Nodes: 
         * [property] Visible - Determines if the pagination info is visible. (visibility,boolean,status)
         * [property] Current - The current item number in the pagination. (current,item,pagination)
         * [property] Size - The size of the page or the number of items per page. (size,items,pagination)
         * [property] Total - The total number of items available for pagination. (total,items,pagination)
         * [method] GetClasses - Gets the CSS classes for styling the pagination info component. (CSS,styling,classes)


* **Components/Pagination/Pagination.razor.cs**:
    Summary: Defines a Pagination component for navigating through pages of content.
    Keywords: pagination,component,navigation,Blazor,UI,current
    Nodes: 
         * [class] Pagination - Represents the pagination control logic and state. (pagination,class,component,Blazor)
         * [property] Current - Represents the current page number. (current,page,parameter)
         * [property] CurrentChanged - Callback triggered when the current page changes. (event,callback,current)
         * [property] ShowIcons - Determines whether to show icon buttons for pagination. (icons,boolean,show)
         * [property] Total - Total number of items/pages for pagination. (total,items,parameter)
         * [function] Pages - Calculates the range of pages to display in the pagination. (pages,calculation,range)
         * [function] CanPrevious - Checks if there is a previous page available. (previous,check,boolean)
         * [function] CanNext - Checks if there is a next page available. (next,check,boolean)
         * [function] GoTo - Sets the current page and triggers the page changed event. (goto,page,change)
         * [function] Next - Increments the current page if it is not the last page. (next,increment,page)
         * [function] Previous - Decrements the current page if it is not the first page. (previous,decrement,page)


* **Components/Pagination/Pagination.razor**:
    Summary: A pagination component that allows navigation between different pages in a user interface.
    Keywords: pagination,navigation,component,UI,Blazor
    Nodes: 
         * [component] Pagination - Renders a navigation menu with pagination items for page navigation. (UI,navigation,pagination)
         * [function] CanPrevious - Determines if the previous page can be navigated to. (navigation,check,pagination)
         * [function] CanNext - Determines if the next page can be navigated to. (navigation,check,pagination)
         * [function] Pages - Provides a collection of page numbers for the pagination. (pagination,pages,collection)
         * [function] GoTo - Navigates to the specified page number. (navigation,goto,pagination)
         * [property] Visible - Controls the visibility of the pagination component. (visibility,UI,component)
         * [property] ShowIcons - Determines whether to show icons in pagination items. (icons,UI,pagination)
         * [property] AdditionalAttributes - Allows additional attributes to be passed to the pagination component. (attributes,UI,component)
         * [property] Current - Holds the currently active page number. (current,active,pagination)


* **Components/Modal/ModalTitle.razor.cs**:
    Summary: Defines a partial class for a modal title component that accepts child content for rendering.
    Keywords: modal,UI,components,Blazor
    Nodes: 
         * [class] ModalTitle - Partial class for the modal title component, holds child content to be rendered. (modal,title,component)
         * [variable] ChildContent - Parameter for accepting child content in the modal title component. (render,content,parameter)


* **Components/Modal/ModalTitle.razor**:
    Summary: Defines a modal title component that inherits from BaseComponent and displays a heading conditionally.
    Keywords: modal,title,component,UI,Blazor,header
    Nodes: 
         * [component] ModalTitle - Renders a conditional heading based on visibility. (modal,display,heading,conditional)


* **Components/Modal/ModalHeader.razor.cs**:
    Summary: Defines the header for a modal component including parameters for title and closability.
    Keywords: modal,header,component,UI,parameters,Blazor
    Nodes: 
         * [class] ModalHeader - Represents the header section of a modal dialog. (modal,header,component)
         * [property] Closable - Indicates whether the modal can be closed. (closable,boolean,parameter)
         * [property] Modal - Reference to the parent modal component. (modal,cascading,parameter)
         * [property] Title - The title displayed in the modal header. (title,string,parameter)
         * [property] ChildContent - Content to render within the modal header. (content,renderfragment,parameter)


* **Components/Modal/ModalHeader.razor**:
    Summary: Defines the header of a modal component with title and optional close button.
    Keywords: modal,header,component,UI,FluentCMS,razor
    Nodes: 
         * [variable] Visible - Determines if the modal header is displayed. (visibility,modal,header)
         * [variable] ChildContent - Content to be displayed inside the modal header, if provided. (content,modal,header)
         * [variable] Title - The title of the modal header. (title,modal,header)
         * [variable] Closable - Indicates if the modal has a close button. (close,button,modal)
         * [function] GetClasses - Returns CSS classes for the modal header div. (CSS,classes,modal)


* **Components/Modal/ModalFooter.razor.cs**:
    Summary: Defines a ModalFooter component for use in a modal dialog, allowing for additional content to be rendered inside the footer.
    Keywords: Modal,Footer,Component,Blazor,UI,RenderFragment
    Nodes: 
         * [class] ModalFooter - Represents the footer section of a modal dialog. (Modal,Footer,UI Component)
         * [variable] ChildContent - Defines the content to be rendered within the footer of the modal. (RenderFragment,Content,Parameter)


* **Components/Modal/ModalFooter.razor**:
    Summary: Renders the footer of a modal dialog with conditional visibility and customizable attributes.
    Keywords: modal,footer,conditional,attributes
    Nodes: 
         * [directive] inherits - Inherits from the BaseComponent class. (inheritance,BaseComponent)
         * [namespace] FluentCMS.Web.UI.Components - Defines the namespace for modal footer component. (namespace,component)
         * [conditional block] Visible - Checks if the modal footer should be visible. (conditional,visibility)
         * [div] Modal Footer Container - Contains additional attributes and the child content for the modal footer. (div,container,attributes)


* **Components/Modal/ModalBody.razor.cs**:
    Summary: Represents the body content of a modal component in a Blazor application.
    Keywords: Blazor,Modal,RenderFragment
    Nodes: 
         * [class] ModalBody - Class representing the modal body component with a renderable child content. (ModalBody,component,UI)
         * [parameter] ChildContent - Parameter that holds the content to be rendered within the modal body. (ChildContent,RenderFragment,parameter)


* **Components/Modal/ModalBody.razor**:
    Summary: Represents the body of a modal component in the UI, conditionally rendering its content based on visibility.
    Keywords: modal,component,UI,visibility,razor
    Nodes: 
         * [class] ModalBody - Inherits from BaseComponent to manage modal visibility and rendering. (ModalBody,BaseComponent,inheritance)
         * [property] Visible - Indicates whether the modal body is visible or not. (visible,boolean,modal)
         * [attribute] AdditionalAttributes - Allows passing additional attributes to the modal body div. (attributes,div,additional)
         * [method] GetClasses - Returns the CSS classes to be applied to the modal body div. (CSS,classes,styling)
         * [content] ChildContent - Placeholder for the content to be displayed inside the modal body. (child content,rendering,modal)


* **Components/Modal/Modal.razor.js**:
    Summary: Manages modal dialog functionality including opening, closing, and initialization.
    Keywords: modal,dialog,Flowbite,initialize,dispose,show
    Nodes: 
         * [function] close - Closes the specified modal by hiding it. (close,modal,hide)
         * [function] open - Opens the specified modal and sets focus on the element. (open,modal,show,focus)
         * [function] initialize - Initializes a modal with the given configuration and stores it in a Map. (initialize,modal,config,Flowbite)
         * [function] dispose - Destroys and removes the specified modal from management. (dispose,destroy,modal)


* **Components/Modal/Modal.razor.cs**:
    Summary: Defines a Modal component with customizable size, placement, and close event handling.
    Keywords: modal,component,UI,size,placement,event
    Nodes: 
         * [class] Modal - Represents a modal dialog component. (modal,component,UI)
         * [property] Size - Specifies the size of the modal. (size,modal)
         * [property] OnClose - Event callback triggered when the modal is closed. (event,callback)
         * [property] Placement - Determines where the modal is placed on the screen. (placement,position)
         * [property] ChildContent - Defines the content to be displayed inside the modal. (content,render)
         * [function] Close - Closes the modal and invokes the OnClose event callback. (close,modal,event)


* **Components/Modal/Modal.razor**:
    Summary: Represents a modal component that displays content when visible.
    Keywords: modal,UI,component,FluentCMS,Razor,Blazor
    Nodes: 
         * [component] Modal - A modal component that uses cascading value for its children content. (modal,visibility,content,UI,layout)
         * [property] Visible - Determines whether the modal is displayed. (visibility,boolean)
         * [property] ChildContent - Holds the content to be rendered inside the modal. (child,content,render)
         * [method] GetClasses - Generates the CSS classes for the modal element. (CSS,classes,styling)
         * [method] ClassName - Returns a specific CSS class name for the modal component based on its type. (CSS,class,utility)
         * [CascadingValue] CascadingValue - Provides the current modal instance to child components. (cascading,context,children)


* **Components/Modal/Modal.cs**:
    Summary: Defines enums for modal size and placement options in the UI component library.
    Keywords: modal,UI,size,placement,enums
    Nodes: 
         * [enum] ModalSize - Defines the different sizes available for modals. (modal,size,enums)
         * [enum] ModalPlacement - Defines the position options for modals on the screen. (modal,placement,enums)


* **Components/InlineEditor/InlineEditor.razor.js**:
    Summary: Implements inline editor functionality for saving, canceling, and initializing content editing.
    Keywords: inline editor,save,cancel,initialize
    Nodes: 
         * [function] onSave - Handles saving the current content from the editor. (save,editor,content)
         * [function] onCancel - Handles canceling the editing and reverting changes in the editor. (cancel,editor,revert)
         * [function] onInput - Marks the editor as dirty when content is modified. (input,dirty,editor)
         * [function] reinitialize - Resets the editor state and reinitializes it with new content. (reinitialize,editor,content)
         * [function] initialize - Sets up event listeners and initial content for the inline editor. (initialize,editor,setup)
         * [function] dispose - Cleans up event listeners and resets the editor state when done. (dispose,cleanup,editor)


* **Components/InlineEditor/InlineEditor.razor.cs**:
    Summary: Defines an InlineEditor component that allows users to edit text and save or cancel changes asynchronously.
    Keywords: InlineEditor,editing,Blazor,JSInterop,async
    Nodes: 
         * [class] InlineEditor - Represents a component for inline text editing with save and cancel functionality. (component,inline,editor)
         * [method] Save - Saves the edited content and invokes the OnSave callback. (save,callback,async)
         * [method] Cancel - Triggers the cancellation of editing and invokes the OnCancel callback. (cancel,callback,async)
         * [method] DisposeAsync - Cleans up resources and disposes of JS objects when the component is no longer needed. (dispose,cleanup,async)
         * [method] OnAfterRenderAsync - Initializes the JS module and DotNet reference when the component has finished rendering. (render,initialize,async)


* **Components/InlineEditor/InlineEditor.razor**:
    Summary: Renders an inline editor component with action buttons for saving and canceling changes.
    Keywords: inline editor,component,editing,actions,UI,FluentCMS
    Nodes: 
         * [component] InlineEditor - Main component that provides inline editing capabilities with actions. (inline,editing,component)
         * [function] GetClasses - Generates CSS classes for the component. (classes,CSS,styles)
         * [function] ClassName - Generates specific class names for different parts of the inline editor. (class generation,styles,UI)


* **Components/Indicator/Indicator.razor.cs**:
    Summary: Defines a Blazor component for displaying an indicator with customizable color and child content.
    Keywords: Blazor,Indicator,UI,Component,Color,RenderFragment
    Nodes: 
         * [class] Indicator - Represents a UI component for an indicator item in the application. (UI,component,indicator)
         * [property] Color - Gets or sets the color of the indicator, defaulting to 'Color.Default'. (property,color,CSS)
         * [property] ChildContent - Gets or sets the content to be rendered inside the indicator component. (property,render,content)


* **Components/Indicator/Indicator.razor**:
    Summary: Renders an indicator component in a Razor component with optional child content.
    Keywords: indicator,Razor,component,UI,FluentCMS
    Nodes: 
         * [component] Indicator - A UI component that displays an indicator with optional visual elements. (indicator,visual,wrapper,child content)


* **Components/Icon/IconResource.resx**:
    Summary: Defines resources for icons used in the application, including SVG data representations.
    Keywords: resources,icons,SVG,UI,design
    Nodes: 
         * [data] ClipboardList - SVG representation of a clipboard icon. (clipboard,icon,SVG)
         * [data] Delete - SVG representation of a delete icon. (delete,icon,SVG)
         * [data] Edit - SVG representation of an edit icon. (edit,icon,SVG)
         * [data] ExclamationCircle - SVG representation of an exclamation circle icon. (exclamation,icon,SVG)
         * [data] Eye - SVG representation of an eye icon. (eye,icon,SVG)
         * [data] Next - SVG representation of a next arrow icon. (next,arrow,icon,SVG)
         * [data] Plus - SVG representation of a plus icon. (plus,icon,SVG)
         * [data] Previous - SVG representation of a previous arrow icon. (previous,arrow,icon,SVG)
         * [data] GitHub - SVG representation of a GitHub icon. (GitHub,icon,SVG)
         * [data] Discord - SVG representation of a Discord icon. (Discord,icon,SVG)
         * [data] Documentation - SVG representation of a documentation icon. (documentation,icon,SVG)
         * [data] Clock - SVG representation of a clock icon. (clock,icon,SVG)
         * [data] Code - SVG representation of a code icon. (code,icon,SVG)
         * [data] CalendarWeek - SVG representation of a calendar week icon. (calendar,icon,SVG)
         * [data] List - SVG representation of a list icon. (list,icon,SVG)
         * [data] Lock - SVG representation of a lock icon. (lock,icon,SVG)
         * [data] AtSign - SVG representation of an at sign icon. (at sign,icon,SVG)
         * [data] Boolean - SVG representation of a boolean icon. (boolean,icon,SVG)
         * [data] Paragraph - SVG representation of a paragraph icon. (paragraph,icon,SVG)
         * [data] Text - SVG representation of a text icon. (text,icon,SVG)
         * [data] Number - SVG representation of a number icon. (number,icon,SVG)
         * [data] Close - SVG representation of a close icon. (close,icon,SVG)
         * [data] AngleDown - SVG representation of a down angle icon. (angle,down,icon,SVG)
         * [data] AngleUp - SVG representation of an up angle icon. (angle,up,icon,SVG)
         * [data] File - SVG representation of a file icon. (file,icon,SVG)
         * [data] PenNib - SVG representation of a pen nib icon. (pen,nib,icon,SVG)
         * [data] TableColumn - SVG representation of a table column icon. (table,column,icon,SVG)
         * [data] CloudArrowUp - SVG representation of a cloud arrow up icon. (cloud,arrow,up,icon,SVG)
         * [data] Folder - SVG representation of a folder icon. (folder,icon,SVG)
         * [data] Download - SVG representation of a download icon. (download,icon,SVG)
         * [data] ArrowLeft - SVG representation of a left arrow icon. (arrow,left,icon,SVG)
         * [data] Refresh - SVG representation of a refresh icon. (refresh,icon,SVG)
         * [data] EyeSlash - SVG representation of an eye slash icon. (eye,slash,icon,SVG)
         * [data] FolderMove - SVG representation of a move folder icon. (folder,move,icon,SVG)
         * [data] FileMove - SVG representation of a move file icon. (file,move,icon,SVG)
         * [data] Check - SVG representation of a check icon. (check,icon,SVG)
         * [data] ParentFolder - SVG representation of a parent folder icon. (parent,folder,icon,SVG)
         * [data] Image - SVG representation of an image icon. (image,icon,SVG)


* **Components/Icon/IconResource.cs**:
    Summary: Defines an empty class for an icon resource in the FluentCMS web UI components.
    Keywords: icon,resource,component
    Nodes: 
         * [class] IconResource - Represents an icon resource for use in the UI components. (icon,resource,UI)


* **Components/Icon/Icon.razor.cs**:
    Summary: Represents an Icon component with customizable properties such as color, name, and size, utilizing a resource manager for content.
    Keywords: icon,component,resource,parameters,Blazor
    Nodes: 
         * [class] Icon - Defines the Icon component with properties and initialization logic. (Icon,component,Blazor)
         * [property] Content - Stores the markup content for the icon. (markup,content,icon)
         * [property] ResourceManager - Manages resources for the Icon component, injected via DI. (resource,manager,dependency injection)
         * [property] Color - Specifies the color of the icon, defaulting to Color.Default. (color,parameter,CSS)
         * [property] Name - Specifies the name of the icon, defaulting to IconName.Default. (name,parameter,icon)
         * [property] Size - Specifies the size of the icon, defaulting to IconSize.Default. (size,parameter,CSS)
         * [function] OnInitialized - Initializes the icon content based on the icon name. (initialization,icon,resource)


* **Components/Icon/Icon.razor**:
    Summary: Defines a customizable icon component for the UI, inheriting from a base component.
    Keywords: icon,component,UI,FluentCMS, Razor
    Nodes: 
         * [class] Icon - Represents an icon element in the user interface. (icon,component,UI)
         * [if] Visible - Conditionally renders the icon based on its visibility. (conditional,rendering,visibility)
         * [span] Icon Content - Displays the icon content with additional attributes and classes. (span,attributes,classes)


* **Components/Icon/Icon.cs**:
    Summary: Defines enumerations for various icon names and sizes used in the FluentCMS web UI.
    Keywords: icon,enum,FluentCMS,UI,components,size
    Nodes: 
         * [enum] IconName - Lists the names of different icons available. (icon,names,enumeration)
         * [enum] IconSize - Defines the possible sizes for icons. (icon,size,enumeration)


* **Components/Grid/GridItem.razor.cs**:
    Summary: Defines a GridItem component with parameters for controlling size and visibility across different screen sizes.
    Keywords: GridItem,parameters,responsive,visibility,Blazor
    Nodes: 
         * [class] GridItem - Represents a single item within a grid layout with customizable size and visibility properties. (Grid,component,layout,Blazor)
         * [property] Small - Sets the column size for small screens. (size,small,column)
         * [property] Medium - Sets the column size for medium screens. (size,medium,column)
         * [property] Large - Sets the column size for large screens. (size,large,column)
         * [property] HideSmall - Determines if the item should be hidden on small screens. (visibility,hide,small)
         * [property] HideMedium - Determines if the item should be hidden on medium screens. (visibility,hide,medium)
         * [property] HideLarge - Determines if the item should be hidden on large screens. (visibility,hide,large)
         * [property] ChildContent - Represents the content to be rendered inside the grid item. (content,render,child)


* **Components/Grid/GridItem.razor**:
    Summary: Represents a grid item component that renders content conditionally based on visibility.
    Keywords: grid,component,visibility,layout
    Nodes: 
         * [variable] Visible - Determines whether the grid item is visible. (visibility,boolean,state)
         * [variable] AdditionalAttributes - Contains additional HTML attributes to apply to the grid item. (attributes,html,markup)
         * [function] GetClasses - Generates CSS classes for the grid item. (css,styles,layout)
         * [property] ChildContent - Allows rendering of child content within the grid item. (child content,rendering,markup)


* **Components/Grid/GridItem.cs**:
    Summary: Defines an enumeration for grid item column specifications in a UI component.
    Keywords: Grid,UI,enumeration,columns,FluentCMS,Web
    Nodes: 
         * [enum] GridItemColumn - Specifies column configurations for grid items ranging from Auto to Twelve. (enumeration,grid,columns,layout)


* **Components/Grid/Grid.razor.cs**:
    Summary: Defines a Grid component with customizable item sizes, gutters, and justification properties in a Razor component.
    Keywords: Grid,Razor,UI,component,parameters,layout
    Nodes: 
         * [class] Grid - Represents a layout grid component with various customizable parameters. (Grid,component,layout)
         * [property] ItemsSmall - Items configuration for small screens. (Items,small,grid)
         * [property] ItemsMedium - Items configuration for medium screens. (Items,medium,grid)
         * [property] ItemsLarge - Items configuration for large screens. (Items,large,grid)
         * [property] Gutter - Gutter spacing configuration. (Gutter,spacing,grid)
         * [property] GutterX - Horizontal gutter spacing configuration. (GutterX,horizontal,spacing)
         * [property] GutterY - Vertical gutter spacing configuration. (GutterY,vertical,spacing)
         * [property] JustifySmall - Justification method for small screens. (Justify,small,alignment)
         * [property] JustifyMedium - Justification method for medium screens. (Justify,medium,alignment)
         * [property] JustifyLarge - Justification method for large screens. (Justify,large,alignment)
         * [property] NoWrap - Indicates whether the items should wrap. (NoWrap,wrap,items)
         * [property] ChildContent - Content to be rendered within the grid. (ChildContent,render,content)


* **Components/Grid/Grid.razor**:
    Summary: Defines a reusable grid component for a web UI with conditional visibility and customizable attributes.
    Keywords: grid,component,UI,conditional,attributes
    Nodes: 
         * [component] Grid - A Razor component that renders a grid if visible, allowing additional attributes and child content. (grid,visibility,Razor,FluentCMS)


* **Components/Grid/Grid.cs**:
    Summary: Defines enumerations for grid layout configurations in a UI component library.
    Keywords: grid,layout,UI,enumerations
    Nodes: 
         * [enum] GridItems - Enumerates the different alignment options for grid items. (items,alignment,grid)
         * [enum] GridGutter - Enumerates the sizes of gutters used in grid layouts. (gutter,size,layout)
         * [enum] GridJustify - Enumerates justification options for grid items. (justify,alignment,grid)


* **Components/Dropdown/DropdownMenu.razor.cs**:
    Summary: Defines a DropdownMenu component with a parameter for rendering child content.
    Keywords: DropdownMenu,component,Blazor,RenderFragment,UI
    Nodes: 
         * [class] DropdownMenu - Represents a dropdown menu component that can encapsulate child UI content. (Dropdown,Menu,component,class)
         * [variable] ChildContent - Parameter that holds the content to be rendered within the dropdown menu. (child,content,RenderFragment,parameter)


* **Components/Dropdown/DropdownMenu.razor**:
    Summary: Renders a dropdown menu component that displays child content if visible.
    Keywords: dropdown,menu,component,UI,Blazor
    Nodes: 
         * [component] DropdownMenu - Dropdown menu component to display child content in a list format. (dropdown,UI,render,visibility,list)


* **Components/Dropdown/DropdownItem.razor.cs**:
    Summary: Represents a single item within a dropdown component, handling click events and rendering child content.
    Keywords: dropdown,component,item,click,render
    Nodes: 
         * [class] DropdownItem - Represents an item in a dropdown menu. (dropdown,item,component)
         * [property] Href - The URL that the item links to. (URL,link,property)
         * [property] Parent - Reference to the parent dropdown component. (parent,dropdown,reference)
         * [property] OnClick - Callback event invoked when the item is clicked. (event,callback,click)
         * [property] ChildContent - Content to be rendered inside the dropdown item. (content,render,child)
         * [function] OnClicked - Handles the click event, closing the parent dropdown and invoking the OnClick callback. (click,event,handler)


* **Components/Dropdown/DropdownItem.razor**:
    Summary: Represents a dropdown item component that can render as a link or a span based on the presence of an Href property.
    Keywords: dropdown,component,UI,link,span,visibility
    Nodes: 
         * [variable] Visible - Determines if the dropdown item should be rendered. (visibility,rendering,condition)
         * [variable] Href - Holds the URL for the dropdown item link. (link,URL,navigation)
         * [event] OnClicked - Event handler for click events when no Href is present. (click,event,handler)
         * [content] ChildContent - The content to be displayed within the dropdown item (link or span). (content,display,child)


* **Components/Dropdown/DropdownButton.razor.cs**:
    Summary: Represents a dropdown button component in a web UI.
    Keywords: dropdown,button,UI,component
    Nodes: 
         * [class] DropdownButton - Defines the DropdownButton component functionality. (dropdown,button,component,FluentCMS)


* **Components/Dropdown/DropdownButton.razor**:
    Summary: Represents a dropdown button component that inherits properties from a base button.
    Keywords: dropdown,button,UI,component,FluentCMS,razor
    Nodes: 
         * [component] DropdownButton - Renders a button with dropdown functionality, accepting various attributes and properties. (dropdown,button,UI,FluentCMS)
         * [property] Visible - Determines whether the dropdown button is displayed. (visibility,button)
         * [property] AdditionalAttributes - Allows additional attributes to be passed to the button. (attributes,button)
         * [property] Color - Specifies the color of the dropdown button. (color,button)
         * [property] Disabled - Indicates if the dropdown button is disabled. (disabled,button)
         * [property] Ghost - Determines if the button is styled as a ghost button. (ghost,button)
         * [property] Href - Specifies the hyperlink reference for the button. (link,href)
         * [property] Outline - Indicates if the button has an outline style. (outline,button)
         * [property] Size - Defines the size of the dropdown button. (size,button)
         * [property] Type - Specifies the type of the button. (type,button)
         * [content] ChildContent - Represents the content inside the dropdown button. (content,button)


* **Components/Dropdown/Dropdown.razor.js**:
    Summary: Manages the lifecycle and visibility of dropdown components in a web application.
    Keywords: dropdown,visibility,initialize,dispose,update,Flowbite
    Nodes: 
         * [function] update - Updates the visibility of a dropdown based on the provided configuration. (update,visibility,dropdown)
         * [function] initialize - Initializes a dropdown component and sets up event handlers for visibility updates. (initialize,event handlers,dropdown)
         * [function] dispose - Cleans up and destroys a dropdown component, removing it from memory. (dispose,cleanup,dropdown)


* **Components/Dropdown/Dropdown.razor.cs**:
    Summary: Implements a Dropdown component with JavaScript interop for handling open/close state and rendering content.
    Keywords: Dropdown,async,JS interop,component,Blazor,EventCallback
    Nodes: 
         * [class] Dropdown - A component that manages a dropdown's state and interactions. (Dropdown,component,state)
         * [property] JS - JavaScript runtime for interop operations. (IJSRuntime,JavaScript,interop)
         * [property] AutoClose - Indicates whether the dropdown should close automatically. (boolean,dropdown,AutoClose)
         * [property] Open - Controls the open/closed state of the dropdown. (boolean,state,Open)
         * [property] OpenChanged - Event callback for changes to the Open property. (EventCallback,OpenChanged,event)
         * [property] ChildContent - Content to be rendered inside the dropdown. (RenderFragment,content,ChildContent)
         * [function] Close - Closes the dropdown if AutoClose is enabled. (Close,dropdown,functionality)
         * [function] Update - Updates the dropdown state and invokes the callback if changed. (JSInvokable,update,state)
         * [function] DisposeAsync - Cleans up resources used by the dropdown and disposes of JavaScript objects. (DisposeAsync,cleanup,async)
         * [function] OnAfterRenderAsync - Initializes the dropdown component after rendering. (OnAfterRenderAsync,initialization,async)


* **Components/Dropdown/Dropdown.razor**:
    Summary: Renders a dropdown component that inherits from a base component and manages its visibility and additional attributes.
    Keywords: dropdown,component,UI,FluentCMS,razor
    Nodes: 
         * [component] Dropdown - A dropdown component that displays child content when visible. (dropdown,CascadingValue,visibility,UI)


* **Components/Divider/Divider.razor.cs**:
    Summary: Defines a Divider component that can contain child content in a Razor application.
    Keywords: Divider,component,Razor,UI,RenderFragment
    Nodes: 
         * [class] Divider - Represents a UI component that can render child content. (Divider,UI,component,Razor)
         * [property] ChildContent - Holds the content to be rendered inside the Divider component. (property,RenderFragment,content)


* **Components/Divider/Divider.razor**:
    Summary: Defines a Divider component for displaying a horizontal rule with optional text.
    Keywords: Divider,component,UI,horizontal rule,FluentCMS
    Nodes: 
         * [class] Divider - Renders a horizontal divider with optional text and visibility control. (Divider,component,HTML,styles)
         * [variable] Visible - Determines whether the divider is displayed. (visibility,boolean,condition)
         * [variable] ChildContent - Content to be displayed within the divider. (content,display)


* **Components/DataTable/DataTableItem.razor.cs**:
    Summary: Defines a partial class for DataTableItem component with parameters for item display in a DataTable.
    Keywords: DataTable,component,parameters,RenderFragment,FluentCMS,CascadingParameter
    Nodes: 
         * [class] DataTableItem - Partial class for representing an item in a DataTable component. (class,DataTableItem,component,FluentCMS)
         * [parameter] Label - String parameter for the label of the DataTable item. (parameter,Label,DataTable)
         * [parameter] ChildContent - RenderFragment parameter for rendering child content specific to the item. (parameter,ChildContent,RenderFragment)
         * [parameter] Item - Cascading parameter representing the item to be displayed in the DataTable. (parameter,Item,CascadingParameter)
         * [parameter] Header - Cascading parameter that indicates if the item is a column header. (parameter,Header,CascadingParameter)


* **Components/DataTable/DataTableItem.razor**:
    Summary: Defines a Razor component for a data table item, allowing for customizable header and content display.
    Keywords: Razor,data table,component,header,template
    Nodes: 
         * [parameter] TItem - Type parameter allowing flexibility in data item types for the component. (TItem,generic,type)
         * [variable] Header - Boolean to determine if the current cell is a header. (header,boolean,condition)
         * [variable] Label - Label for the header cell, displayed if present. (label,header,display)
         * [variable] ChildContent - Content to be rendered inside a data cell, utilizing the item data. (content,data,render)
         * [method] ClassName - Method to obtain the class name for styling the data table cells. (class,styling,method)


* **Components/DataTable/DataTable.razor.cs**:
    Summary: Defines a generic DataTable component for displaying a list of items with interactive row click functionality.
    Keywords: DataTable,generic,event,row click,parameters,UI
    Nodes: 
         * [class] DataTable<TItem> - A generic class for creating a DataTable component. (class,DataTable,generic,component)
         * [property] OnRowClick - Event callback triggered when a row is clicked. (event,callback,row,click)
         * [property] Items - Read-only list of items to be displayed in the DataTable. (items,list,read-only,display)
         * [property] Hoverable - Indicates whether rows in the DataTable should have hover effects. (hoverable,boolean,UI)
         * [property] ChildContent - Content to be rendered inside the DataTable. (content,render,fragment)
         * [function] HandleRowClick - Handles the row click event and invokes the OnRowClick callback. (handle,row,click,event)


* **Components/DataTable/DataTable.razor**:
    Summary: A data table component that displays a collection of items with support for row click actions and cascading parameters.
    Keywords: data table,component,Blazor,UI,cascading values,item display
    Nodes: 
         * [component] DataTable - Displays a table with data items and handles row clicks. (data,table,component)
         * [property] Items - List of items to be displayed in the data table. (items,data,table)
         * [method] HandleRowClick - Handles click events on table rows. (row,click,event)


* **Components/Confirm/Confirm.razor.cs**:
    Summary: Defines a Confirm dialog component with event callbacks for confirmation and cancellation actions.
    Keywords: Confirm,dialog,component,event,ModalSize,Blazor
    Nodes: 
         * [class] Confirm - Represents a confirmation dialog component with customizable size and content. (Confirm,dialog,component)
         * [property] Size - The size of the modal dialog, defaulting to Medium. (size,ModalSize,property)
         * [property] OnConfirm - Event callback that triggers when the confirm action is performed. (event,callback,confirm)
         * [property] OnCancel - Event callback that triggers when the cancel action is performed. (event,callback,cancel)
         * [property] ChildContent - The content to display within the confirm dialog. (content,RenderFragment,dialog)
         * [function] CancelClicked - Handles the cancel button click event, hiding the dialog and invoking the cancel callback. (cancel,event,JSInvokable)
         * [function] ConfirmClicked - Handles the confirm button click event, hiding the dialog and invoking the confirm callback. (confirm,event)


* **Components/Confirm/Confirm.razor**:
    Summary: Renders a confirmation dialog component with options to confirm or cancel an action.
    Keywords: confirmation,modal,dialog,component,FluentCMS
    Nodes: 
         * [component] Confirm - Displays a confirmation dialog with 'Yes' and 'No' options. (confirm,dialog,user confirmation)
         * [method] ConfirmClicked - Handles the confirmation action when the 'Yes' button is clicked. (confirm,action,user interaction)
         * [method] CancelClicked - Handles the cancellation action when the 'No' button is clicked. (cancel,action,user interaction)


* **Components/CloseButton/CloseButton.razor.cs**:
    Summary: Defines a partial class for the CloseButton component in the FluentCMS UI.
    Keywords: CloseButton,UI,component
    Nodes: 
         * [class] CloseButton - Partial class representing a UI component for closing actions. (CloseButton,component,UI)


* **Components/CloseButton/CloseButton.razor**:
    Summary: Renders a close button component that is visible based on a condition and allows additional attributes.
    Keywords: close button,UI component,FluentCMS
    Nodes: 
         * [component] CloseButton - A button component that displays a close icon if visible. (button,icon,visibility)


* **Components/Card/CardTitle.razor.cs**:
    Summary: Defines a CardTitle component with a parameter for rendering child content.
    Keywords: CardTitle,component,RenderFragment,Blazor
    Nodes: 
         * [class] CardTitle - Represents a component that displays a title for a card UI element. (class,Card,UI)
         * [variable] ChildContent - Parameter for rendering child content within the CardTitle component. (RenderFragment,parameter,content)


* **Components/Card/CardTitle.razor**:
    Summary: Defines a CardTitle component that conditionally renders an h5 element with additional attributes and styling.
    Keywords: CardTitle,component,conditional rendering,attributes
    Nodes: 
         * [component] CardTitle - Renders an h5 HTML element for the title of a card with optional visibility and additional attributes. (CardTitle,UI,FluentCMS)


* **Components/Card/CardHeader.razor.cs**:
    Summary: Defines a CardHeader component with customizable title and child content properties.
    Keywords: CardHeader,component,Blazor,UI,properties
    Nodes: 
         * [class] CardHeader - Represents a header for a card component in the UI. (class,header,UI)
         * [variable] Title - Holds the title of the CardHeader. (title,parameter,string)
         * [variable] ChildContent - Defines additional content to be rendered within the CardHeader. (child content,RenderFragment,parameter)


* **Components/Card/CardHeader.razor**:
    Summary: Represents the header section of a card component with optional title and attributes.
    Keywords: card,header,UI,Blazor,component
    Nodes: 
         * [attribute] Visible - Determines if the card header should be displayed. (visibility,conditional)
         * [variable] Title - Defines the title text for the card header. (title,text)
         * [variable] AdditionalAttributes - Holds additional HTML attributes to be applied to the card header div. (attributes,html)
         * [content] ChildContent - Allows rendering additional child content within the card header. (content,children)


* **Components/Card/CardBody.razor.cs**:
    Summary: Defines the CardBody component that encapsulates child content in a card layout.
    Keywords: CardBody,component,UI,parameters,RenderFragment
    Nodes: 
         * [class] CardBody - Represents a component that holds child content within a card layout. (CardBody,component,UI,layout)
         * [parameter] ChildContent - The content to be rendered inside the CardBody component. (ChildContent,RenderFragment,parameter)


* **Components/Card/CardBody.razor**:
    Summary: Defines a CardBody component for displaying content conditionally based on visibility.
    Keywords: CardBody,component,UI,Razor,conditional rendering
    Nodes: 
         * [class] CardBody - Represents the CardBody component which inherits from BaseComponent and may render content based on its visibility. (CardBody,BaseComponent,Razor)
         * [property] Visible - Determines whether the content inside the CardBody should be visible. (visibility,boolean,conditional)
         * [variable] ChildContent - Holds the content that is passed to the CardBody component. (ChildContent,content,rendering)
         * [method] GetClasses - Returns the CSS classes to be applied to the CardBody element. (CSS,class management,GetClasses)


* **Components/Card/CardActions.razor.cs**:
    Summary: Defines the CardActions component with a renderable content parameter for a card UI.
    Keywords: CardActions,component,UI,RenderFragment
    Nodes: 
         * [class] CardActions - Represents the actions section of a card component. (CardActions,component,UI)
         * [parameter] ChildContent - Holds content to be rendered within the CardActions component. (RenderFragment,content,parameter)


* **Components/Card/CardActions.razor**:
    Summary: Defines a CardActions component that displays child content conditionally based on visibility.
    Keywords: CardActions,component,conditional rendering
    Nodes: 
         * [component] CardActions - Renders child content within a div if the 'Visible' property is true. (render,visible,child content)


* **Components/Card/Card.razor.cs**:
    Summary: Defines a Card component that accepts child content for rendering in a Blazor application.
    Keywords: Card,component,Blazor,UI,RenderFragment
    Nodes: 
         * [class] Card - Represents a UI component that can contain child content in a Blazor application. (Card,UI,component,Blazor)
         * [parameter] ChildContent - A RenderFragment that renders child content within the Card component. (RenderFragment,child,content,parameter)


* **Components/Card/Card.razor**:
    Summary: Represents a Card component for displaying content conditionally based on visibility.
    Keywords: Card,component,UI,conditional rendering
    Nodes: 
         * [variable] Visible - Determines if the card component is visible. (visibility,state,boolean)
         * [variable] AdditionalAttributes - Holds additional HTML attributes for the card element. (attributes,HTML,markup)
         * [function] GetClasses - Returns CSS classes for styling the card component. (CSS,classes,styling)
         * [variable] ChildContent - Represents the content to be rendered inside the card. (content,rendering,child)


* **Components/Button/Button.razor.cs**:
    Summary: Defines a Button component with various customizable properties for styling and behavior.
    Keywords: Button,UI Component,parameters,styles,behavior,properties
    Nodes: 
         * [class] Button - Represents a customizable button component in the UI. (Button,component,UI)
         * [variable] Block - Determines if the button should occupy the full width. (Block,width,boolean)
         * [variable] Color - Sets the color of the button. (Color,button,style)
         * [variable] Disabled - Indicates if the button is disabled. (Disabled,state,boolean)
         * [variable] Ghost - Specifies if the button should have a ghost style. (Ghost,style,boolean)
         * [variable] Href - The URL to navigate to when the button is clicked. (Href,navigation,string)
         * [variable] Link - Denotes if the button is styled as a link. (Link,style,boolean)
         * [variable] Outline - Indicates if the button should have an outline style. (Outline,style,boolean)
         * [variable] Size - Defines the size of the button. (Size,ButtonSize,style)
         * [variable] Type - Specifies the type of button (e.g., submit, button). (Type,ButtonType,behavior)
         * [variable] ChildContent - Contains the content to be rendered inside the button. (ChildContent,render,fragment)


* **Components/Button/Button.razor**:
    Summary: A Razor component that renders either a button or a link, based on the provided properties.
    Keywords: button,link,Razor,component,UI
    Nodes: 
         * [component] Button - Renders a button or a link based on the href property, with additional attributes and styling. (button,link,conditional rendering)


* **Components/Button/Button.cs**:
    Summary: Defines enumerations for button size and type used in the FluentCMS web UI components.
    Keywords: button,enum,size,type
    Nodes: 
         * [enum] ButtonSize - Enumerates the various sizes a button can have. (size,button,enumeration)
         * [enum] ButtonType - Enumerates the different types of buttons available. (type,button,enumeration)


* **Components/Breadcrumb/BreadcrumbItem.razor.cs**:
    Summary: Represents an item in a breadcrumb navigation component with properties for link management and icon display.
    Keywords: breadcrumb,navigation,UI,component,parameters,icon
    Nodes: 
         * [class] BreadcrumbItem - Class representing a breadcrumb item with parameters for link, icon, and child content. (class,breadcrumb,UI,component)
         * [variable] Href - URL associated with the breadcrumb item. (href,link,navigation)
         * [variable] Link - Indicates if the breadcrumb item is a link. (link,boolean,parameter)
         * [variable] IconName - Specifies the icon to display for the breadcrumb item. (icon,iconName,parameter)
         * [variable] ChildContent - RenderFragment for the content inside the breadcrumb item. (content,renderFragment,parameter)


* **Components/Breadcrumb/BreadcrumbItem.razor**:
    Summary: Represents an individual item in a breadcrumb navigation component, handling visibility and icon display.
    Keywords: breadcrumb,navigation,UI component,razor,link,icon
    Nodes: 
         * [component] BreadcrumbItem - Renders a breadcrumb item with conditional link and icon display. (breadcrumb,component,conditional,link,icon)


* **Components/Breadcrumb/Breadcrumb.razor.cs**:
    Summary: Defines a Breadcrumb component for rendering hierarchical navigation using Razor syntax.
    Keywords: Breadcrumb,Razor,UI,Component,Navigation
    Nodes: 
         * [class] Breadcrumb - Represents a breadcrumb navigation component in a web application. (Breadcrumb,component,navigation)
         * [property] ChildContent - Defines the content to be rendered within the Breadcrumb component. (RenderFragment,content,parameter)


* **Components/Breadcrumb/Breadcrumb.razor**:
    Summary: Renders a breadcrumb navigation component with optional visibility and additional attributes.
    Keywords: breadcrumb,navigation,UI,components,razor
    Nodes: 
         * [component] Breadcrumb - A component that generates breadcrumb navigation links. (breadcrumb,nav,component)
         * [property] Visible - Determines if the breadcrumb should be displayed. (visibility,boolean)
         * [property] ChildContent - Content rendered inside the breadcrumb list. (content,render,child)


* **Components/Badge/Badge.razor.cs**:
    Summary: Defines a Badge component with customizable color and child content in a Blazor application.
    Keywords: Badge,Blazor,UI,component,color,child content
    Nodes: 
         * [class] Badge - Represents a Badge component with properties for color and child content. (Badge,component,UI)
         * [property] Color - Sets the color of the Badge, defaulting to Color.Default. (Color,property,parameter)
         * [property] ChildContent - Holds the content to be rendered within the Badge component. (child content,RenderFragment,parameter)


* **Components/Badge/Badge.razor**:
    Summary: Represents a Badge component that displays content conditionally based on visibility.
    Keywords: badge,component,visibility,UI,FluentCMS
    Nodes: 
         * [component] Badge - Displays a badge with optional additional attributes and content if visible. (badge,visibility,UI,FluentCMS)


* **Components/Avatar/Avatar.razor.cs**:
    Summary: Defines a partial class for the Avatar component, allowing for customizable child content.
    Keywords: Avatar,component,RenderFragment,FluentCMS
    Nodes: 
         * [class] Avatar - Represents an Avatar component that can display custom child content. (Avatar,component,class)
         * [property] ChildContent - A parameter to accept child content for the Avatar component. (property,RenderFragment,child content)


* **Components/Avatar/Avatar.razor**:
    Summary: Renders an avatar component with conditional visibility and customizable attributes.
    Keywords: avatar,component,UI,FluentCMS,Razor
    Nodes: 
         * [directive] inherits - Inherits from the BaseComponent class. (inheritance,base,component)
         * [directive] namespace - Defines the namespace for the component. (namespace,FluentCMS,components)
         * [conditional] if(Visible) - Conditionally renders the avatar if it is visible. (conditional,visibility,render)
         * [element] div - Div element for the avatar component with dynamic attributes and classes. (div,attributes,class)


* **Components/Alert/Alert.razor.cs**:
    Summary: Defines a customizable Alert component for displaying messages in the UI, with options for dismissibility and alert type.
    Keywords: Alert,Component,UI,Dismissible,RenderFragment,AlertType
    Nodes: 
         * [class] Alert - Represents an alert UI component that can be dismissible and supports different types. (UI,Component,Alert)
         * [property] Dismissible - Indicates whether the alert can be dismissed by the user. (dismissible,boolean)
         * [property] Type - Specifies the type of alert to display (e.g., error, warning, info). (AlertType,CSSProperty)
         * [property] ChildContent - The content to be displayed within the alert. (RenderFragment,content)
         * [function] Close - Closes the alert by setting its visibility to false. (close,task,visibility)


* **Components/Alert/Alert.razor**:
    Summary: Renders an alert component with optional dismiss functionality in a Razor web application.
    Keywords: alert,component,Razor,UI,FluentCMS
    Nodes: 
         * [class] Alert - A component that represents an alert message which can be visible and dismissible. (Alert,component,UI)
         * [variable] Visible - Controls the visibility of the alert. (visibility,alert)
         * [variable] Dismissible - Determines if the alert can be dismissed. (dismiss,alert)
         * [function] Close - Handles the close action of the alert when dismissible. (close,alert,dismiss)


* **Components/Alert/Alert.cs**:
    Summary: Defines an enumeration for different types of alert notifications.
    Keywords: Alert,AlertType,notification,enum
    Nodes: 
         * [enum] AlertType - Specifies the various types of alert notifications available. (enum,notification,alert,status,type)


* **Components/Accordion/Accordion.razor.js**:
    Summary: Handles the initialization, opening, closing, and disposal of accordion components in a web application.
    Keywords: accordion,open,close,initialize,dispose,Flowbite
    Nodes: 
         * [function] close - Closes the specified accordion component if it is currently active. (close,accordion,active)
         * [function] open - Opens the specified accordion component if it is not currently active. (open,accordion,active)
         * [function] initialize - Initializes a new accordion instance with provided configuration and stores it in the map. (initialize,accordion,Flowbite,configuration)
         * [function] dispose - Destroys the accordion instance and removes it from the map. (dispose,destroy,accordion)


* **Components/Accordion/Accordion.razor.cs**:
    Summary: Defines an Accordion component with functionality for opening and closing panels using JavaScript interop.
    Keywords: accordion,component,async,JavaScript,Blazor
    Nodes: 
         * [class] Accordion - Represents the Accordion component, implementing async disposal. (accordion,class,UI)
         * [property] JS - JavaScript runtime service for invoking JS methods. (JSRuntime,inject,service)
         * [property] Disabled - Indicates if the accordion is disabled. (parameter,boolean,disabled)
         * [property] Summary - The summary text for the accordion. (parameter,string,summary)
         * [property] Open - Determines if the accordion is currently open. (parameter,boolean,open)
         * [property] OpenChanged - Event callback for when the open state changes. (parameter,event,callback)
         * [property] ChildContent - Content to render inside the accordion panels. (parameter,RenderFragment,content)
         * [function] Update - Updates the open state and invokes JavaScript functions to reflect changes. (method,async,update)
         * [function] DisposeAsync - Disposes resources asynchronously when the component is no longer needed. (method,async,dispose)
         * [function] OnAfterRenderAsync - Initializes the JavaScript interop after the component is rendered. (method,async,render)


* **Components/Accordion/Accordion.razor**:
    Summary: Defines an Accordion component to display collapsible content sections with toggled headers.
    Keywords: accordion,collapsible,component,UI,Blazor,FluentCMS
    Nodes: 
         * [component] Accordion - Renders an accordion element with a header and collapsible body. (accordion,header,body,toggle,UI)
         * [variable] Visible - Determines if the accordion is visible. (visibility,boolean,state)
         * [variable] Open - Indicates if the accordion body is currently open. (open,state,toggle)
         * [variable] Summary - Content shown in the accordion header button. (header,summary,text)
         * [variable] Disabled - Specifies if the accordion toggle button is disabled. (disabled,button,state)
         * [variable] ChildContent - The content to display within the accordion body. (content,children,UI)


* **Styles/Flowbite/Components/Typography.scss**:
    Summary: Defines typography styles for various text sizes, weights, and colors in a SCSS format.
    Keywords: typography,styles,text,SCSS,fonts,color
    Nodes: 
         * [variable] $typography - Base variable for typography styles prefixed by a given string. (typography,variable,prefix)
         * [class] .#{$typography} - Main typography class containing styles for different text sizes and weights. (base,typography,class)
         * [class] &-size-h1 - Style for the first-level heading with large font size. (size,h1,heading)
         * [class] &-size-h2 - Style for the second-level heading with large font size. (size,h2,heading)
         * [class] &-size-h3 - Style for the third-level heading with medium font size. (size,h3,heading)
         * [class] &-size-h4 - Style for the fourth-level heading with medium font size. (size,h4,heading)
         * [class] &-size-h5 - Style for the fifth-level heading with smaller font size. (size,h5,heading)
         * [class] &-size-h6 - Style for the sixth-level heading with smaller font size. (size,h6,heading)
         * [class] &-size-extra-small - Style for extra-small text. (size,extra-small)
         * [class] &-size-small - Style for small text. (size,small)
         * [class] &-size-large - Style for large text. (size,large)
         * [class] &-size-extra-large - Style for extra-large text. (size,extra-large)
         * [class] &-weight-thin - Style for thin font weight. (weight,thin)
         * [class] &-weight-extra-light - Style for extra-light font weight. (weight,extra-light)
         * [class] &-weight-normal - Style for normal font weight. (weight,normal)
         * [class] &-weight-medium - Style for medium font weight. (weight,medium)
         * [class] &-weight-semi-bold - Style for semi-bold font weight. (weight,semi-bold)
         * [class] &-weight-bold - Style for bold font weight. (weight,bold)
         * [class] &-weight-extra-bold - Style for extra-bold font weight. (weight,extra-bold)
         * [class] &-weight-black - Style for black font weight. (weight,black)
         * [class] &-align-#{$key} - Styles for text alignment (left, center, right, etc.). (align,text,alignment)
         * [class] &-color-#{$key} - Text color styles using predefined color variables. (color,text,styles)


* **Styles/Flowbite/Components/Tooltip.scss**:
    Summary: Defines styles for tooltip components using Tailwind CSS utilities.
    Keywords: tooltip,styles,CSS,Tailwind,components
    Nodes: 
         * [variable] $tooltip - Constructs the tooltip class name using a prefix. (tooltip,prefix)
         * [style] .#{$tooltip} - Applies base tooltip styles along with visibility management. (styles,tooltip,base)
         * [style] &:not(.visible) - Manages visibility properties of the tooltip when not visible. (visibility,invisible,opacity)


* **Styles/Flowbite/Components/Toast.scss**:
    Summary: Defines styles for toast notifications, including various types and a provider positioning.
    Keywords: toast,styles,notification,UI,scss,Flowbite
    Nodes: 
         * [variable] $toast - Defines the base toast class name with a prefix. (toast,variable,scss)
         * [variable] $toast-types - Maps types of toast notifications to their corresponding colors. (toast,types,color,mapping)
         * [class] .#{ $toast } - Applies base styles to the toast component. (toast,styles,base)
         * [class] .#{ $toast}-type-#{ $type } - Applies type-specific styles for each toast variant. (toast,types,styles)
         * [class] .#{ $toast}-close - Styles for the close button of the toast notifications. (toast,close,button,styles)
         * [class] .#{ $toast}-provider - Positions the toast provider for displaying notifications. (toast,provider,positioning,styles)


* **Styles/Flowbite/Components/Tabs.scss**:
    Summary: Defines styles for tabs components in a responsive layout using Tailwind CSS.
    Keywords: tabs,styles,responsive,Tailwind,components,scss
    Nodes: 
         * [variable] $tabs - Defines the base class for tabs. (tabs,class,variable)
         * [variable] $tab - Defines the base class for a single tab. (tab,class,variable)
         * [class] tabs - Applies full-width styling to the tabs container. (tabs,container,full-width)
         * [class] tab-header - Styles the header of tabs with text attributes. (tab,header,styles)
         * [class] tab-list - Styles the list container for tab items. (tab,list,container)
         * [class] tab-panel - Styles for the tab panel with visibility settings. (tab,panel,visibility)
         * [class] tab-item - Styles for individual tab items and buttons. (tab,item,button)


* **Styles/Flowbite/Components/Stepper.scss**:
    Summary: Defines styles for a stepper component using SCSS with utility classes.
    Keywords: stepper,styles,SCSS,component,utility
    Nodes: 
         * [variable] $stepper - Defines the base class for the stepper component. (stepper,prefix,class)
         * [class] .stepper - Styles for the stepper component, including its items and layout. (stepper,component,layout)
         * [class] .stepper-item - Styles for individual items within the stepper. (stepper,item,styles)
         * [class] .stepper-item-icon - Styles for the icon in each stepper item, including layout and appearance. (icon,stepper,styles)
         * [class] .stepper-item-subtitle - Styles for the subtitle text in each stepper item. (subtitle,text,stepper)
         * [class] .stepper-item-title - Styles for the title text in each stepper item. (title,text,stepper)
         * [class] .stepper-vertical-true - Styles for the vertical layout of the stepper component. (vertical,layout,stepper)


* **Styles/Flowbite/Components/Stack.scss**:
    Summary: Defines styles for a stack component using Tailwind CSS utilities.
    Keywords: stack,flex,styles,Tailwind,gutter,justify
    Nodes: 
         * [variable] $stack - Prefix variable used to construct the stack class. (stack,prefix)
         * [variable] $stack-items - List of alignment options for stack items. (items,alignment,stack)
         * [variable] $stack-justify - List of justification options for stacking content. (justify,stack,content)
         * [class] .#{$stack} - Main stack class that applies flexbox styles and defines item alignment and justification. (stack,flex,alignment)


* **Styles/Flowbite/Components/Spinner.scss**:
    Summary: Defines styles for a spinner component with configurable colors.
    Keywords: spinner,styles,scss,css,animation
    Nodes: 
         * [variable] spinner - Combines prefix with 'spinner' for class naming. (variable,prefix,class)
         * [class] spinner - Styles for the spinner component including size and animation. (spinner,styles,animation)
         * [mixin] each-color - Generates color styles for the spinner based on configured colors. (color,dynamic,styles)


* **Styles/Flowbite/Components/Spacer.scss**:
    Summary: Defines spacer utility styles for different size variants using CSS classes.
    Keywords: spacer,utility,CSS,styles,responsive
    Nodes: 
         * [variable] spacer - Stores the class name prefix for spacer utilities. (variable,spacer,prefix)
         * [class] spacer - Base class for spacer utilities with different size modifiers. (spacer,utility,class)
         * [class] spacer-size-default - Default size applied with height of 4. (default,size,height)
         * [class] spacer-size-medium - Medium size applied with height of 4. (medium,size,height)
         * [class] spacer-size-small - Small size applied with height of 2. (small,size,height)
         * [class] spacer-size-large - Large size applied with height of 8. (large,size,height)


* **Styles/Flowbite/Components/Pagination.scss**:
    Summary: Defines styles for a pagination component using SCSS with utility classes.
    Keywords: pagination,styles,SCSS,utilities,Flowbite,components
    Nodes: 
         * [variable] $pagination - Stores the base class name for the pagination component. (pagination,variable,style)
         * [class] .#{$pagination} - Applies base styles to the pagination component and its child elements. (pagination,component,styles)
         * [class] &-info - Styles for the pagination info section. (pagination,info,text)
         * [class] &-item - Styles for individual pagination items. (pagination,item,button)
         * [class] &-active-true - Styles for the active pagination item. (pagination,active,button)


* **Styles/Flowbite/Components/Modal.scss**:
    Summary: Defines styles for modal components using Tailwind CSS utility classes.
    Keywords: modal,styles,CSS,Tailwind,components,responsive
    Nodes: 
         * [variable] modal - Constructs the modal class name using a prefix. (modal,class,variable)
         * [class] modal - Main styles for the modal component, including positioning and overflow behavior. (modal,layout,style)
         * [class] modal-body - Defines styles for the modal body, with overflow and spacing. (modal,body,style)
         * [class] modal-content - Styles for the modal content area, including background and shadow. (modal,content,style)
         * [class] modal-footer - Defines styles for the modal footer, including spacing and border. (modal,footer,style)
         * [class] modal-header - Styles for the modal header, including spacing and border. (modal,header,style)
         * [class] modal-title - Defines styles for the modal title, including typography. (modal,title,style)
         * [class] modal-wrapper - Wraps the modal content with relative positioning and size constraints. (modal,wrapper,style)
         * [class] modal-size-small - Adjusts the modal wrapper max width for small size. (modal,size,small)
         * [class] modal-size-medium - Adjusts the modal wrapper max width for medium size. (modal,size,medium)
         * [class] modal-size-large - Adjusts the modal wrapper max width for large size. (modal,size,large)
         * [class] modal-placement-top - Defines alignment styles for the modal when placed at the top. (modal,placement,top)
         * [class] modal-placement-middle - Defines alignment styles for the modal when placed in the middle. (modal,placement,middle)
         * [class] modal-backdrop - Styles for the modal backdrop, including background color and positioning. (modal,backdrop,style)


* **Styles/Flowbite/Components/InlineEditor.scss**:
    Summary: Defines styles for an inline editor component, including hover effects and button actions.
    Keywords: inline-editor,styles,SCSS,hover,actions
    Nodes: 
         * [variable] $inline-editor - Stores the class prefix for the inline-editor component. (variable,class,prefix)
         * [mixin] #{$inline-editor} - Styles for the inline-editor component, including hover and focus states. (component,styles,hover,focus)
         * [class] inline-editor-actions - Styles for the action buttons within the inline editor. (actions,buttons,styling)
         * [class] inline-editor-action-save - Styles for the save action button, including hover effect. (save,button,hover)
         * [class] inline-editor-action-cancel - Styles for the cancel action button, including hover effect. (cancel,button,hover)
         * [class] inline-editor-action-message - Styles for the message displayed in the inline editor actions. (message,styling,inline-editor)


* **Styles/Flowbite/Components/Indicator.scss**:
    Summary: Defines styles for an indicator component with customizable color options.
    Keywords: indicator,styles,scss,color,flex,wrapper
    Nodes: 
         * [variable] $indicator-wrapper - Stores the class name for the indicator wrapper. (indicator,wrapper,class)
         * [variable] $indicator-dot - Stores the class name for the indicator dot. (indicator,dot,class)
         * [variable] $indicator - Stores the base class name for the indicator. (indicator,class,base)
         * [style] .#{$indicator-wrapper} - Applies base styles to the indicator wrapper with default colors. (wrapper,styles,default)
         * [style] .#{$indicator-dot} - Applies styles to the indicator dot and sets default colors. (dot,styles,default)


* **Styles/Flowbite/Components/Icon.scss**:
    Summary: Defines styles for icon components including sizes and colors using SCSS variables and mixins.
    Keywords: SCSS,icon,styles,responsive,components,flex
    Nodes: 
         * [variable] icon - Prefix for the icon class name. (prefix,icon)
         * [variable] icon-size - Map defining various sizes for the icons. (sizes,icon,responsive)
         * [mixin] icon - Styles for the icon component that apply flexbox layout and color variations. (icon,style,colors,flex)


* **Styles/Flowbite/Components/Grid.scss**:
    Summary: Defines grid layout and item styles for responsive design using SCSS.
    Keywords: grid,responsive,styles,SCSS,layout,design
    Nodes: 
         * [variable] grid - Prefix for grid class names. (grid,prefix)
         * [variable] grid-column-width - Calculates the width of a grid column based on a 12-column layout. (column,width,grid)
         * [variable] grid-breakpoint - Defines breakpoints for responsive grid. (breakpoint,responsive,grid)
         * [variable] grid-items - Specifies alignment options for grid items. (alignment,grid,items)
         * [variable] grid-gutter - Establishes gutter sizes for different breakpoints. (gutter,spacing,breakpoint)
         * [variable] grid-justify - Defines justification options for grid items. (justification,grid,items)
         * [variable] grid-item-column - Maps the number of columns for grid items. (grid,item,columns)
         * [class] grid - Styles the grid container with responsive properties and gutters. (grid,container,responsive)
         * [class] grid-item - Styles grid items and their behavior in the grid layout. (grid,item,styles)


* **Styles/Flowbite/Components/Dropdown.scss**:
    Summary: Styles for a dropdown component including its items and menu display.
    Keywords: dropdown,styles,SCSS,Flowbite,components
    Nodes: 
         * [variable] $dropdown - Prefix combined with 'dropdown' for component styling. (dropdown,variable,prefix)
         * [class] dropdown - Base styles for the dropdown component. (dropdown,base,styles)
         * [class] dropdown-item - Styles for each item within the dropdown. (item,dropdown,styles)
         * [class] dropdown-menu - Styles for the dropdown menu, including visibility and layout. (menu,dropdown,hidden)
         * [class] dropdown-menu-body - Styles for the body of the dropdown menu. (menu,body,styles)


* **Styles/Flowbite/Components/Divider.scss**:
    Summary: Defines styles for a divider component using utility classes.
    Keywords: divider,styles,scss,components,flowbite
    Nodes: 
         * [variable] divider - Stores the class name for the divider component. (class,divider,variable)
         * [class] divider - Styling for the divider component with utility classes. (divider,styles,utility)
         * [class] divider-line - Styling for the line part of the divider. (line,divider,styles)
         * [class] divider-text - Styling for the text overlay on the divider. (text,divider,styles)


* **Styles/Flowbite/Components/DataTable.scss**:
    Summary: Styles for a responsive DataTable component in a web application using Tailwind CSS.
    Keywords: data-table,styles,Tailwind,responsive,CSS,components
    Nodes: 
         * [variable] $data-table - Defines the base class name for the DataTable component. (variable,class name,base)
         * [class] DataTable - Main styling rules for the DataTable component including layout and text properties. (main,styling,layout)
         * [class] DataTable-cell - Styles for the cell elements within the DataTable. (cell,styles,table)
         * [class] DataTable-head - Defines the styles for the header section of the DataTable. (header,styles,table)
         * [class] DataTable-wrapper - Wraps the DataTable with specific styling for responsiveness and overflow. (wrapper,responsive,overflow)
         * [class] DataTable-row - Applies styles to each row within the DataTable. (row,styles,table)
         * [class] DataTable-hoverable-true - Enables hover effects on rows when the DataTable is set to hoverable. (hover,effects,interaction)


* **Styles/Flowbite/Components/Confirm.scss**:
    Summary: Styles for a confirmation dialog component in Flowbite, including layout and theming specifications.
    Keywords: confirm,modal,styles,Flowbite,Sass,CSS
    Nodes: 
         * [variable] $confirm - Defines the base class for the confirm component using a prefix. (confirmation,class,Sass)
         * [stylesheet] Confirm - Styles for the confirm component, including layout, backdrop, content, and message. (layout,styles,confirm)
         * [utility] &-backdrop - Styles for the backdrop of the confirm dialog, including positioning and background color. (backdrop,background,overlay)
         * [utility] &-body - Styles for the body of the confirm dialog, including padding and icon styling. (body,padding,icon)
         * [utility] &-content - Styles for the content area of the confirm dialog, including background and button positioning. (content,background,positioning)
         * [utility] &-message - Styles for the message text within the confirm dialog. (message,text,font)
         * [utility] &-wrapper - Styles for the wrapper around the confirm dialog, including positioning and sizing. (wrapper,max-width,height)
         * [utility] &-button-stack - Aligns the buttons within the confirm dialog. (button,alignment,stack)


* **Styles/Flowbite/Components/CloseButton.scss**:
    Summary: Styles for a close button component using Flowbite with hover effects and dark mode support.
    Keywords: close-button,styles,Flowbite,SCSS,hover,dark mode
    Nodes: 
         * [variable] close-button - Defines the class name for the close button using a prefix. (variable,class,name)
         * [class] close-button - Applies styles to the close button including colors and dimensions. (close-button,styles,hover)
         * [class] icon - Applies stroke styles to the icon inside the close button. (icon,stroke,styles)


* **Styles/Flowbite/Components/Card.scss**:
    Summary: Defines styles for card components using utility classes for responsive design.
    Keywords: card,styles,CSS,responsive,utility,UI
    Nodes: 
         * [variable] $card - Concatenates the prefix with 'card' to create a class name. (variable,class)
         * [class] .#{$card} - Styles the card component with background, border, rounded corners, and shadow. (component,style,card)
         * [class] &-body - Applies padding styles to the card body for different screen sizes. (body,padding,responsive)
         * [class] &-header - Applies padding styles to the card header for different screen sizes. (header,padding,responsive)
         * [class] &-actions - Styles the card actions with padding and alignment settings. (actions,flex,alignment)
         * [class] &-title - Styles the card title with typography settings. (title,typography,text)


* **Styles/Flowbite/Components/Button.scss**:
    Summary: Defines styles for button components using SCSS with responsive sizing and color variations.
    Keywords: button,styles,scss,responsive,colors,flex
    Nodes: 
         * [variable] $button - Base class for the button component. (button,class,variable)
         * [style] Button Base - Defines base styles for the button, including layout and appearance. (base,styles,button)
         * [style] Button Sizes - Defines styles for various button sizes: default, small, medium, and large. (sizes,small,medium,large)
         * [style] Button Colors - Applies color variations to button based on provided color configuration. (colors,variations,themes)
         * [style] Default Button Color - Styles for the default button color variant. (default,color,style)


* **Styles/Flowbite/Components/Breadcrumb.scss**:
    Summary: Defines styles for breadcrumb navigation components using Tailwind CSS.
    Keywords: breadcrumb,navigation,styles,tailwind,scss
    Nodes: 
         * [variable] $breadcrumb - Defines a breadcrumb variable that concatenates prefix with 'breadcrumb'. (variable,breadcrumb,scss)
         * [class] breadcrumb - Applies flex display for breadcrumb container. (container,flex,breadcrumb)
         * [class] breadcrumb-inner - Styles breadcrumb inner element for inline-flex layout. (inner,inline-flex,spacing)
         * [class] breadcrumb-item - Stylizes each breadcrumb item with flex display. (item,flex,breadcrumb)
         * [class] breadcrumb-item-text - Styles text within breadcrumb item with margin and color. (text,margin,color)
         * [class] breadcrumb-item-link - Adds hover interaction for breadcrumb item links. (link,hover,interaction)
         * [class] breadcrumb-item-icon - Styles icon within the breadcrumb item for text display. (icon,text,display)
         * [class] breadcrumb-item-separator - Defines styling for the separator between breadcrumb items. (separator,style,spacing)


* **Styles/Flowbite/Components/Badge.scss**:
    Summary: Defines styles for badge components with customizable colors using SCSS.
    Keywords: badge,styles,SCSS,color,themes
    Nodes: 
         * [variable] badge - Defines the base class for badge components. (base,badge,variable)
         * [class] badge - Styles for the badge component using utility classes. (styles,badge,component)
         * [class] badge-color-default - Default color styles for the badge. (default,color,badge)
         * [class] badge-color-#{$key} - Dynamic color styles for badges based on defined colors. (dynamic,color,badge)


* **Styles/Flowbite/Components/Avatar.scss**:
    Summary: Defines styles for an avatar component using Flowbite and SCSS.
    Keywords: avatar,styles,SCSS,Flowbite,components,responsive
    Nodes: 
         * [variable] avatar - Creates a variable for the avatar class name using a prefix. (variable,avatar,class)
         * [style] avatar styles - Applies styles to the avatar component including positioning, size, and background. (style,avatar,component,appearance)
         * [nested style] span styles - Applies specific styles for span elements within the avatar. (nested,span,text)


* **Styles/Flowbite/Components/Alert.scss**:
    Summary: Defines styles for alert components with various type variants using SCSS.
    Keywords: alert,styles,SCSS,components,responsive
    Nodes: 
         * [variable] $alert - Concatenates the prefix with 'alert' for component naming. (component,prefix,variable)
         * [variable] $alert-types - Defines a mapping of alert types to their corresponding colors. (mapping,colors,types)
         * [mixin] alert styles - Applies flexbox layout and responsive styles to alert components. (layout,responsive,flex)
         * [nested-class] &-type-#{$type} - Generates styles for each alert type using the defined mapping. (nested,alert-type,styles)
         * [nested-class] .#{$alert}-close - Styles for the close button within an alert component. (close,button,alert)


* **Styles/Flowbite/Components/Accordion.scss**:
    Summary: Styles for accordion components, defining layout and appearance using Tailwind CSS utilities.
    Keywords: accordion,styles,CSS,Tailwind,components
    Nodes: 
         * [variable] $accordion - Holds the base class name for accordion components. (accordion,prefix,variable)
         * [style] .#{$accordion} - Main accordion styling encapsulating content and toggler styles. (accordion,style,layout)
         * [style] .#{$accordion}-content - Styles for the content area of the accordion. (accordion,content,style)
         * [style] .#{$accordion}-toggler - Styles for the toggle button of the accordion. (accordion,toggler,button,style)


* **Components/Form/FormTreeSelector/FormTreeSelector.razor.js**:
    Summary: Provides functionality to initialize, update, and dispose of a tree selector component.
    Keywords: tree selector,initialize,update,dispose,FluentCMS,JavaScript
    Nodes: 
         * [function] update - Updates the value of a tree selector instance based on configuration. (update,value,tree selector)
         * [function] initialize - Initializes a new tree selector instance with provided configuration. (initialize,create,tree selector)
         * [function] dispose - Disposes of the tree selector instance and removes it from management. (dispose,cleanup,tree selector)


* **Components/Form/FormTreeSelector/FormTreeSelector.razor.cs**:
    Summary: A Blazor component for selecting items from a tree structure, utilizing JavaScript interop for client-side functionality.
    Keywords: Blazor,component,tree selector,JavaScript interop,event callback
    Nodes: 
         * [class] FormTreeSelector - Represents a tree selector input component. (tree,selector,component,UI)
         * [property] JS - Injects the JavaScript runtime for client-side interactions. (JavaScript,runtime,injection)
         * [property] Cols - Defines the number of columns for the component layout. (layout,columns,parameter)
         * [property] OnChange - Event callback triggered on value change. (event,callback,change)
         * [property] Items - List of items to display in the tree selector. (items,list,tree,selector)
         * [method] UpdateValue - Updates the selected value and invokes change events. (update,value,event,callback)
         * [method] OnParametersSetAsync - Sets parameters asynchronously and updates the module if necessary. (parameters,async,update)
         * [method] DisposeAsync - Cleans up resources and JavaScript references on disposal. (dispose,resources,cleanup)
         * [method] OnAfterRenderAsync - Initializes the JavaScript module after the first render. (render,initialize,JavaScript)
         * [method] TryParseValueFromString - Attempts to parse the value from string format. (parse,value,string)


* **Components/Form/FormTreeSelector/FormTreeSelector.razor**:
    Summary: A Razor component for a form tree selector that inherits properties from a base input block.
    Keywords: form,selector,Razor,component,input
    Nodes: 
         * [component] FormTreeSelector - Represents a form field selector accommodating dynamic visibility and attributes. (form,input,visibility,attributes)


* **Components/Form/FormTreeSelector/FormTreeSelector.cs**:
    Summary: Defines a TreeSelectorItemType class for creating hierarchical tree selector items in a UI component.
    Keywords: TreeSelector,UI,components,attributes,hierarchical,items
    Nodes: 
         * [class] TreeSelectorItemType - Represents an item in a tree selector with text, icon, key, and nested items. (class,tree,selector,item,UI,structure)
         * [property] Text - Gets or sets the display text of the tree selector item. (text,property,attribute,string)
         * [property] Icon - Gets or sets the icon associated with the tree selector item. (icon,property,attribute,string)
         * [property] Key - Gets or sets the unique key of the tree selector item. (key,property,attribute,string)
         * [property] Items - Gets or sets the collection of nested tree selector items. (items,property,collection,nested)


* **Components/Form/FormTextarea/FormTextarea.razor.cs**:
    Summary: Defines a Razor component for a textarea input with customizable columns and rows.
    Keywords: Razor,textarea,input,component
    Nodes: 
         * [class] FormTextarea - Represents a form textarea component allowing customization of column and row sizes. (FormTextarea,component,textarea,UI)
         * [property] Cols - The number of columns for the textarea. (Cols,textarea,columns)
         * [property] Rows - The number of rows for the textarea. (Rows,textarea,rows)
         * [method] TryParseValueFromString - Parses the string value into the appropriate format and validates it. (TryParseValueFromString,validation,parse)


* **Components/Form/FormTextarea/FormTextarea.razor**:
    Summary: Represents a customizable textarea component for forms with various attributes.
    Keywords: textarea,form,input,component,FluentCMS
    Nodes: 
         * [component] FormTextarea - A form textarea component that inherits from BaseInputBlock to manage input state. (textarea,input,form,FluentCMS)


* **Components/Form/FormSwitch/FormSwitch.razor.cs**:
    Summary: Defines a FormSwitch component with customizable column settings and text display.
    Keywords: FormSwitch,component,UI,Blazor,parameters
    Nodes: 
         * [class] FormSwitch - Represents a switch form component with parameters for layout and display. (class,component,UI,Blazor)
         * [property] Cols - Specifies the number of columns for the FormSwitch component. (parameter,layout,columns)
         * [property] Text - Holds the display text for the FormSwitch component. (parameter,text,display)
         * [method] TryParseValueFromString - Attempts to parse a string value into a boolean, throwing an exception as it's not supported. (method,boolean,parsing)


* **Components/Form/FormSwitch/FormSwitch.razor**:
    Summary: Defines a toggle switch component inheriting from BaseInputInline for boolean values.
    Keywords: toggle,switch,form,input,boolean,checkbox
    Nodes: 
         * [component] FormSwitch - Renders a toggle switch input for boolean values that integrates with form field functionalities. (FormSwitch,input,toggle,boolean)


* **Components/Form/FormSelect/FormSelect.razor.cs**:
    Summary: Represents a generic select form component allowing data binding and value parsing for various item types.
    Keywords: FormSelect,generic,data binding,value parsing,Blazor
    Nodes: 
         * [class] FormSelect - A generic class for creating a select component in a Blazor application. (Blazor,select,component)
         * [property] Cols - Represents the number of columns the select component should span. (property,UI,layout)
         * [property] Data - Collection of items to be displayed in the select component. (data,collection,items)
         * [property] TextField - Defines the property name used for text representation of items. (text field,item representation)
         * [property] ValueField - Defines the property name used for value representation of items. (value field,item representation)
         * [function] IsSelected - Determines if a given item is selected based on the current value. (selection,comparison)
         * [function] GetText - Retrieves the display text for a given item based on the specified TextField. (text retrieval,properties)
         * [function] GetValue - Retrieves the value for a given item based on the specified ValueField. (value retrieval,properties)
         * [function] TryParseValueFromString - Attempts to parse a string input into the specified TValue type. (parsing,validation)
         * [function] FormatValueAsString - Formats the TValue into a string for display purposes. (formatting,value)


* **Components/Form/FormSelect/FormSelect.razor**:
    Summary: Renders a selectable dropdown component for form handling in a Razor application.
    Keywords: Razor,dropdown,form,component,select
    Nodes: 
         * [component] FormSelect - A generic form select component that inherits from BaseInputBlock. (FormSelect,input,dropdown,generic,Razor)
         * [variable] Visible - Determines whether the dropdown is visible in the form. (visibility,form,dropdown)
         * [variable] Data - Collection of items to be rendered as options in the dropdown. (data,options,select)
         * [variable] Placeholder - Placeholder text displayed when no option is selected. (placeholder,select)


* **Components/Form/FormRadioGroup/FormRadioGroup.razor.cs**:
    Summary: Represents a radio group component for forms, allowing selection of an item from a collection.
    Keywords: radio group,form component,Blazor,parameters,event callback
    Nodes: 
         * [class] FormRadioGroup - Generic class that implements a radio group for selecting items. (FormRadioGroup,generic,UI component)
         * [parameter] Cols - Defines the number of columns for the radio group layout. (layout,columns)
         * [parameter] Data - Collection of items to be displayed in the radio group. (data,collection)
         * [parameter] TextField - Property name of the item to be displayed as text. (text,property)
         * [parameter] ValueField - Property name of the item to be used as the value. (value,property)
         * [parameter] Vertical - Determines if the radio buttons are displayed vertically. (vertical,layout)
         * [method] IsChecked - Checks if a specific item is currently selected. (checked,selection)
         * [method] GetText - Retrieves the display text for a specific item based on the TextField. (text retrieval,item)
         * [method] GetValue - Retrieves the value for a specific item based on the ValueField. (value retrieval,item)
         * [method] TryParseValueFromString - Attempts to parse a value from a string for binding. (binding,parsing)
         * [method] FormatValueAsString - Formats the value as a string for display. (formatting,value)
         * [method] HandleChange - Handles change events when the selected item changes. (event,change,callback)


* **Components/Form/FormRadioGroup/FormRadioGroup.razor**:
    Summary: Defines a radio button group component for form input in a Razor application.
    Keywords: radio,form,input,component,FluentCMS,UI
    Nodes: 
         * [type_parameter] TItem - Generic type parameter representing the type of items in the radio group. (generic,type,parameter)
         * [type_parameter] TValue - Generic type parameter representing the value type of the input component. (generic,type,parameter)
         * [component] FormRadioGroup - Renders a group of radio buttons based on provided data, and handles value changes. (render,radio,data,input)
         * [variable] Data - List of items to be rendered as radio buttons. (data,items,list)
         * [function] HandleChange - Handles the change event when a radio button is selected. (event,change,handler)
         * [function] GetValue - Retrieves the value associated with a given item in the radio group. (value,retrieve,item)
         * [function] IsChecked - Determines if a particular item is currently checked in the radio button group. (checked,state,item)
         * [function] GetText - Gets the display text for a given item in the radio group. (text,display,item)


* **Components/Form/FormNumberInput/FormNumberInput.razor.cs**:
    Summary: A Blazor component for handling numeric input fields with validation and formatting capabilities.
    Keywords: Blazor,component,numeric input,validation,formatting,generic
    Nodes: 
         * [class] FormNumberInput - Generic component for capturing number inputs, with validation for supported numeric types. (form input,number,component)
         * [parameter] Cols - Defines the column layout size for the input component. (parameter,layout,size)
         * [parameter] Type - Specifies the type of number input (e.g., Number). (parameter,input type,number)
         * [function] GetStepAttributeValue - Retrieves the appropriate step attribute value based on the TValue type. (helper,attribute,step)
         * [parameter] ParsingErrorMessage - Error message displayed when the input fails to parse as a number. (parameter,error,message)
         * [function] TryParseValueFromString - Attempts to parse a string value into the specified TValue type with error handling. (parsing,validation,converter)
         * [function] FormatValueAsString - Formats the TValue into a string for display, handling various numeric types. (formatting,string,value)


* **Components/Form/FormNumberInput/FormNumberInput.razor**:
    Summary: A Razor component for rendering a number input field with various configurable options.
    Keywords: number input,form field,UI component
    Nodes: 
         * [class] FormNumberInput - Renders a configurable number input within a form. (FormNumberInput,input,component)
         * [property] Visible - Determines whether the input field is displayed. (visibility,input field)
         * [property] Disabled - Indicates if the input field is disabled. (disabled,input field)
         * [function] GetClasses - Returns the CSS classes for styling the input. (CSS,styling,classes)
         * [event] onchange - Handles the change event for the input field. (change,event,input)


* **Components/Form/FormNumberInput/FormNumberInput.cs**:
    Summary: Defines an enum for specifying the type of number input.
    Keywords: enum,number,input,range,FluentCMS
    Nodes: 
         * [enum] NumberInputType - Enumerates the different types of number input available. (enum,number,range)


* **Components/Form/FormLabel/FormLabel.razor.cs**:
    Summary: Defines a partial class for a FormLabel component with parameters for ID, required status, and child content.
    Keywords: FormLabel,UI component,parameters,render fragment
    Nodes: 
         * [class] FormLabel - Represents a label for a form control with options for ID and required indication. (class,FormLabel,UI component)
         * [variable] Id - Optional ID for the label element. (ID,parameter,string)
         * [variable] Required - Indicates whether the label pertains to a required field. (required,boolean,parameter)
         * [variable] ChildContent - Content to be rendered within the label, specified as a fragment. (render fragment,child content,parameter)


* **Components/Form/FormLabel/FormLabel.razor**:
    Summary: Defines a form label component that displays a label element with additional properties and styling.
    Keywords: form,label,component,visibility,attributes
    Nodes: 
         * [component] FormLabel - Represents a label in a form that can be customized with additional attributes and visibility. (FormLabel,label,component)
         * [variable] Visible - Determines whether the label is visible or not. (visibility,bool)
         * [variable] Id - Holds the id attribute for the label. (label,id)
         * [variable] Required - Indicates if the label represents a required field. (required,field)
         * [variable] AdditionalAttributes - Allows passing additional HTML attributes to the label element. (attributes,HTML)
         * [method] GetClasses - Returns the CSS classes to be applied to the label element. (CSS,classes)
         * [content] ChildContent - Represents the content inside the label. (content,label)


* **Components/Form/FormMarkdownEditor/README.md**:
    Summary: Documentation for the FluentCMS Markdown Editor, detailing resources and dependencies.
    Keywords: FluentCMS,Markdown,easymde,editor,documentation,resources
    Nodes: 
         * [resource] easymde.min.js - JavaScript package for the markdown editor. (easymde,JavaScript,markdown)
         * [resource] FormMarkdownEditor.razor.core.css - CSS file for styling the markdown editor. (CSS,styling,markdown)


* **Components/Form/FormMarkdownEditor/FormMarkdownEditor.razor.js**:
    Summary: Manages a Markdown editor using EasyMDE with functionality for initialization, updating, and disposal.
    Keywords: Markdown,editor,EasyMDE,initialize,update,dispose
    Nodes: 
         * [function] update - Updates the value of the Markdown editor instance. (update,editor,value)
         * [function] initialize - Initializes a new EasyMDE instance for the specified element. (initialize,EasyMDE,instance,config)
         * [function] dispose - Cleans up and removes the Markdown editor instance from memory. (dispose,cleanup,editor)


* **Components/Form/FormMarkdownEditor/FormMarkdownEditor.razor.cs**:
    Summary: Defines a Markdown editor component that supports asynchronous operations and JavaScript interop within a Blazor application.
    Keywords: Blazor,Markdown,component,JavaScript,async
    Nodes: 
         * [class] FormMarkdownEditor - Represents a Markdown editor that interacts with JavaScript for dynamic updates. (class,editor,Markdown)
         * [property] JS - JavaScript runtime instance for invoking JavaScript functions. (JS,runtime,interop)
         * [property] Cols - Defines the number of columns for the editor layout. (layout,columns)
         * [method] UpdateValue - Updates the editor's value and triggers a value change event. (update,value,event)
         * [method] OnParametersSetAsync - Handles updates to component parameters and syncs the value with JavaScript. (parameters,async,update)
         * [method] DisposeAsync - Cleans up resources and disposes of JavaScript references asynchronously. (dispose,cleanup,async)
         * [method] OnAfterRenderAsync - Initializes JavaScript connections after the first render of the component. (render,initialization,async)
         * [method] TryParseValueFromString - Parses a string value into the component's value format. (parse,value,string)


* **Components/Form/FormMarkdownEditor/FormMarkdownEditor.razor**:
    Summary: Renders a Markdown editor input component with adjustable properties and visibility.
    Keywords: markdown,editor,input,component,form
    Nodes: 
         * [class] FormMarkdownEditor - Class that inherits from BaseInputBlock to handle a Markdown editor input. (FormMarkdownEditor,input,base,inherits)
         * [conditional] Visible - Displays the form field only if it is set to visible. (conditional,visibility,formField)
         * [textarea] Value - Text area for user input, initialized with Value and additional attributes. (textarea,value,input)


* **Components/Form/FormInput/FormInput.razor.cs**:
    Summary: Defines a FormInput component for a UI framework with properties and value parsing functionality.
    Keywords: UI,FormInput,component,parameter,value parsing
    Nodes: 
         * [class] FormInput - Represents a form input component with configurable columns and value parsing logic. (class,FormInput,UI component)
         * [property] Cols - Specifies the number of columns the input should span, defaulting to 12. (property,Cols,layout)
         * [method] TryParseValueFromString - Attempts to parse a string value into the component's format, returning success status. (method,parsing,value)


* **Components/Form/FormInput/FormInput.razor**:
    Summary: Represents a customizable input field component in a Razor-based web application.
    Keywords: input,component,Razor,form,FluentCMS,UI
    Nodes: 
         * [class] FormInput - A component for rendering an input field within a form. (input,form,customizable,component)
         * [variable] Visible - Determines the visibility of the input field. (visibility,boolean)
         * [variable] Cols - Specifies the column layout of the form field. (layout,columns)
         * [variable] Id - The unique identifier for the input field. (id,identifier)
         * [variable] Hint - Provides additional contextual hint for the input field. (hint,context)
         * [variable] Label - The label displayed for the input field. (label,display)
         * [variable] Required - Indicates whether the input field is mandatory. (required,mandatory,validation)
         * [variable] AdditionalAttributes - Holds any extra HTML attributes to apply to the input element. (attributes,html)
         * [variable] Class - Custom CSS classes to apply to the input field. (CSS,styling)
         * [variable] Disabled - Indicates if the input field is disabled. (disabled,boolean)
         * [variable] NameAttributeValue - Value for the 'name' attribute of the input field. (name,attribute)
         * [variable] Placeholder - Placeholder text displayed when the input field is empty. (placeholder,text)
         * [variable] Readonly - Indicates if the input field is read-only. (readonly,boolean)
         * [method] GetClasses - Returns the CSS classes to apply to the input field based on its state. (CSS,classes,styling)
         * [binding] CurrentValueAsString - The current value of the input field bound as a string. (data-binding,value)


* **Components/Form/FormHiddenInput/FormHiddenInput.razor.cs**:
    Summary: Represents a hidden input component for forms, with functionality to parse values from strings based on the type parameter.
    Keywords: form,hidden input,value parsing,TValue,input validation
    Nodes: 
         * [class] FormHiddenInput - A component for handling hidden input fields in forms with generic type support. (component,generic,form,hidden)
         * [method] TryParseValueFromString - Attempts to parse a string value into the specified TValue type. (parse,string,TValue,validation,input)


* **Components/Form/FormHiddenInput/FormHiddenInput.razor**:
    Summary: Defines a hidden input component that inherits from a base input class.
    Keywords: hidden input,component,Blazor,form,input
    Nodes: 
         * [component] FormHiddenInput - A Blazor component representing a hidden input field. (hidden,input,Blazor component)
         * [typeparam] TValue - Generic type parameter for the value of the input. (generic,type parameter)


* **Components/Form/FormField/FormField.razor.cs**:
    Summary: A Blazor component representing a form field with customizable properties.
    Keywords: Blazor,form,component,UI,parameters,input
    Nodes: 
         * [class] FormField - Represents a reusable form field component with parameters for configuration. (component,form,fields)
         * [variable] Cols - Number of columns the form field spans, default is 12. (layout,columns,responsive)
         * [variable] Dense - Indicates if the field should be rendered in a dense format. (style,dense)
         * [variable] Id - Unique identifier for the form field, defaults to an empty GUID. (identifier,GUID)
         * [variable] Hint - Optional hint text for additional information about the field. (hint,tooltip)
         * [variable] Label - Optional label text for the form field. (label,description)
         * [variable] LabelFragment - Optional RenderFragment for a custom label UI content. (render,fragment,custom)
         * [variable] Required - Specifies whether the field is required for form submission. (validation,required,form)
         * [variable] ChildContent - RenderFragment representing the child content for the field. (content,child)


* **Components/Form/FormField/FormField.razor**:
    Summary: A FormField component that displays a labeled form input along with hints and spacing based on visibility and properties.
    Keywords: form,input,label,hint,component,razor
    Nodes: 
         * [component] FormField - Renders a form field with optional label, hint, and styling. (form,field,label,hint,visibility,styling)


* **Components/Form/FormFieldBreak/FormFieldBreak.razor.cs**:
    Summary: Represents a component that breaks a form layout, with visibility control.
    Keywords: component,form,visibility,break
    Nodes: 
         * [class] FormFieldBreak - A class that defines a form field break component. (class,component,form)
         * [variable] Visible - A boolean property that determines the visibility of the form field break. (property,boolean,visibility)


* **Components/Form/FormFieldBreak/FormFieldBreak.razor**:
    Summary: Renders a form field component conditionally based on visibility.
    Keywords: FormField,conditional rendering,UI components
    Nodes: 
         * [component] FormFieldBreak - A Razor component that conditionally displays a FormField. (FormFieldBreak,Razor,conditional display)


* **Components/Form/FormFileUpload/FormFileUpload.razor.js**:
    Summary: Handles drag-and-drop file upload functionality in a web component.
    Keywords: file upload,drag and drop,event handling,initialization,dispose
    Nodes: 
         * [function] onDragHover - Prevents default behavior on drag hover events. (drag,hover,event)
         * [function] onDragLeave - Prevents default behavior when dragging leaves the upload area. (drag,leave,event)
         * [function] onDrop - Handles the dropping of files, updating the input field with the dropped files. (drop,files,event)
         * [function] initialize - Sets up event listeners for drag-and-drop file upload on the specified element. (initialize,event listeners,drag and drop)
         * [function] dispose - Removes event listeners and cleans up the file upload element. (dispose,cleanup,event listeners)


* **Components/Form/FormFileUpload/FormFileUpload.razor.cs**:
    Summary: Component for file upload functionality, supporting multiple files and various customizable parameters.
    Keywords: file upload,component,Blazor,async,parameters
    Nodes: 
         * [class] FormFileUpload - Represents a file upload component in a Blazor application. (Blazor,file upload,component)
         * [method] HandleChange - Handles the file change event and invokes the OnChange callback. (event,handler,upload)
         * [method] DisposeAsync - Cleans up resources when the component is disposed. (disposal,async,cleanup)
         * [method] OnAfterRenderAsync - Initializes JavaScript module after the component has rendered. (initialization,async,JS integration)


* **Components/Form/FormFileUpload/FormFileUpload.razor**:
    Summary: A Razor component for file upload functionality within a form, allowing users to upload files via drag-and-drop or by clicking.
    Keywords: file upload,form,Razor,UI component,drag and drop,input file
    Nodes: 
         * [component] FormFileUpload - Renders the file upload interface with specific attributes and event handling. (FormFileUpload,component,upload)
         * [method] HandleChange - Handles the file selection change event. (event,file selection,upload)


* **Components/Form/FormDateInput/FormDateInput.razor.cs**:
    Summary: A component for handling date input variations in a Blazor application, supporting different date formats and parsing.
    Keywords: Blazor,date input,validation,formatting,generic type
    Nodes: 
         * [class] FormDateInput - Generically handles date inputs with varying formats. (component,date,input,Blazor,generic)
         * [method] OnParametersSet - Sets the type and format attributes based on the specified InputDateType. (parameters,set,format,attributes)
         * [method] FormatValueAsString - Formats the value as a string according to the chosen date format. (format,value,string,date)
         * [method] TryParseValueFromString - Attempts to parse a string input into a TValue type, handling validation errors. (parse,validation,input,error)


* **Components/Form/FormDateInput/FormDateInput.razor**:
    Summary: Represents a date input component for forms, inheriting from BaseInputBlock with customizable properties.
    Keywords: form,date input,component,Blazor,UI,input
    Nodes: 
         * [component] FormDateInput - A customizable date input field for forms with various attributes. (input,date,form,Blazor)


* **Components/Form/FormCheckboxGroup/FormCheckboxGroup.razor.scss**:
    Summary: Defines styles for the form checkbox group component in a SCSS format.
    Keywords: styles,checkbox,form,SCSS,components
    Nodes: 
         * [variable] $prefix-form-checkbox-group - Combines the prefix with 'form-checkbox-group' for class naming. (prefix,form,checkbox,group)
         * [class] .#{$prefix-form-checkbox-group} - Base styles for the form checkbox group component. (base,styles,checkbox,group)
         * [class] &-vertical-false - Styles for horizontal alignment of checkbox inputs. (alignment,horizontal,flex)
         * [class] &-input - Styles for the checkbox input element. (input,checkbox,styles)
         * [class] &-input-wrapper - Styles for the wrapper around the checkbox input. (wrapper,styles,checkbox)
         * [class] &-label - Styles for the label element associated with the checkbox. (label,text,styles)


* **Components/Form/FormCheckboxGroup/FormCheckboxGroup.razor.cs**:
    Summary: Represents a checkbox group component that allows selection of multiple items with configurable display options.
    Keywords: checkbox,group,component,bind,update,UI
    Nodes: 
         * [class] FormCheckboxGroup - A generic checkbox group component for handling multiple selections. (checkbox,component,multi-select,generic)
         * [property] Cols - Defines the number of columns to display for checkbox items. (columns,layout,UI)
         * [property] Data - The collection of items to be rendered as checkboxes. (data,items,checkbox)
         * [property] TextField - The field in the data items to display as the checkbox label. (text,label,field)
         * [property] ValueField - The field in the data items used for the underlying value. (value,field,binding)
         * [property] Vertical - Indicates if the checkboxes should be arranged vertically. (layout,vertical,UI)
         * [property] ChildContent - Represents additional content to be rendered within the checkbox group. (content,children)
         * [property] OnChange - Event callback triggered when checkbox selection changes. (event,callback,change)
         * [method] HandleChange - Handles the change event for checkboxes, updating the selected values. (handle,change,event)


* **Components/Form/FormCheckboxGroup/FormCheckboxGroup.razor**:
    Summary: Renders a checkbox group component for selecting multiple values in a form.
    Keywords: checkbox,form,input,multiple,select
    Nodes: 
         * [component] FormCheckboxGroup - A checkbox group that allows users to select multiple values from a list. (checkbox,group,form,user input,selection)
         * [function] HandleChange - Handles checkbox change events to update selected values. (change,event,update,selection)
         * [function] IsChecked - Determines if a checkbox is checked based on the provided item value. (checked,status,value,item)
         * [function] GetValue - Retrieves the value associated with a given item. (value,item,retrieve)
         * [function] GetText - Retrieves the display text associated with a given item. (text,display,item)


* **Components/Form/FormCheckbox/FormCheckbox.razor.cs**:
    Summary: Represents a checkbox component for form inputs with customizable properties.
    Keywords: checkbox,form,component,UI,parameters,validation
    Nodes: 
         * [class] FormCheckbox - Checkbox component for UI forms, allowing for text and column configuration. (FormCheckbox,component,UI)
         * [property] Cols - Defines the number of columns the checkbox occupies, defaulting to 12. (Cols,parameters,layout)
         * [property] Text - Optional text displayed next to the checkbox. (Text,label,optional)
         * [method] TryParseValueFromString - Attempts to parse a string value into a boolean; always throws a NotSupportedException. (TryParseValueFromString,validation,boolean)


* **Components/Form/FormCheckbox/FormCheckbox.razor**:
    Summary: Renders a checkbox input field within a form, supporting binding and custom attributes.
    Keywords: checkbox,form,input,binding,UI,component
    Nodes: 
         * [class] FormCheckbox - Component for rendering a checkbox input with form field integration. (component,FormCheckbox,input)
         * [variable] CurrentValue - Holds the current value of the checkbox for data binding. (state,binding,checkbox)
         * [variable] Text - Optional text label displayed beside the checkbox. (label,text,checkbox)


* **Components/Form/FormAutocomplete/README.md**:
    Summary: Documentation for the FluentCMS Markdown Editor, focusing on the usage of the tom-select library for Autocomplete functionality.
    Keywords: FluentCMS,Markdown Editor,tom-select,Autocomplete,resources
    Nodes: 
         * [resource] tom-select.js - JavaScript file for tom-select library used for Autocomplete. (tom-select,JavaScript,library)
         * [resource] FormAutocomplete.razor.core.css - CSS file for styling the tom-select components. (tom-select,CSS,styling)


* **Components/Form/FormAutocomplete/FormAutocompleteMultiple.razor.cs**:
    Summary: A Razor component that implements a multiple item autocomplete form field with JavaScript interactivity.
    Keywords: Razor,autocomplete,form,component,async,JS
    Nodes: 
         * [class] FormAutocompleteMultiple - Component for handling multiple item autocomplete selections. (component,autocomplete,multiple)
         * [method] UpdateValue - Updates the selected values and triggers change events. (update,value,event)
         * [method] OnAfterRenderAsync - Initializes the JavaScript module after the component has rendered. (initialization,JavaScript,render)
         * [method] DisposeAsync - Cleans up the JavaScript module reference on disposal. (dispose,cleanup,async)
         * [method] TryParseValueFromString - Attempts to parse a value from string format (not supported). (parse,value,string)


* **Components/Form/FormAutocomplete/FormAutocompleteMultiple.razor**:
    Summary: Renders a multiple selection dropdown form component that inherits from BaseInputBlock and supports placeholder and options from provided data.
    Keywords: form,autocomplete,dropdown,multiple,input
    Nodes: 
         * [component] FormAutocompleteMultiple - Component to select multiple values from a dropdown list. (FormAutocompleteMultiple,multiple,selection,dropdown)
         * [variable] Visible - Condition to determine if the component should be rendered. (visibility,render)
         * [variable] Placeholder - Text displayed when no option is selected. (placeholder,input,text)
         * [variable] Data - Collection of items provided for selection in the dropdown. (data,collection,options)
         * [function] GetValue - Retrieves the value corresponding to the provided item. (get,value,item)
         * [function] GetText - Retrieves the display text for the provided item. (get,text,item)
         * [function] IsSelected - Determines if an item is currently selected. (is,selected,item)


* **Components/Form/FormAutocomplete/FormAutocomplete.razor.js**:
    Summary: Manages the initialization, updating, and disposal of TomSelect autocomplete components for form elements.
    Keywords: autocomplete,TomSelect,form,update,initialize,dispose
    Nodes: 
         * [function] update - Updates the properties of the autocomplete component based on the provided configuration. (update,config,autocomplete,value,options,disabled)
         * [function] initialize - Initializes a new TomSelect autocomplete component on the specified element. (initialize,TomSelect,autocomplete,config,dotnet)
         * [function] dispose - Destroys the autocomplete component and cleans up resources when no longer needed. (dispose,destroy,cleanup,autocomplete)


* **Components/Form/FormAutocomplete/FormAutocomplete.razor.cs**:
    Summary: Provides a generic autocomplete form component for selecting items asynchronously.
    Keywords: autocomplete,form,component,async,Blazor,JavaScript
    Nodes: 
         * [class] FormAutocomplete - Generic autocomplete component that binds to a selected item. (generic,autocomplete,form,component)
         * [property] JS - Injects the JavaScript runtime for interop calls. (JS,inject,runtime)
         * [property] Cols - Defines the number of columns for layout purposes. (layout,columns,parameter)
         * [property] Data - Collection of items to be displayed in the autocomplete. (data,collection,items)
         * [property] TextField - Specifies the field name to display for each item in the autocomplete. (text,field,parameter)
         * [property] ValueField - Specifies the field name that holds the value for each item. (value,field,parameter)
         * [function] UpdateValue - Updates the value selected in the autocomplete component. (update,value,JSInvokable)
         * [function] OnParametersSetAsync - Handles updates to parameters and calls JS module for updates. (parameters,JS,async)
         * [function] DisposeAsync - Cleans up JS references when the component is disposed. (dispose,async,cleanup)
         * [function] OnAfterRenderAsync - Initializes the component after it has rendered for the first time. (render,initialize,async)
         * [function] TryParseValueFromString - Parses a string value into the appropriate type for components. (parse,value,validation)


* **Components/Form/FormAutocomplete/FormAutocomplete.razor**:
    Summary: A Razor component for an autocomplete form field, allowing selection from provided data or custom content.
    Keywords: autocomplete,form,select,Blazor,component,user-input
    Nodes: 
         * [class] FormAutocomplete - Renders an autocomplete input field as a selection component. (FormAutocomplete,input,selection)
         * [variable] Visible - Determines if the form field should be displayed. (visibility,display,form)
         * [variable] CurrentValueAsString - Holds the current string value of the selected item. (value,string,selected)
         * [variable] Data - Collection of items to be displayed in the autocomplete options. (data,options,collection)
         * [function] GetValue - Retrieves the value of the given item for the selection. (getter,value,item)
         * [function] GetText - Retrieves the display text for the given item in the selection. (getter,text,item)
         * [function] IsSelected - Checks if a given item is currently selected in the autocomplete field. (selected,check,item)


* **Components/Form/BaseInput/BaseInput.cs**:
    Summary: Defines abstract base classes for input components in a UI framework, allowing customization of properties such as visibility, styling, and behavior.
    Keywords: base input,UI component,parameters,generic
    Nodes: 
         * [class] BaseInput - Abstract class for input components with parameters like visibility, class name, and more. (BaseInput,abstract,parameters,component)
         * [method] GetDefaultCSSName - Generates a default CSS class name based on the type of the input. (GetDefaultCSSName,CSS,style,utility)
         * [class] BaseInputInline - Abstract class for inline input components, extending BaseInput. (BaseInputInline,inline,abstract,component)
         * [class] BaseInputBlock - Abstract class for block-style input components, extending BaseInput with a placeholder. (BaseInputBlock,block,abstract,component)


* **Styles/Flowbite/Components/Form/FormTreeSelector.scss**:
    Summary: Defines styles for a tree selector component using Tailwind CSS.
    Keywords: tree-selector,styles,scss,Tailwind CSS,Form,UI
    Nodes: 
         * [variable] $tree-selector - Creates a variable for the tree selector prefix. (variable,prefix,tree-selector)
         * [class] tree-selector-wrapper - Styles for the wrapper of the tree selector. (wrapper,styles,UI)
         * [class] tree-selector-input - Styles for the input field of the tree selector. (input,styles,UI)
         * [class] tree-selector-menu - Styles for the dropdown menu of the tree selector. (menu,dropdown,styles)
         * [class] tree-selector-option - Styles for each option in the tree selector. (option,styles,UI)
         * [class] tree-selector-active-option - Styles for the active option in the tree selector. (active,option,highlight,styles)


* **Styles/Flowbite/Components/Form/FormTextarea.scss**:
    Summary: Defines styles for a form textarea component using a utility-first CSS framework.
    Keywords: form,textarea,styles,CSS,utility
    Nodes: 
         * [variable] $prefix-form-textarea - Combines a prefix with the string 'form-textarea' for class naming. (variable,prefix,class)
         * [style] .#{$prefix-form-textarea} - Applies base styles to the form textarea component. (styles,base,textarea)
         * [style] &-disabled-true - Styles for a disabled state of the form textarea, reducing opacity and changing cursor. (disabled,state,styles)


* **Styles/Flowbite/Components/Form/FormSwitch.scss**:
    Summary: Defines styles for a custom form switch component using Tailwind CSS.
    Keywords: form switch,styles,Tailwind,custom component,CSS
    Nodes: 
         * [variable] $prefix-form-switch - Constructs the class prefix for the form switch component. (prefix,variable,CSS)
         * [class] #{$prefix-form-switch} - Applies base styles for the form switch component, including layout and behavior. (form switch,base styles,CSS)
         * [class] &-input - Hides the input element while keeping it accessible. (input,hidden,accessibility)
         * [class] &-inner - Defines styles for the inner switch representation including background and transition effects. (inner,styles,transition)
         * [class] &-input:focus~&-inner - Adds focus styles to the inner component when the input is focused. (focus,styles,input)
         * [class] &-input:checked~&-inner - Changes the appearance of the inner component when the input is checked. (checked,appearance,styles)
         * [class] &-label - Styles for the label associated with the form switch. (label,text,styles)


* **Styles/Flowbite/Components/Form/FormSelect.scss**:
    Summary: Styles for form select components using Tailwind CSS utilities.
    Keywords: FormSelect,styles,TailwindCSS,SCSS,form
    Nodes: 
         * [variable] $prefix-form-select - Defines a prefix for form select class names. (variable,prefix,selector)
         * [class] #{$prefix-form-select} - Applies styles for the form select component including background and border settings. (form select,styles,TailwindCSS)
         * [class] &-disabled-true - Styles for the disabled state of the form select component. (disabled,styles,form select)


* **Styles/Flowbite/Components/Form/FormRichTextEditor.scss**:
    Summary: Defines SCSS styles for a rich text editor component in a form.
    Keywords: SCSS,styles,rich text editor,form,Flowbite,UI
    Nodes: 
         * [variable] $form-rich-text-editor - Defines a CSS variable for the form rich text editor with a prefixed class name. (variable,SCSS,form,rich text)
         * [class] .#{$form-rich-text-editor}-wrapper - Styles the main wrapper of the rich text editor including layout and editor-specific styles. (wrapper,layout,editor,rich text)
         * [class] .ql-toolbar.ql-snow - Styles for the Quill toolbar including padding, border, and background settings. (toolbar,Quill,styles,UI)


* **Styles/Flowbite/Components/Form/FormRichTextEditor.core.css**:
    Summary: Defines styles for the Quill rich text editor, including formatting, alignment, and user interface elements.
    Keywords: Quill,rich text editor,styles,CSS,formatting
    Nodes: 



* **Styles/Flowbite/Components/Form/FormRadioGroup.scss**:
    Summary: Defines styles for the form radio group component using Tailwind CSS utilities.
    Keywords: form,radio,styles,scss,Tailwind,components
    Nodes: 
         * [variable] $form-radio-group - Variable that constructs the base class name for the form radio group. (form,radio,variable)
         * [style] form-radio-group - Base styling for the form radio group, applying layout and utility classes. (flex,wrap,layout)
         * [style] form-radio-group-input - Styles for the radio input element defining dimensions and colors. (input,styles,dimensions)
         * [style] form-radio-group-input-wrapper - Styles for the wrapper of the radio input element, managing spacing. (wrapper,spacing,margin)
         * [style] form-radio-group-label - Styles for the label associated with the radio input, including text size and color. (label,text,styles)


* **Styles/Flowbite/Components/Form/FormNumberInput.scss**:
    Summary: Styles for a form number input component using Tailwind CSS utilities.
    Keywords: form,number input,styles,Tailwind CSS,UI components
    Nodes: 
         * [variable] $prefix-form-number-input - Constructs a CSS class name for the form number input based on a prefix. (variable,CSS class,prefix)
         * [class] form-number-input - Applies styles for the form number input field, including responsive and dark mode styles. (input,styling,dark mode,responsive)
         * [class] form-number-input-disabled-true - Applies styles for the disabled state of the form number input. (disabled,cursor,opacity)


* **Styles/Flowbite/Components/Form/FormMarkdownEditor.scss**:
    Summary: Styles for the FormMarkdownEditor component, defining layout and appearance for the markdown editor interface.
    Keywords: styles,scss,markdown,editor,form
    Nodes: 
         * [variable] $form-markdown-editor - Defines the prefix for the markdown editor's form component. (variable,prefix,form)
         * [class] .#{$form-markdown-editor} - Styles specific to the form markdown editor component. (form,markdown,component)
         * [class] .EasyMDEContainer - Container styles for the EasyMDE markdown editor. (EasyMDE,container,styles)
         * [class] .editor-toolbar - Styles for the toolbar of the markdown editor. (toolbar,editor,styles)
         * [class] .CodeMirror - Styles for the CodeMirror editor interface. (CodeMirror,editor,styles)
         * [class] .editor-preview - Styles for the preview section of the markdown editor. (preview,editor,styles)


* **Styles/Flowbite/Components/Form/FormMarkdownEditor.core.css**:
    Summary: CSS styles for the EasyMDE markdown editor, enhancing its appearance and functionalities.
    Keywords: EasyMDE,markdown,editor,styles,CodeMirror,CSS
    Nodes: 
         * [class] CodeMirror - Styles for the CodeMirror text editor component, including font, height, and color settings. (CodeMirror,editor,styles)
         * [class] EasyMDEContainer - Styles for the EasyMDE container, including layouts for fullscreen and side views. (EasyMDE,container,styles)
         * [class] editor-toolbar - Styles for the editor's toolbar, including layout, visibility, and interactivity for tools. (editor,toolbar,styles)
         * [class] editor-preview - Styles for the markdown preview section of the editor, managing layout and visibility. (preview,markdown,editor)


* **Styles/Flowbite/Components/Form/FormLabel.scss**:
    Summary: Defines styles for form labels using a utility-class-based approach.
    Keywords: SCSS,form-label,styles,utility,flowbite
    Nodes: 
         * [variable] $prefix-form-label - Constructs the CSS class name for the form label using a prefix. (prefix,variable,css)
         * [rule] .#{$prefix-form-label} - Applies utility styles for the form label. (block,mb-2,text-sm)


* **Styles/Flowbite/Components/Form/FormInput.scss**:
    Summary: Defines styles for the form input component using CSS classes with Tailwind CSS utility functions.
    Keywords: form,input,styles,CSS,Tailwind,responsive
    Nodes: 
         * [variable] $prefix-form-input - Constructs the prefix for the form input class name. (variable,prefix,form)
         * [class] .#{ $prefix-form-input } - Applies base styles to the form input component. (form-input,base-styles,utility)
         * [class] .#{ $prefix-form-input}-disabled-true - Styles for the disabled state of the form input. (disabled,form-input,styles)


* **Styles/Flowbite/Components/Form/FormFileUpload.scss**:
    Summary: Styles for a file upload component using Flexbox and Tailwind CSS utilities.
    Keywords: file upload,form,styles,Tailwind CSS,responsive,layout
    Nodes: 
         * [variable] $file-upload - Defines the class prefix for the file upload component. (variable,class prefix,file upload)
         * [class] file-upload - Container for the file upload component with flex layout and various styles. (container,flex,styles)
         * [class] file-upload-label - Styling for the label of the file upload, including layout and hover effects. (label,hover effect,layout)
         * [class] file-upload-text - Text styling within the file upload component, including bold variation. (text,styling,bold)
         * [class] file-upload-text-bold - Bold styling variation for text within the file upload component. (bold,text,variation)
         * [selector] input - Hides the default input element for file selection. (input,hidden,file upload)


* **Styles/Flowbite/Components/Form/FormField.scss**:
    Summary: Defines styles for form field components using Tailwind CSS.
    Keywords: form,styles,CSS,Tailwind,UI,theme
    Nodes: 
         * [variable] form-field - Combines prefix with 'form-field' for styling. (variable,sass,prefix)
         * [class] form-field-label - Styles for the label of the form field. (label,styling,form)
         * [class] form-field-hint - Styles for the hint text of the form field. (hint,styling,form)


* **Styles/Flowbite/Components/Form/FormDateInput.scss**:
    Summary: Defines styles for a form date input component using Tailwind CSS utilities.
    Keywords: form,date input,styles,Tailwind,CSS,responsive
    Nodes: 
         * [variable] $prefix-form-date-input - Constructs a CSS class name for the form date input component using a prefix. (variable,CSS class,prefix)
         * [class] .#{$prefix-form-date-input} - Applies styling to the form date input component, including background, border, and focus effects. (form date input,styles,Tailwind)
         * [class] &-disabled-true - Styles for the disabled state of the form date input, modifying cursor and opacity. (disabled,form date input,styles)


* **Styles/Flowbite/Components/Form/FormCheckboxGroup.scss**:
    Summary: Styles for the checkbox group component, including layout and input styling.
    Keywords: checkbox,form,styles,scss,tailwind
    Nodes: 
         * [variable] $prefix-form-checkbox-group - Defines the prefix for the form checkbox group CSS class. (variable,prefix,form-checkbox)
         * [class] .#{ $prefix-form-checkbox-group } - Main class for the form checkbox group styles. (checkbox-group,styles,form)
         * [class] &-vertical-false - Styles for a horizontally arranged checkbox group. (horizontal,flex,layout)
         * [class] &-input - Styling for the checkbox input elements. (input,checkbox,styling)
         * [class] &-input-wrapper - Wrapper styling for each checkbox input. (wrapper,layout,checkbox)
         * [class] &-label - Styling for the label associated with the checkbox inputs. (label,text,styling)


* **Styles/Flowbite/Components/Form/FormCheckbox.scss**:
    Summary: Defines styles for form checkbox components using Tailwind CSS.
    Keywords: checkbox,styles,Tailwind,form,flexbox
    Nodes: 
         * [variable] $prefix-form-checkbox - Constructs a prefixed class name for form checkbox styles. (prefix,class,variable)
         * [class] .#{$prefix-form-checkbox} - Applies flexbox layout to the form checkbox component. (flex,layout,component)
         * [class] &-input - Styles the checkbox input element with various properties. (input,styles,checkbox)
         * [class] &-label - Styles the checkbox label with text properties. (label,styles,text)


* **Styles/Flowbite/Components/Form/FormAutocomplete.scss**:
    Summary: Styles for the FormAutocomplete component, including styles for input fields, dropdowns, and active states.
    Keywords: form-autocomplete,styles,CSS,dropdown,input
    Nodes: 
         * [variable] $autocomplete - Combines the prefix with 'form-autocomplete' to create a base class name. (variable,class-name,prefix)
         * [root-class] .$autocomplete - Defines styles for the form autocomplete and its multiple variant. (root-class,autocomplete,css)
         * [nested-class] &.ts-hidden-accessible - Hides the form element when it is marked as hidden accessible. (accessibility,hidden,css)
         * [nested-class] &.has-items:not(.focus) .ts-control input - Hides the input field when there are items and not focused. (input,visibility,items)
         * [nested-class] &.multi .item - Styles for individual items in a multi-select dropdown. (multi-select,item,dropdown)
         * [nested-class] .ts-dropdown - Styles for the dropdown containing options of the autocomplete. (dropdown,options,css)
         * [nested-class] &-disabled-true .ts-control - Styles to indicate that the control is disabled. (disabled,control,opacity)


* **Styles/Flowbite/Components/Form/FormAutocomplete.core.css**:
    Summary: Styles for creating an autocomplete form component with various states, including active, disabled, and focused.
    Keywords: autocomplete,form,styles,CSS,UI
    Nodes: 
         * [class] .ts-control - Defines styling for the main control element of the autocomplete. (control,style,input)
         * [class] .ts-dropdown - Styles for the dropdown that appears below the input control. (dropdown,popup,menu)
         * [class] .disabled - Styles applied when the autocomplete input is disabled, affecting opacity and cursor. (disabled,state,input)
         * [class] .active - Styles for the active state within dropdown items. (active,state,selection)
         * [animation] @keyframes lds-dual-ring - Defines the animation for the loading spinner in the dropdown. (animation,spinner,loading)
         * [class] .plugin-clear_button - Styles for a clear button within the autocomplete component. (button,clear,UI)

---- end of files ----

