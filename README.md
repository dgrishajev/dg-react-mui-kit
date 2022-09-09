# UI Kit

A set of MUI re-exports

## Installing UI Kit

UI Kit can be installed with either `npm` or `yarn`. React and React DOM must be
installed as well (either 17th or 18th versions are required):

```shell
npm install --save @dgrishajev/react-mui-kit react react-dom
```

```shell
yarn add @dgrishajev/react-mui-kit react react-dom
```

## Updating UI Kit

UI Kit can be updated with either `npm` or `yarn`:

```shell
npm update @dgrishajev/react-mui-kit --save
```

```shell
yarn upgrade @dgrishajev/react-mui-kit --latest
```

## Using UI Kit

Create a new project, e.g. with
[create-react-app](https://create-react-app.dev/docs/getting-started):

```shell
npx create-react-app react-mui-kit-consumer --template typescript
cd react-mui-kit-consumer
npm install --save @dgrishajev/react-mui-kit
```

You're ready to use UI Kit components in your project.

### Importing MUI components

All [Material UI](https://mui.com/material-ui/getting-started/usage/)
components, hooks, types, icons, and colors can be re-exported from the UI Kit
by using these imports respectively:

```typescript
import {
  Typography,
  useMediaQuery,
} from '@dgrishajev/react-mui-kit/dist/components';
import type {Theme} from '@dgrishajev/react-mui-kit/dist/components';
import {Edit} from '@dgrishajev/react-mui-kit/dist/icons';
import {LoadingButton} from '@dgrishajev/react-mui-kit/dist/lab';
import {indigo as indigoColor} from '@dgrishajev/react-mui-kit/dist/colors';
```

The supported MUI imports mapping is as follows:

```json
{
  "@mui/material": "@dgrishajev/react-mui-kit/dist/components",
  "@mui/lab": "@dgrishajev/react-mui-kit/dist/lab",
  "@mui/icons-material": "@dgrishajev/react-mui-kit/dist/icons",
  "@mui/material/colors": "@dgrishajev/react-mui-kit/dist/colors"
}
```

`@dgrishajev/react-mui-kit/dist/styles` path contains light and dark themes, and
helper functions for creating styles with the help of `tss-react` library:

```typescript
import {
  darkTheme,
  useTheme,
  MAX_PAGE_CONTENT_WIDTH,
  MAX_ARTICLE_CONTENT_WIDTH,
  makeStyles,
  useStyles,
  withStyles,
} from '@dgrishajev/react-mui-kit/dist/styles'; // all supported import names at this path
```

For example, to render a MUI component with the light theme applied, use the
`ThemeProvider` with the UI Kit `lightTheme` or `darkTheme` applied:

```typescript
import React from 'react';
import { ThemeProvider, Button } from '@dgrishajev/react-mui-kit/dist/components';
import { lightTheme } from '@dgrishajev/react-mui-kit/dist/styles';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button variant="contained>Hello World</Button>
    </ThemeProvider>
  );
}
```

## Development and contributing

Use these commands to set up a local development environment (**macOS Terminal**
or **Linux shell**).

1. Install `nvm`

   ```shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | shell
   ```

2. Install LTS version of `node.js`

   ```shell
   nvm install 16.17.0
   ```

3. Install `yarn`
   ```shell
   npm install -g yarn
   ```
4. Clone the repository

   ```shell
   git clone https://github.com/dgrishajev/react-mui-kit.git
   cd ui-kit
   ```

5. Install dependencies
   ```shell
   yarn install
   ```

### Creating a distribution package

Run `yarn build` to create a `dist` folder, which contains all the built
entities with the types, and storybook static files under `storybook-static`.

### Publishing to `npm`

Make sure to document the changes in the `CHANGELOG.md` file:

```markdown
## 1.2.3

- Added styled Alert component
```

Update the `package.json` file with the new version number:

```json
"version": "1.2.3"
```

Create a pull request to the UI Kit with the desired changes and wait for it to
be merged. Then publish the package to `npm`:

```shell
npm publish
```

## Storybook

Storybook is installed and configured to visualize the components.

To run Storybook:

```shell
yarn storybook
```

This will open up http://localhost:6006/ in your browser with the introductory
page.

To create standalone HTML files for the Storybook documentation:

```shell
yarn build-storybook
```

## Linting and formatting

```shell
yarn eslint:check # checks for linting errors
yarn eslint:fix # automatically fixes linting errors
yarn prettier:check # checks for formatting errors
yarn prettier:fix # automatically fixes formatting errors
```
