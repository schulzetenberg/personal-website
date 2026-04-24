import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  globalIgnores([
    '.next/**',
    '.open-next/**',
    '.wrangler/**',
    'build/**',
    'out/**',
    'OLD/**',
    'cloudflare-env.d.ts',
    'next-env.d.ts',
  ]),
]);
