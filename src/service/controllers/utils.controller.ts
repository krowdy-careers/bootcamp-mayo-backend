import path from 'path';
import fs from 'fs';
import os from 'os';
import {v4 as uuidv4} from 'uuid';

const deletePathTmp = () =>{};

const uploadNewFileToStorage = () => {};

const createPathTemp = (filename: string, extension: string) =>{
  try {
    const randomDirPath = `ffmpeg-output-${uuidv4()}`;
    const dirPath = path.join(os.tmpdir(), randomDirPath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    const extName = path.extname(filename);
    const fileName = path.basename(filename, extName);

    const pathTemp = `${path.join(dirPath, fileName )}.${extension}`;

    return pathTemp;
  } catch (error) {
    throw error;
  }
};


export {createPathTemp};
