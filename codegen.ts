import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {

    schema: 'https://api.crm.refine.dev',

  documents: 'src/**/*.{graphql,ts,tsx}',


  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;