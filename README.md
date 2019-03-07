# Personal Website

## Install Dependencies
$ yarn

## Development server
$ yarn start
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. You can also use `ng generate component|directive|pipe|service|class|guard|interface|enum|module`.

## Build
$ yarn build
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Re-deploy on GCP
Upload dist/personal-website folder to p-w-bucket
Open terminal on GCP
$ cd personal-website
$ gsutil rsync -r gs://p-w-bucket ./
$ gcloud app deploy
