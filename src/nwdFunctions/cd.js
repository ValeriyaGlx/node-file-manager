/**
 * Go to dedicated folder from current directory
 * @param {string} path - path to directory
 */

import { resolve } from "path";
import { MESSAGES } from "../utils/constants.js";

export const cd = (path) => {
  try {
    const targetPath = resolve(process.cwd(), path);
    process.chdir(targetPath);
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
