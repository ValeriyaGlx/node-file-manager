/**
 * Move file (copying part should be done using Readable and Writable streams):
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to a NEW directory
 */

import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";
import { resolve, basename } from "path";
import { pipeline } from "stream";

import { MESSAGES } from "../utils/constants.js";

export const mv = async (pathFile, pathDirectory) => {
  const fileName = basename(pathFile);
  const readStream = createReadStream(resolve(process.cwd(), pathFile));
  const writeStream = createWriteStream(resolve(process.cwd(), pathDirectory, `${fileName}`));

  pipeline(readStream, writeStream, (error) => {
    if (error) {
      console.log(MESSAGES.failedOperation);
    } else {
      rm(resolve(process.cwd(), pathFile));
      console.log(MESSAGES.fileMoved);
    }
  });
};
