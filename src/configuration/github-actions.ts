import { JsonPatch, typescript } from 'projen';

/**
 * Overwrites the default Projen
 * @param project
 */
export const configureGithubActions = (project: typescript.TypeScriptProject): void => {

   /**
   * Remove some default github actions configs
   */
   project.tryRemoveFile('.github/workflows/upgrade-master.yml');
   project.tryRemoveFile('.github/workflows/release.yml');
   project.tryRemoveFile('.github/workflows/pull-request-lint.yml');

   /**
   * Patches for default GitHub actions commands
   */
   const githubBuildWorkflow = project.tryFindObjectFile(
      '.github/workflows/build.yml'
   );

   githubBuildWorkflow?.patch(JsonPatch.add('/on/push', {}));
   githubBuildWorkflow?.patch(
      JsonPatch.replace('/jobs/build/steps/3/run', 'npm run build')
   );
   githubBuildWorkflow?.patch(
      JsonPatch.add('/jobs/build/steps/3', {
         name: 'standards',
         run: 'npm run standards',
      })
   );
   githubBuildWorkflow?.patch(
      JsonPatch.add('/jobs/build/steps/4', {
         name: 'test',
         run: 'npm test',
      })
   );

   // Put this after the build to detect if someone changed any of the projen config.
   // That would be naughty.
   githubBuildWorkflow?.patch(
      JsonPatch.add('/jobs/build/steps/6', {
         name: 'projen',
         run: 'npx projen',
      })
   );
};
