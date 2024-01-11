import { cdk, SampleFile, TextFile } from 'projen';
import { CURRENT_NODE_VERSION, DEFAULT_PROJEN_CONFIG } from './src';
import { devDependencies } from './src/configuration/dev-dependencies';
import { configureGitIgnore } from './src/configuration/git-ignore';
import { configureGithubActions } from './src/configuration/github-actions';

const project = new cdk.JsiiProject({
  ...DEFAULT_PROJEN_CONFIG,
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

devDependencies.forEach((dependency) => () => {
  project.addDevDeps(dependency);
});

configureGithubActions(project);

project.tryRemoveFile('.eslintrc.json');
[
  '.eslintrc.json',
  '.editorconfig',
].forEach((filePath) => {
  new SampleFile(project, filePath, {
    sourcePath: `${__dirname}/src/sample-files/${filePath.replace('/_', '')}`,
  });
});

configureGitIgnore(project);

new TextFile(project, '.nvmrc', {
  lines: [ CURRENT_NODE_VERSION ]
})

project.synth();
