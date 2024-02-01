/**
 * Copy file (using Readable and Writable streams):
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to a NEW directory
 */

import { createReadStream, createWriteStream } from "fs";
import { resolve, basename } from "path";

import { MESSAGES } from "../utils/constants.js";

export const cp = async (pathFile, pathDirectory) => {
  const fileName = basename(pathFile);
  const readStream = createReadStream(resolve(process.cwd(), pathFile));
  const writeStream = createWriteStream(resolve(process.cwd(), pathDirectory, `${fileName}`));
  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(MESSAGES.fileCopied);
  });

  readStream.on("error", (err) => {
    console.error(MESSAGES.failedOperation);
  });

  writeStream.on("error", (err) => {
    console.error(MESSAGES.failedOperation);
  });
};
