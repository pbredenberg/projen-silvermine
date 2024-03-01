import { typescript } from 'projen';

export const configureNpmScripts = (project: typescript.TypeScriptProject): void => {
   project.addScripts({
      'build:types': 'tsc -p src/tsconfig.types.json --pretty',
      'build:esm': 'tsc -p src/tsconfig.esm.json --pretty',
      'build:commonjs': 'tsc -p src/tsconfig.commonjs.json --pretty',
      'build': 'npm run build:types && npm run build:esm && npm run build:commonjs',
      'commitlint': 'commitlint --from $(git log -1 --skip=-20 --pretty=format:"%h" --no-patch)',
      'markdownlint': 'markdownlint-cli2',
      'eslint': 'eslint .',
      'standards': 'npm run commitlint && npm run eslint && npm run markdownlint',
      'release:preview': 'node ./node_modules/@silvermine/standardization/scripts/release.js preview',
      'release:prep-changelog': 'node ./node_modules/@silvermine/standardization/scripts/release.js prep-changelog',
      'release:finalize': 'node ./node_modules/@silvermine/standardization/scripts/release.js finalize',
   });
};
