import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    // CommonJS
    {
      file: pkg.main,
      format: 'cjs',
      indent: false
    }
  ],
  plugins: [typescript()]
}
