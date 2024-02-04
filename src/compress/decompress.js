/**
 * Decompress file (using Brotli algorithm and Streams API)
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to a NEW directory
 */

import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { resolve } from "path";

import { MESSAGES } from "../utils/constants.js";

export const decompress = (pathFile, pathDirectory) => {
  const readStream = createReadStream(resolve(process.cwd(), pathFile));
  const writeStream = createWriteStream(resolve(process.cwd(), pathDirectory));
  const decompressStream = zlib.createBrotliDecompress();

  readStream.pipe(decompressStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(MESSAGES.fileDecompressed);
  });

  readStream.on("error", () => {
    console.log(MESSAGES.failedOperation);
  });
  decompressStream.on("error", () => {
    console.log(MESSAGES.failedOperation);
  });
  writeStream.on("error", () => {
    console.log(MESSAGES.failedOperation);
  });
};
