/* eslint-disable no-new */
import { TextFile, typescript } from 'projen';
import { devDependencies } from './configuration/dev-dependencies';
import { configureGitIgnore } from './configuration/git-ignore';
import { configureGithubActions } from './configuration/github-actions';
import { configureNpmScripts } from './configuration/npm-scripts';
import { configureSamplesFiles } from './configuration/configure-samples-files';
import { CURRENT_NODE_VERSION, DEFAULT_SILVERMINE_PROJEN_CONFIG } from './constants';

export class SilvermineProject extends typescript.TypeScriptProject {
   public constructor(options: typescript.TypeScriptProjectOptions) {
      super({
         ...DEFAULT_SILVERMINE_PROJEN_CONFIG,
         ...options,
      });

      devDependencies.forEach((dependency) => {
         this.addDevDeps(dependency);
      });

      configureGithubActions(this);

      configureGitIgnore(this);

      configureNpmScripts(this);

      configureSamplesFiles(this);

      new TextFile(this, './nvmrc', {
         lines: [ CURRENT_NODE_VERSION ],
      });
   }
}
