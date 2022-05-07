
import {spawn} from 'child_process';
import {createPathTemp} from '../service/controllers/utils.controller';

const [nodeParam, fileExecuteParam, firstParams, secondParams] = process.argv;


const sendDataToOS = (inputVideoSource: string) => {
  const inputVideoSrc = `${__dirname}/${inputVideoSource}`;
  const outputVideoSrc = createPathTemp(inputVideoSource, 'mp4');

  const principalCommand = 'ffprobe';
  const args = [
    '-fflags',
    '+genpts',
    '-i',
    `${inputVideoSrc}`,
    '-r',
    '24',
    `${outputVideoSrc}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`LogLevel: ${data}`);
  });

  child.on('close', (code) => {
    console.log('🚀 ~ file: index.ts ~ line 25 ~ child.on ~ code', code);
  });

  console.log(outputVideoSrc);
};

sendDataToOS(firstParams);
