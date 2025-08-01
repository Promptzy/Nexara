import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any custom rules here
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', '.vercel/**'],
  },
]

export default config
