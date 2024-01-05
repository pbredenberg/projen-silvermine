import { cdk } from 'projen';

const project = new cdk.JsiiProject({
  projenrcTs: true,
  author: 'Paul Bredenberg',
  authorAddress: 'paulbredenberg@gmail.com',
  defaultReleaseBranch: 'master',
  name: 'projen-silvermine',
  repositoryUrl: 'https://github.com/projen-silvermine.git',
  packageName: 'projen-silvermine',
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  peerDeps: ['projen'],
  jsiiVersion: '5.2.x',
  typescriptVersion: '5.2.x',
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['cdklabs-automation'] },
});

project.synth();
