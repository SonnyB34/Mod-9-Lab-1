# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Reflections

1. I handled the optional props in my components by making them conditonals so if there was a description or stock status it would show it, if there wasnt a stock status or description it would show nothing. For the onEdit and onAddToCart i added the ? to my functionality to basically say if check if theres function here if so run the functionality if not do nothing.

2. The considerations I made when designing the component interfaces was passing product in the component so it works for any product instead of having to make a new card for each one. I used showDescription and showStockStatus as optional so the card works either way whether it shows a description or stock status. I centered everything using tailwind flex and added a little padding and margin.

3. The way I ensured type safety across my components was by using REACT.FC<ProductDisplayProps> for example to specify what the card is allowed to recieve so mistakes can get caught right away.

4. The challenges I faced when implementing component composition was using the props figuring out what to pass in and where. I also had trouble at first understanding the optional props and making them optional in the funcitonality.
