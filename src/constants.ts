import { typescript } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';

export const CURRENT_NODE_VERSION = '16.15.0';

export const DEFAULT_SILVERMINE_PROJEN_CONFIG: typescript.TypeScriptProjectOptions = {
   name: 'My Project',
   packageName: 'my-package-name',
   description: 'A project generated by @silvermine/projen.',
   defaultReleaseBranch: 'master',
   packageManager: NodePackageManager.NPM,
   projenrcTs: true,
   minNodeVersion: CURRENT_NODE_VERSION,
   maxNodeVersion: CURRENT_NODE_VERSION,
   githubOptions: {
      mergify: false,
   },
   eslint: false,
   jest: false,
   depsUpgrade: false,
   sampleCode: false,
};

export const SAMPLE_FILES = [
   '.eslintrc.json',
   '.markdownlint-cli2.cjs',
   '.mocha.opts',
   'nycrc.json',
   'commitlint.config.js',
   'src/Example.ts',
   'src/index.ts',
   'src/tsconfig.commonjs.json',
   'src/tsconfig.esm.json',
   'src/tsconfig.types.json',
   'tests/eslintrc.json',
   'tests/index.test.ts',
   'tests/tsconfig.json',
];
