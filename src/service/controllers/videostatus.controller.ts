import VideoStatusModel from '../backingservices/databases/mongodb/models/videostatus.model';


class VIDEOSTATUS {
  async createVideoStatus(videoSourceId: string, context: any, status: string) {
    try {
      const newVideoStatus = {
        videoSourceId,
        modifiedBy: context.userId,
        status,
      };

      await VideoStatusModel.create(newVideoStatus);
    } catch (error) {
      throw error;
    }
  }
}

const videoStatusController = new VIDEOSTATUS();

export {
  videoStatusController,
};
