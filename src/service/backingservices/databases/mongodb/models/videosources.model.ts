import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;

const VideoSourceSchema = new Schema({
  originExtension: {type: String},
  targetExtension: {type: String},
  fileName: {type: String},
  fileSources: {
    origin: {type: String},
    output: {type: String},
    tmp: {type: String},
  },
  createdBy: {type: Types.ObjectId, ref: 'videomanagers'},
}, {
  timestamps: true,
});

const VideoSourceModel = videoDB.model('videosources', VideoSourceSchema);

export default VideoSourceModel;
