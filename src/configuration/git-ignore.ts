import { typescript } from 'projen';

/**
 * Overrides Projen's default .gitignore configuration
 * @param project
 */
export const configureGitIgnore = (project: typescript.TypeScriptProject): void  => {
  project.addGitIgnore('!/package-lock.json');
}
