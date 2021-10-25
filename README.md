# Getting Started with Integry SDK full app example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The API was bootstrapped by [express-generator](https://expressjs.com/en/starter/generator.html).
Please navigate to "Cypress Tests" section below to set up the Cypress Test framework properly.

## Prerequisites

1. Install the latest LTS version of [NodeJS](https://nodejs.org). Currently that is v14.
2. After installing Node, open a terminal window and install the `yarn` package manager. You can do that by running `npm install -g yarn` in the terminal.
3. Make sure you have Git installed. Try running `git` in a terminal. If it is not installed, MacOS will prompt you to install XCode Build Tools which will do the job for you. Otherwise, use the latest version available [here](https://git-scm.com/downloads).

## Setup

1. Clone the repository in a directory using the following command. Then, change directory into the project that you just cloned.

```zsh
# clone app
git clone https://github.com/osamaaamer95/sdk-react-fullapp

# change to project directory
cd sdk-react-fullapp
```

2. Install dependencies in the frontend and backend directories. 

- The frontend directory is the root project directory. 
- The backend directory is the `/api` directory.

```zsh
# Install frontend dependencits
yarn install

# Install backend dependencies
cd api
yarn install
```

3. Create a `.env` file in the `/api` directory and copy environment variables to it. These environment variables are the ones shown on the [SDK deployment page](https://app.integry.io/wapp/deployments/v3/sdk/create).

```zsh
# Move to API directory if not already there
cd api

# Copy the env sample file
cp .env.sample .env
```

Now, open the newly copied `.env` file and fill in all three of these values after you create a deployment on the Integry web app.

```env
INTEGRY_APP_KEY=
INTEGRY_APP_SECRET=
INTEGRY_DEPLOYMENT_ID=
```

4. Start the API and frontend in separate terminal instances.

```zsh
# In root directory in terminal A
yarn start

# In api directory in terminal B
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app running in the browser.



# Cypress Tests

1. In sdk-react-fullapp directory hit following commands. 

<!-- To Install Node modules -->
```npm i
npm run cypress:open
```
<!-- The above command will run cypress runner, where you can run all test specs. -->
<!-- If above command don't run, then start with installing the cypress -->
```npm install cypress --save--dev
```

2. In Cypress.json file, there is a "baseUrl", you can change it to your desired environment. 
3. In Cypress.json file, there a "env" object, you can change these credentials to one you required (Must be a valid user). Otherwise, the existings are valid for local env. 
