# Personal Website [![personal-website](https://github.com/schulzetenberg/personal-website/actions/workflows/build.yaml/badge.svg)](https://github.com/schulzetenberg/personal-website/actions/workflows/build.yaml)

## Install Dependencies
$ npm i

## Development server
$ npm run start
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng g c component-name` to generate a new component. You can also use `ng generate component|directive|pipe|service|class|guard|interface|enum|module`.

## Build
$ npm run build
The build artifacts will be stored in the `dist/` directory.

## Deployment Strategy
Deployments are performed using Github Actions. When a commit is pushed to the master branch, the CI pipeline gets triggered which builds the code and then pushes the bundled code to Google App Engine.
