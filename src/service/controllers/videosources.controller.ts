/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import VideoSourceModel from '../backingservices/databases/mongodb/models/videosources.model';
import path from 'path';
import {createPathTemp} from './utils.controller';

class VIDEOSOURCE {
  async createVideoSource(pathInputVideo: string, context: any) {
    try {
      const extensionFile = path.extname(pathInputVideo);

      const extName = path.extname(pathInputVideo);
      const fileName = path.basename(pathInputVideo, extName);

      const outputdir = createPathTemp(fileName, 'mp4');
      console.log('🚀 ~ file: videosources.controller.ts ~ line 17 ~ VIDEOSOURCE ~ createVideoSource ~ outputdir', outputdir);

      const newVideoSource = {
        fileName: fileName,
        originExtension: extensionFile,
        targetExtension: '.mp4',
        fileSources: {
          origin: pathInputVideo,
          output: outputdir,
          tmp: outputdir,
        },
        createdBy: context.userId,
      };

      const videoSourceController = await VideoSourceModel.create(newVideoSource);
      return videoSourceController;
    } catch (error) {
      throw error;
    }
  }
}

const videosourceController = new VIDEOSOURCE;

export {
  videosourceController,
};
