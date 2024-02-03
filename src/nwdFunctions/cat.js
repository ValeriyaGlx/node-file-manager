/**
 * Read file and print it's content in console
 * @param {string} path - path to file
 */


import { createReadStream } from "fs";
import { resolve } from "path";

import { MESSAGES } from "../utils/constants.js";

export const cat = async (path) => {
    const readStream = createReadStream(resolve(process.cwd(), path));
    readStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });

    readStream.on("error", () => {
      console.log(MESSAGES.failedOperation);
    });
};
