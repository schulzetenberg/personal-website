# Personal Website [![personal-website](https://github.com/schulzetenberg/personal-website/actions/workflows/build.yaml/badge.svg)](https://github.com/schulzetenberg/personal-website/actions/workflows/build.yaml)

## Install Dependencies
$ npm i

## Development server
$ npm run start
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng g c component-name` to generate a new component. You can also use `ng generate component|directive|pipe|service|class|guard|interface|enum|module`.

## Unit Testing
Unit testing is done using Jest. Run the tests with `npm run test`.

## E2E Testing
End to end testing is done using Cypress. To open the interactive tests run `npx cypress open`.

## Build
$ npm run build
The build artifacts will be stored in the `dist/` directory.

## Deployment Strategy
Deployments are performed using Travis CI. When a commit is pushed to the master branch, the CI pipeline gets triggered which lints, tests, builds the code, and then pushes the bundled code to Google App Engine.
