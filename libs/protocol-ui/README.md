# Protocol UI

The `protocol-ui` library is our component library and custom theme that customizes and extends [Chakra UI](https://chakra-ui.com/). The initial focus of this is on the functional components we used to build v such as form elements, modal wrappers, and the custom theme that overrides Chakra's base component styles.

Our components are built with [React](https://reactjs.org/ and TypeScript. This library also includes a [Storybook](https://storybook.js.org/) instance.

This library was generated with [Nx](https://nx.dev).

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

This library roughly follows [Atomic Design principles](https://bradfrost.com/blog/post/atomic-web-design/). The components are intended to be composable.

- **Components**: We roughly follow Atomic Design principles so our components are organized as _Atoms_, and _Molecules_. As of now, we don't include _Organisms_ as we're focusing on establishing foundational building blocks. The Organism and Page Level layouts are intentionally handled by each app.

- **Atoms**

  - These are the smallest components that are used to build up a larger component. Each Atom is typically a single UI element such as a `<Label>` component.
  - Atoms can be used on their own or combined together to form Molecules.

- **Molecules**

  - Molecules are composed of Atoms and other Molecules. Molecules are typically used to build up a larger component. An example is an `<Toast/>` component as it composes other Atoms.

- **Theme**

  - This folder contains our `theme` and the customized styles for several Chakra components in the `components` folder.
  - We have a `GovrnTheme` that composes and scaffolds core theme elements. This theme leverages Chakra's theme provider, so if you want to use it you'll need to pass it into the `ChakraProvider` wrapping your app.
  - We currently use the default Chakra design tokens and have extended the `colors.ts` by adding in a color scheme based on the primary Govrn brand color. Since this includes values ranging from 50 - 900, you can pass this into Chakra's `colorScheme` prop such as `colorScheme="brand.primary".
  - If we update or customize these they'll be included in this section as well.

### Storybook

We're in the process of adding our stories and deploying our Storybook. We'll continue to update the README with our progress and deployment details. Each component contains a Story that powers the Storybook. The Story demonstrates the basic functionality for the component and also any style variants, props, and controls that the component supports.

Our `stories` folder structure matches the `component` structure. You can find the story for each component in this folder.

**Note**: We're in the process of adding these Stories to previously created components.

### Commands

You can check the available commands in the `project.json` file in the `protocol-ui` library.

- `nx run protocol-ui:storybook` -- serves the Storybook locally on `localhost:4400`
- `nx run protocol-ui:lint` -- runs the linter. Useful to check for errors in components before opening a PR
- `nx run protocol-ui:build` -- builds the frontend. Useful to check for build serrors before opening a PR

## Testing

Run `nx test protocol-ui` to execute the unit tests via [Jest](https://jestjs.io).

We'll be adding additional tests via [Cypress](https://www.cypress.io/) in the future.
