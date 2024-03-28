import { SampleFile } from 'projen';
import { SilvermineProject } from '../project';
import { SAMPLE_FILES } from '../constants';

export const configureSamplesFiles = (project: SilvermineProject): void => {
   SAMPLE_FILES
      .forEach((filePath) => {
         const sourcePath = `${__dirname}/../../sample-files/${filePath}`;

         // eslint-disable-next-line no-console
         console.info('Configuring sample file:', sourcePath);

         // eslint-disable-next-line no-new
         new SampleFile(project, filePath, {
            sourcePath: sourcePath,
         });
      });
};
