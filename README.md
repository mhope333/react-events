## Paperstr Dummy App

- deployed to GH Pages here: https://mhope333.github.io/react-paperstr-events/

### Deploy to gh-pages
- Run `npm run deploy`

### Starting Locally

1. install node modules `npm i`
2. Run `npm start` to start the app in development mode.
3. Build the app for production mode `npm run build`
4. Run `serve -s build` (make sure you have `serve` pkg installed) to start the app in production mode.

### `npm test`
Run `npm test` to run tests.

#### Environment variables 
Make sure the environment variables below are either in your `.bash_profile or .bashrc or .zshrc` file
Or alternatively just paste into your terminal.
```
export REACT_APP_API_V2_PUBLIC_KEY="{public_key}"
export REACT_APP_API_V2_PRIVATE_KEY="{private_key}"
```
