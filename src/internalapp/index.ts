
import {spawn} from 'child_process';

const [nodeParam, fileExecuteParam, firstParams, secondParams] = process.argv;


const allParams = [firstParams, secondParams];

const sendDataToOS = (params: string) => {
  const principalCommand = 'echo';
  const args = [`${params}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`Error: ${data}`);
  });

  child.on('close', (code) => {
    console.log('🚀 ~ file: index.ts ~ line 25 ~ child.on ~ code', code);
  });
};

for (const params of allParams) {
  sendDataToOS(params);
}
