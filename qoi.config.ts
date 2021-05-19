import * as pkg from './package.json'
import { promises } from 'fs'

export default {
  plugins: [
    {
      name: 'clean',
      buildStart: async () => {               
        const pkgJson = { ...pkg }
        delete pkgJson.devDependencies
        delete pkgJson.scripts

        await promises.mkdir('dist', { recursive: true })
        await promises.writeFile('./dist/package.json', JSON.stringify(pkgJson, null, '\t'))
        await promises.copyFile('./README.md', './dist/README.md')
      }
    }
  ]
}