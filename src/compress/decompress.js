/**
 * Decompress file (using Brotli algorithm and Streams API)
 * @param {string} pathFile - path to file
 * @param {string} pathDirectory - path to a NEW directory
 */

import { createReadStream, createWriteStream } from "fs";
import { access, constants } from "fs/promises";

import zlib from "zlib";
import { resolve } from "path";
import { pipeline } from "stream";

import { MESSAGES } from "../utils/constants.js";

export const decompress = async (pathFile, pathDirectory) => {
  const filePath = resolve(process.cwd(), pathFile);

  try {
    await access(filePath);

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(
      resolve(process.cwd(), pathDirectory)
    );
    const decompressStream = zlib.createBrotliDecompress();

    pipeline(readStream, decompressStream, writeStream, (error) => {
      if (error) {
        console.log(MESSAGES.failedOperation);
      } else {
        console.log(MESSAGES.fileDecompressed);
      }
    });
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
