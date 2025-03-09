# Button Component Documentation

The `Button` component in FluentCMS is a customizable UI element designed to facilitate user interactions. It can render either a button or a link based on the provided properties.

## Overview

The `Button` component allows for various configurations such as color, size, type, and additional HTML attributes. It is built on top of the `BaseComponent`, providing default functionalities for UI components.

## Example Usage

### Simple Button
```razor
<Button Type="ButtonType.Submit" Color="Color.Primary">Submit</Button>
```

### Cancel Button with Click Event
```razor
<Button @onclick="() => Console.WriteLine('Cancelled')">Cancel</Button>
```

### Link Style Button
```razor
<Button Href="https://example.com" Color="Color.Link">Go to Example</Button>
```

## Properties

- **Color**: Specifies the button's color. Common colors include `Color.Primary`, `Color.Secondary`, `Color.Danger`, etc.
- **Size**: Sets the button's size, which ranges from `ButtonSize.Default`, `ButtonSize.Small`, `ButtonSize.Medium`, to `ButtonSize.Large`.
- **Type**: Indicates the type of the button. Possible values are `ButtonType.Button`, `ButtonType.Submit`, and `ButtonType.Reset`.
- **Disabled**: A boolean property that, if set to true, renders the button in a disabled state, preventing user interaction.
- **Href**: An optional link that transforms the button into an anchor element when specified.

## Styling

The button component gets styling from the underlying `Tailwind CSS` framework, allowing for a responsive and consistent design across your application.

## Conclusion

The `Button` component is versatile and can easily be integrated into any Blazor application, providing essential functionality while being visually pleasing.

For more information, refer to the component source code or the [FluentCMS documentation](https://example.com).