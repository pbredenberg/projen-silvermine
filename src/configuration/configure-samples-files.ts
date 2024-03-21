import { SampleFile } from 'projen';
import { SilvermineProject } from '../project';
import { SAMPLE_FILES } from '../constants';

export const configureSamplesFiles = (project: SilvermineProject): void => {
   SAMPLE_FILES
      .forEach((filePath) => {
         // eslint-disable-next-line no-new
         new SampleFile(project, filePath, {
            sourcePath: `${__dirname}/../../sample-files/${filePath}`,
         });
      });
};
