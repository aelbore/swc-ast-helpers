import dts from 'rollup-plugin-dts'
import * as pkg from './package.json'

import { clean } from 'aria-fs'

export default {
  input: './src/index.ts',
  external: [
    ...Object.keys(pkg.devDependencies || {})
  ],
  plugins: [ 
    dts(),
    {
      name: 'clean',
      buildStart: () => clean('dist') 
    }
  ],
  output: {
    file: './dist/swc-ast-helpers.d.ts',
    format: 'es'
  }
}