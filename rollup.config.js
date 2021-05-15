import dts from 'rollup-plugin-dts'
import * as pkg from './package.json'

import { clean } from 'aria-fs'
import { promises } from 'fs'

export default {
  input: './src/index.ts',
  external: [
    ...Object.keys(pkg.devDependencies || {})
  ],
  plugins: [ 
    dts(),
    {
      name: 'clean',
      buildStart: async () => {
        await clean('dist')
        
        const pkgJson = { ...pkg.default }
        delete pkgJson.devDependencies
        delete pkgJson.scripts

        await promises.mkdir('dist', { recursive: true })
        await promises.writeFile('./dist/package.json', JSON.stringify(pkgJson, null, '\t'))
        await promises.copyFile('./README.md', './dist/README.md')
      }
    }
  ],
  output: {
    file: './dist/swc-ast-helpers.d.ts',
    format: 'es'
  }
}