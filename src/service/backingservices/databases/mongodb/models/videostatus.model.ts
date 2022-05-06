import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;

const VideoStatusSchema = new Schema({
  videoSourceId: {type: Types.ObjectId, ref: 'videosources'},
  modifiedBy: {type: Types.ObjectId},
  status: {type: String, enum: ['pending', 'doing', 'completed', 'failed']},
}, {
  timestamps: true,
});

const VideoStatusModel = videoDB.model('videostatus', VideoStatusSchema);

export default VideoStatusModel;
