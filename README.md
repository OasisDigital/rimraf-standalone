[![Build Status](https://travis-ci.org/kylecordes/rimraf.svg?branch=master)](https://travis-ci.org/kylecordes/rimraf)

The [UNIX command](http://en.wikipedia.org/wiki/Rm_(Unix)) `rm -rf` for node.

# Rimraf (`rm -rf`) as a standalone script

This is a fork of the original rimraf, which provides a standalone single-file
script. The script is the result of bundling rimraf with its
dependencies, using Rollup.

## Why? Example #1: to clean node_modules

Many developers would like to use rimraf as part of a "clean" task which deletes
all non-source control files in the project, including the node_modules
directory. Unfortunately, this has two major downsides:

* Must `npm install` to have rimraf available for cleaning.
* On some platforms, rimraf of node_modules fails,
  because the execution of rimraf keeps files open/locked in the
  node_modules directory.

One workaround is to perform a global install of rimraf, but that
violates the principle of a package including any needed development libraries
in devDependencies, and breaks if rimraf is installed **both** globally and in
the project.

For a more comprehensive workaround, rimraf-standalone provides
`rimraf-standalone.js` which you can copy to the root of your project, commit in
your project, and call from a package script.

If you just want to obtain the standalone script,
**you don't even need to install this package**!

Rather, do something like this:

```
wget https://unpkg.com/rimraf-standalone/rimraf-standalone.js
```

Then set up your package script:

```
  "scripts": {
    "clean": "node rimraf-standalone.js node_modules"
  },
```

To clean:

```
npm run clean
```

## How it was bundled

Creating this standalone bundle is a straightforward use of Rollup.js; see the
package source files, particularly `rollup.config.js`, for details.

`rimraf` was written by Isaac Schlueter, and his name remains in the
package.json author field.

This repackaging was done by [Kyle Cordes](http://kylecordes.com/)
at [Oasis Digital](https://oasisdigital.com/).
