/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import VideoSourceModel from '../backingservices/databases/mongodb/models/videosources.model';
import path from 'path';
import {createPathTemp} from './utils.controller';

class VIDEOSOURCE {
  async createVideoSource(pathInputVideo, context) {
    try {
      const [fileName, extension] = pathInputVideo.split('.');

      const extensionFile = path.extname(pathInputVideo);

      const newVideoSource = {
        fileName: fileName,
        originExtension: extensionFile,
        targetExtension: '.mp4',
        fileSources: {
          origin: pathInputVideo,
          output: `${fileName}.mp4`,
          tmp: createPathTemp(fileName, '.mp4'),
        },
      };

      const videoSourceController = await VideoSourceModel.create(newVideoSource);
    } catch (error) {
      throw error;
    }
  }
}

const videosourceController = new VIDEOSOURCE;

export {
  videosourceController,
};
