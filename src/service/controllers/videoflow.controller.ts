/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {ffmpegController} from './ffmpeg.controller';
import {videosourceController} from './videosources.controller';
import {videoStatusController} from './videostatus.controller';

class VIDEOFLOW {
  async executeProcess(inputVideoSource: string) {
    try {
      const context = {
        userId: '6275bb583af43b4205af521a',
      };
      // actualizar el source video con el video obtenido
      // primero crear el source en la base de datos
      const videoSource = await videosourceController.createVideoSource(inputVideoSource, context);
      // crear el primer status de procesamiento del video
      await videoStatusController.createVideoStatus(videoSource._id, context, 'pending');
      // enviar a ejercutar el procesamiento de video
      let isVideoAvailable = false;
      try {
        await ffmpegController.processVideo(inputVideoSource, videoSource.fileSources.tmp, context, videoSource._id);
      } catch (error) {
      // // generar mas status de procesamiento de video
        await videoStatusController.createVideoStatus(videoSource._id, context, 'failed');
        isVideoAvailable = true;
      }
      // generar el ultimo estatus de finalizacion

      await videoStatusController.createVideoStatus(videoSource._id, context, 'completed');
      if (isVideoAvailable) {
        return videoSource;
      };
      return {};
    } catch (error) {
      throw error;
    }
  }
}


const videoFlowController = new VIDEOFLOW();

export {
  videoFlowController,
};
