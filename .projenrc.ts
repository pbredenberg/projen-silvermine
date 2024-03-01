import { cdk, TextFile } from 'projen';
import { devDependencies } from './src/configuration/dev-dependencies';
import { configureGitIgnore } from './src/configuration/git-ignore';
import { configureGithubActions } from './src/configuration/github-actions';
import { configureNpmScripts } from './src/configuration/npm-scripts';
import { configureSamplesFiles } from './src/configuration/configure-samples-files';
import { CURRENT_NODE_VERSION, DEFAULT_SILVERMINE_PROJEN_CONFIG } from './src/constants';

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
  peerDeps: ['projen@>=0.78.x'],
  jsiiVersion: '5.0.14',
});

project.addDevDeps(...devDependencies)

configureGithubActions(project);

configureNpmScripts(project);

project.addScripts({
   'build': ''
})

configureSamplesFiles(project)

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

project.synth();
