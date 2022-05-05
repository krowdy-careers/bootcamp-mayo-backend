import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;


const VideoManagerSchema = new Schema({
  firstName: {type: String, required: true},
  userId: {type: Types.ObjectId, required: true, unique: true},
  email: {type: String, lowercase: true},
  role: {type: String},
  password: {type: String},
}, {
  timestamps: true,
});

const VideoManagerModel = videoDB.model('videomanagers', VideoManagerSchema);

export default VideoManagerModel;
