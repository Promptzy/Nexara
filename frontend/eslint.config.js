import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', '.vercel/**'],
    rules: {
      'react/no-unescaped-entities': 'off', // 👈 disable globally
    },
  },
]

export default config
