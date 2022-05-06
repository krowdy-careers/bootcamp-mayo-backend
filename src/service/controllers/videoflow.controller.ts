import {videosourceController} from './videosources.controller';


class VIDEOFLOW {
  async processVideo(pathInputVideo) {
    const videoSource = await videosourceController.createVideoSource(pathInputVideo);
  }
}


const videoFlowController = new VIDEOFLOW();

export {
  videoFlowController,
};
