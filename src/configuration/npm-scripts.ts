import { typescript } from 'projen';

export const configureNpmScripts = (project: typescript.TypeScriptProject): void => {
   project.addScripts({
      'commitlint': 'commitlint --from $(git log -1 --skip=-20 --pretty=format:"%h" --no-patch)',
      'markdownlint': 'markdownlint-cli2',
      'eslint': 'eslint .',
      'standards': 'npm run commitlint && npm run eslint && npm run markdownlint',
      'release:preview': 'node ./node_modules/@silvermine/standardization/scripts/release.js preview',
      'release:prep-changelog': 'node ./node_modules/@silvermine/standardization/scripts/release.js prep-changelog',
      'release:finalize': 'node ./node_modules/@silvermine/standardization/scripts/release.js finalize',
   });
};
