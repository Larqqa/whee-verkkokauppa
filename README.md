# Whee webstore mockup

## What is it?

This is a responsive frontend mockup of a webshop. The functionality of this project is limited to only browser functionality.

The app consists of a React app with React Router based navigation and a Redux store for handling the shopping cart.

Shopping cart functionalities include:
* Adding items
* Removing items
* Deleting items
* Deleting the whole cart

The shopping cart state is persisted locally using JSON strings and [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

The app is tested and working on Chrome, Edge, Firefox, and Android phone and tablet.\
Considering the heavy use of modern CSS, like Grid for the layout, i don't expect this to work on Internet Explorer too well.

## To install the app

First clone the repository with `git clone https://github.com/Larqqa/whee-verkkokauppa.git`\
Then in the cloned repository, install the project's dependencies by running `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run serve`

Makes a new production build of the app and serves it locally.

## Other licencing & notes:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)\
Material icons & Google fonts: [Apache 2.0 licence](http://www.apache.org/licenses/LICENSE-2.0.txt)