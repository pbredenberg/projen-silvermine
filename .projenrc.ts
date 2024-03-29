import { cdk, github, TextFile } from 'projen';
import { devDependencies } from './src/configuration/dev-dependencies';
import { configureGitIgnore } from './src/configuration/git-ignore';
import { configureNpmStandardsScripts } from './src/configuration/npm-scripts';
import { CURRENT_NODE_VERSION, DEFAULT_SILVERMINE_PROJEN_CONFIG, SAMPLE_FILES } from './src/constants';

const project = new cdk.JsiiProject({
   ...DEFAULT_SILVERMINE_PROJEN_CONFIG,
   projenrcTs: true,
   author: 'Paul Bredenberg',
   authorAddress: 'paulbredenberg@gmail.com',
   defaultReleaseBranch: 'master',
   name: 'projen-silvermine',
   repositoryUrl: 'https://github.com/projen-silvermine.git',
   packageName: 'projen-silvermine',
   devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
   peerDeps: ['projen@>=0.78.x', 'constructs@10.3.0'],
   githubOptions: {
      projenCredentials: github.GithubCredentials.fromApp({})
   },
});

SAMPLE_FILES.forEach((file) => {
   project.addPackageIgnore(`!/sample-files/${file}`);
});

project.addDevDeps(...devDependencies);

configureNpmStandardsScripts(project);

configureGitIgnore(project);

// projen ignores nested tsconfig files, but we want to preserve ours
project.addGitIgnore('!/src/sample-files/tests/tsconfig.json');

new TextFile(project, '.eslintrc.json', {
   lines: [
   '{',
   '   "extends": "@silvermine/eslint-config/node",',
   '   "root": true,',
   '   "ignorePatterns": [',
   '      "lib",',
   '      ".projen",',
   '      "dist"',
   '   ]',
   '}'
   ]
});

new TextFile(project, '.nvmrc', {
  lines: [ CURRENT_NODE_VERSION ]
});

project.tryRemoveFile('.github/workflows/pull-request-lint.yml');
project.tryRemoveFile('.github/workflows/release.yml');

project.synth();
