/**
 * Copy file (using Readable and Writable streams):
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to a NEW directory
 */

import { createReadStream, createWriteStream } from "fs";
import { pipeline } from 'stream';
import { resolve, basename } from "path";

import { MESSAGES } from "../utils/constants.js";

export const cp = async (pathFile, pathDirectory) => {
  const fileName = basename(pathFile);
  const readStream = createReadStream(resolve(process.cwd(), pathFile));
  const writeStream = createWriteStream(
    resolve(process.cwd(), pathDirectory, `${fileName}`)
  );

  pipeline(readStream, writeStream, (error) => {
    if (error) {
      console.error(MESSAGES.failedOperation);
    } else {
      console.log(MESSAGES.fileCopied);
    }
  });
};
