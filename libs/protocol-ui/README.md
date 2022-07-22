# Protocol UI

The `protocol-ui` library is our component library and custom theme that customizes and extends [Chakra UI](https://chakra-ui.com/). The initial focus of this is on the functional components we used to build v such as form elements, modal wrappers, and the custom theme that overrides Chakra's base component styles.

Our components are built with [React](https://reactjs.org/ and TypeScript. This library also includes a [Storybook](https://storybook.js.org/) instance.

## Summary and Usage

As of now, `protocol-ui` is for internal use within the monorepo (as opposed to it being published on `npm` as a standalone library). As this is the case you'll need to access it via `@govrn/protocol-ui` when working within the monorepo.

### Govrn Theme

The Protocol Frontend is already set up to use `protocol-ui` and the theme provider, but if you're using this in another frontend app within the monorepo you'll need to wrap the app with Chakra's Theme Provider, passing in our `GovrnTheme`:

```jsx
// main.tsx
import { GovrnTheme } from '@govrn/protocol-ui';
<ChakraProvider theme={GovrnTheme}>
  <App />
</ChakraProvider>;
```

Wrapping the app and passing in `GovrnTheme` provides access to the custom component styles leveraged in the library.

### Importing Components

Each component can be imported directly from the `@govrn/protocol-ui` package:

```jsx
// ExampleForm.tsx
import { Input } from `@govrn/protocol-ui`;
```

The form components require some additional scaffolding as they're designed to work with [React Hook Form](https://react-hook-form.com/). This is covered in the _Components_ section below.

### Components

### Storybook

We're in the process of adding our stories and deploying our Storybook. We'll continue to update the README with our progress and deployment details.

### Nx Plugin

This library was generated with [Nx](https://nx.dev).

### Commands

## Testing

Run `nx test protocol-ui` to execute the unit tests via [Jest](https://jestjs.io).

We'll be adding additional tests via [Cypress](https://www.cypress.io/) in the future.

```

```

```

```
