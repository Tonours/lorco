![Lorco logo](docs/images/lorco-logo.png)

# Lorco

Lorco is a cli tool which extract colors from a sketch file and outputs color
variable files in many common formats including Sass, Less, CSS, JSON, JavaScript

## Basic Usage

1. Clone this repo
2. Copy your file into `./files` folder
3. Run `npm run build`
4. Open `./generated/_colors.scss`

## Options

You can change the behaviour of Lorco with several command line arguments.

### Change Source File

By default the script will take the first file it finds (alphabetically).
You can also specify which file you would like to source from with this command:

`npm run build -- --file=my-awesome-file.sketch`

### Change Output Language

By default the script will build variables into a .scss file.
You can also specified which language you want to build.

`npm run build -- lang=css`

The available language values are:
- scss
- less
- css
- json
- js

### Versioning

We use [SemVer][semver] for versioning. For the versions available, see the [tags on this repository][project_tags].