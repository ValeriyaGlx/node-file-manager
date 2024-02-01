/**
 * Rename file (content unchanged)
 * @param {string} path - path to file
 * @param {string} name - new filename
 */

import { rename } from "fs/promises";
import { resolve, join } from "path";
import { MESSAGES } from "../utils/constants.js";

export const rn = async (path, name) => {
  try {
    await rename(resolve(process.cwd(), path), join(process.cwd(), name));
    console.log(MESSAGES.fileRenamed);
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
