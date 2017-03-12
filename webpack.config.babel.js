import {
  createConfig, entryPoint, setOutput, defineConstants, env, sourceMaps,
} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'

function setTarget (target) {
  return () => ({target})
}

module.exports = createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./build/Main.js'),
  setTarget('node'),
  babel(),
  defineConstants({
    NODE_ENV: process.env.NODE_ENV,
  }),
  env('development', [
    sourceMaps(),
  ]),
])
