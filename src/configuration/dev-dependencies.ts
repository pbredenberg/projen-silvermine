/**
 * Dependencies need to be overridden after the initial constructor initialization:
 * https://projen.io/deps.html#overriding-dependency-specifications
 */
export const devDependencies = [
  '@silvermine/chai-strictly-equal@1.1.0',
  '@silvermine/eslint-config@git+https://github.com/silvermine/eslint-config-silvermine#fa9925f9de6b8139d42781dbd002b4024318744a',
  '@silvermine/eslint-plugin-silvermine@2.4.0',
  '@silvermine/standardization@2.0.0',
  '@silvermine/typescript-config@git+https://github.com/silvermine/typescript-config#23213e33077089e723629dead5342abe6f3b3c8c',
  '@types/chai@4.1.7',
  '@types/mocha@5.2.5',
  '@types/node@12.20.45',
  '@types/sinon@5.0.5',
  '@typescript-eslint/eslint-plugin@5.17.0',
  '@typescript-eslint/parser@5.17.0',
  'chai@4.2.0',
  'check-node-version@4.0.2',
  'coveralls@3.0.9',
  'eslint@8.16.0',
  'mocha@5.2.0',
  'nyc@13.1.0',
  'sinon@5.1.1',
  'source-map-support@0.5.16',
  'ts-node@7.0.1',
  'tslib@1.9.3',
  'typescript@3.9.5',
];
