# InT@Duke Website:

## Getting Started

1. Install [Node.js](https://nodejs.org/en). Then downgrade your `npm` version to 6 via e.g. `npm install -g npm@6.14.18` (or use `n` and install `node/14.21.2`).
2. Clone this repository.
3. `cd` into the downloaded repo, `npm install` and `npm start`.

## npm scripts

In the project directory, you can run:

#### `npm install`
To install the dependencies package.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run testDeploy`

Deploys the app to Vercel to a preview with the command `vercel`.

#### `npm run deploy`

Deploys the app to Vercel into production with the command `vercel --prod`.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


##

# Persistent homology page

This page is located at `/ph`.

To add molecules:
1. Download its pdb, name it to `your-molecule.pdb`, and put it under `public/pdb` (i.e. as `public/pdb/your-molecule.pdb`)
2. Calculate its persistent homology with `python src/python/ph.py public/pdb/your-molecule.pdb public/homologies/your-molecule.json`
3. Add the name of your molecule to the `molecules` array in PHCanvas.js.
