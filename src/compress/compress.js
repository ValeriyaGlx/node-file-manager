/**
 * Compress file (using Brotli algorithm and Streams API)
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to destination
 */

import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { resolve, basename } from "path";

import { MESSAGES } from "../utils/constants.js";

//TODO have questions how it has to work

export const compress = (pathFile, pathDirectory) => {
  const fileName = basename(pathFile);
  const readStream = createReadStream(resolve(process.cwd(), pathFile));
  const writeStream = createWriteStream(resolve(process.cwd(), pathDirectory));
  const compressStream = zlib.createBrotliCompress();
  readStream.pipe(compressStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(MESSAGES.fileCompressed);
  });

    readStream.on("error", () => {
      console.log(MESSAGES.failedOperation);
    });
    compressStream.on("error", () => {
      console.log(MESSAGES.failedOperation);
    });
    writeStream.on("error", () => {
      console.log(MESSAGES.failedOperation);
    });
};
