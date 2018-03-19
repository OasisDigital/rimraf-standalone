import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import * as fs from 'fs';

const license = fs.readFileSync('LICENSE');
const banner = `/*

rimraf Standalone

https://www.npmjs.com/package/rimraf-standalone

This is a single-file bundle of rimraf. The code coems form,
and credit goes to, the original authors.

${license}
*/

`;

export default {
  entry: 'bin-without-hashbang.js', // entry point for the application
  dest: 'rimraf-standalone.js',
  useStrict: false,
  format: 'cjs',
  external: [
    'assert',
    'events',
    'fs',
    'path',
    'util'
  ],
  plugins: [
    nodeResolve(),
    commonjs({
      include: [
      ]
    })
  ],
  banner: banner,
}
