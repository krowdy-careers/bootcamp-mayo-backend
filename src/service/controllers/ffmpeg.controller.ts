/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */

import {spawn} from 'child_process';
import {videoStatusController} from './videostatus.controller';

const AsyncFFMPEG = ( principalCommand: any, args: any, options: any ) =>
  new Promise((resolve, reject)=> {
    const child = spawn(principalCommand, args, options);

    child.stdout.on('data', (data) => {
      console.log(`Output: ${data}`);
    });

    child.stderr.on('data', (data: any) => {
      console.log(`LogLevel: ${data}`);
      if (data.includes('Error')) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error al procesar archivo');
      };
    });

    child.on('close', (code) => {
      resolve(code);
    });
  });

class FFMPEGMANAGER {
  async ffprobe() {
    return true;
  }

  async ffmpeg(inputVideoSource: string, outputVideoSrc: string) {
    try {
      const inputVideoSrc = `${inputVideoSource}`;
      const principalCommand = 'ffmpeg';
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

      await AsyncFFMPEG(principalCommand, args, options);
      return outputVideoSrc;
    } catch (error) {
      throw error;
    }
  }

  async processVideo(
      inputVideoSource: string,
      outputVideoSrc: string,
      context: any,
      videoSourceId: string) {
    try {
      const isValidFile = await this.ffprobe();
      if (!isValidFile) {
        throw new Error('El archivo es corrupto');
      };
      // // generar mas status de procesamiento de video

      await videoStatusController.createVideoStatus(
          videoSourceId,
          context,
          'doing',
      );

      const outPutPath = await this.ffmpeg(inputVideoSource, outputVideoSrc);
      return outPutPath;
    } catch (error) {
      throw error;
    }
  }
}


const ffmpegController = new FFMPEGMANAGER();

export {
  ffmpegController,
};
