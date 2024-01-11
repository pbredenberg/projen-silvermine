import { typescript } from 'projen';

export const configureNpmScripts = (project: typescript.TypeScriptProject): void  => {
  project.addScripts({
      "release:preview": "node ./node_modules/@silvermine/standardization/scripts/release.js preview",
      "release:prep-changelog": "node ./node_modules/@silvermine/standardization/scripts/release.js prep-changelog",
      "release:finalize": "node ./node_modules/@silvermine/standardization/scripts/release.js finalize",
  })
}
