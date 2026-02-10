# NPM Class 2

## Overview

In this class, we cover the advanced features of NPM, including:

- Working with package.json
- Managing dependencies
- NPM scripts
- Publishing packages to the NPM registry

## Package.json

The package.json file is crucial for any NPM project. It:

- Holds metadata relevant to the project
- Lists the packages your project depends on
- Allows you to scripts to automate tasks

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

## Managing Dependencies

To install a package, use:

```bash
npm install <package-name>
```

To remove a package:

```bash
npm uninstall <package-name>
```

## NPM Scripts

NPM scripts allow you to run scripts defined in your package.json file.

Run a script using:

```bash
npm run <script-name>
```

## Publishing Packages

To publish a package, ensure you are logged in and use:

```bash
npm publish
```

Ensure that your package.json has the correct information before publishing!