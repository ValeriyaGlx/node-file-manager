/**
 * Calculate hash for file and print it into console
 * @param {string} path - path to file
 */

import { createHash } from "crypto";
import { createReadStream } from "fs";
import { resolve } from "path";

import { MESSAGES } from "../utils/constants.js";

export const hash = (path) => {
  const hash = createHash("sha256");
  const readStream = createReadStream(resolve(process.cwd(), path));

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  readStream.on("error", () => {
    console.log(MESSAGES.failedOperation);
  });
};
