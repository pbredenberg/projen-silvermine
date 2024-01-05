import { cdk } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';

const project = new cdk.JsiiProject({
  projenrcTs: true,
  author: 'Paul Bredenberg',
  authorAddress: 'paulbredenberg@gmail.com',
  defaultReleaseBranch: 'master',
  name: 'projen-silvermine',
  repositoryUrl: 'https://github.com/projen-silvermine.git',
  packageName: 'projen-silvermine',
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  peerDeps: ['projen@0.78.2'],
  jsiiVersion: '5.0.14',
  jest: false,
  eslint: false,
  typescriptVersion: '5.2.x',
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['cdklabs-automation'] },
  packageManager: NodePackageManager.NPM,
});

// project.addDevDeps('');

project.synth();
