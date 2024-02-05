/**
 * Compress file (using Brotli algorithm and Streams API)
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to destination
 */

import { createReadStream, createWriteStream } from "fs";
import { access } from "fs/promises";
import zlib from "zlib";
import { resolve } from "path";
import { pipeline } from "stream";

import { MESSAGES } from "../utils/constants.js";

export const compress = async (pathFile, pathDirectory) => {
  const filePath = resolve(process.cwd(), pathFile);

  try {
    await access(filePath);

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(
      resolve(process.cwd(), pathDirectory)
    );
    const compressStream = zlib.createBrotliCompress();

    pipeline(readStream, compressStream, writeStream, (error) => {
      if (error) {
        console.log(MESSAGES.failedOperation);
      } else {
        console.log(MESSAGES.fileCompressed);
      }
    });
  } catch (err) {
    console.log(MESSAGES.failedOperation);
  }
};
