Updatedtdtd!
This is an update.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<style>
  h2 {
    color: gold;
  }
  h3 {
    color: silver;
  }
</style>

# Bitfinex API app

## Sections

- [Goal, purpose and extent of project](#Goal,-purpose-and-extent-of-project)
- [Learning goals](#Learning)
- [Functionality](#Functionality)
- [List of tools and concepts](#List-of-tools-and-concepts)
- [Styling](#Styling)
- [Http requests](#Http-requests)
- [Performance optimization](#Performance-optimization)
- [State management](#State-management)
- [Outer JSX element](#Outer-JSX-element)
- [List of new conecpts and tools](#List-of-new-conecpts-and-tools)
- [List of conecpts and tools I have polished up on](#List-of-conecpts-and-tools-I-have-polished-up-on)
- [Log](#Log)


## Goal, purpose and extent of project

### Learning goals

The overall aim of this project is to create a project of my own from planning, including documentation, to the end result: a fully functional crypto-assets tracker hosted on my own domain. The end result will also include a git repo hosted remotely on github with a comprehensive commit history.

### Functionality

The goal of this app is to enable a logged in user to view different stats from their Bitfinex (maybe others) account utilizing their API key. User logins (and API keys) will be stored in a firebase database, which will serve as the app’s overall backend (this may change later). If the user is not logged in they will be presented with some general data fetched from the Bitfinex Api (or alternatively coinmarketcap API). If they are logged in they will be able to fetch their own data.

The project will be developed using react class components / function components and redux to manage state. There will be two versions: One using react lifecycle methods and another using react hooks. The starting point of both versions is the boiler-plate project setup, generated by the latest version of the create-react-app cli.

### List of tools and concepts (delete tis header?)

Both projects will be initialised with git through the cli and uploaded to github as two separate projects:
- [my-folio-class](https://github.com/AndyOooh/my-folio-class)
- my-folio-func (add link when created)

### Styling

Css modules will be utilized for styling the project. Because we are using create-react-app > version 3.4.1 (higher than 2.0.0) we will need to use the filename.modules.css syntax as described [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).

### Http requests

For http requests we will be using the axios ‘Promise based HTTP client’.

### Performance optimization

We will optimize performance of the app using React.memo and useMemo(), React.createContext and useContext() respectively.

### State management

For the hooks-based project we will use either useState() or useReducer() to manage state. For the lifecycle-based project we will be using redux.

### UX

Spinners, modals and backdrops will be used for enhanced UX.

### Outer JSX element

One outer jsx element
React.Fragment vs custom (Aux) component.

## List of new conecpts and tools

- Markdown files (.md):
  - [jamesqquick on Youtube](https://www.youtube.com/watch?v=pTCROLZLhDM)
  - [jamesqquick on gitHub](https://github.com/jamesqquick/markdown-worksheet)


## List of conecpts and tools I have polished up on

- How to initialise a git project and push it to remote repo (github)
- Creating SSH keys locally with `ssh-keygen` and copying the public key onto server with `ssh-copy-id`. SSH into server as root, create user and give sudo privileges, disallow logon as root.  
  Check: ['random useful notes'](https://docs.google.com/document/d/1mD3vaZ1OY_mUfYhXqzQM-5vIt14JfajU-0YhtiHvLS0/edit#heading=h.ulecwdd5ysvj)

## Log

- Initialised 'class' project
- Tried CRA template (official redux) but decided it added little value and more confusion. Try agaion later when I'm more confident in what it does.
- Brushed up on git and github:
  - Can setup ssh to connect local with GH account and avoid pw on every push/pull. Had already set this up a few months back.
- Createed GH repo and add existing repo from cli:
  - `git init` in project folder local.
  - create new repo on GH through UI.
  - `git remote add origin git@github.com:AndyOooh/my-folio-class.git` - we name the remote repo 'origin' (forced name on GH) and point to the repo-url.
  - `git push origin master` - where origin = remote repo-name and master = remote repo-branch
- c/p project description from Google doc to README.md directly in GH editor as a test. Found out .md (markdown) files has special syntax so all formatting is gone.
- `git fetch` to pull remote repo.
- `git diff master origin/master` - where master = local branch and origin/master = remote repo-name/branch
- `git pull --ff-only origin/master` origin/master can be excluded if the local master branch has been configured to track the origin/master branch with: `git push -u origin master` 
> Notice we used the -u flag. That flag sets the upstream repo, which causes our local master branch to track the master branch on the remote repo which is aliased as origin. We can now use just the git push command and it will know where to push it, because we set our upstream branch.   

- Further git and gitHub reading: [launchscool.com](https://launchschool.com/books/git/read/github), [github docs](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) (adding new ssh key), `ssh-keygen` locally in ['random useful notes'](https://docs.google.com/document/d/1mD3vaZ1OY_mUfYhXqzQM-5vIt14JfajU-0YhtiHvLS0/edit#heading=h.ulecwdd5ysvj) [freecodebase.org](https://www.freecodecamp.org/news/what-is-github-what-is-git-and-how-to-use-these-developer-tools/)


