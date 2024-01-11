/* eslint-disable no-new */
import { SampleFile, typescript } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
import { devDependencies } from './configuration/dev-dependencies';
import { configureGitIgnore } from './configuration/git-ignore';
import { configureGithubActions } from './configuration/github-actions';

const CURRENT_NODE_VERSION = '16.9.0';

export const DEFAULT_PROJEN_CONFIG: typescript.TypeScriptProjectOptions = {
  name: 'My Project',
  description: 'A project generated by @silvermine/projen.',
  defaultReleaseBranch: 'master',
  packageManager: NodePackageManager.NPM,
  projenrcTs: true,
  minNodeVersion: CURRENT_NODE_VERSION,
  maxNodeVersion: CURRENT_NODE_VERSION,
  githubOptions: {
    mergify: false,
  },
  jest: false,
  depsUpgrade: false,
  sampleCode: false,
};

export class SilvermineProject extends typescript.TypeScriptProject {
  public constructor(options: typescript.TypeScriptProjectOptions) {
    super({
      ...DEFAULT_PROJEN_CONFIG,
      ...options,
    });

    devDependencies.forEach((dependency) => {
      this.addDevDeps(dependency);
    });

    configureGithubActions(this);

    configureGitIgnore(this);

    this.tryRemoveFile('.eslintrc.json');

    [
      '.eslintrc.json',
      '.mocha.opts',
      'nycrc.json',
      'src/Example.ts',
      'src/index.ts',
      'src/tsconfig.commonjs.json',
      'src/tsconfig.esm.json',
      'src/tsconfig.types.json',
      'tests/setup/before.ts',
      'tests/_eslintrc.json',
      'tests/index.test.ts',
      'tests/tsconfig.json',
    ].forEach((filePath) => {
      new SampleFile(this, filePath, {
        sourcePath: `${__dirname}/sample-files/${filePath.replace('/_', '')}`,
      });
    });
  }
}
