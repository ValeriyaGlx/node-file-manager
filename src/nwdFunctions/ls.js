/**
 * Print in console list of all files and folders in current directory.
 */

//TODO need to sort


import { readdir, stat } from "fs/promises";
import { MESSAGES } from "../utils/constants.js";

export const ls = async () => {
  try {
    const files = await readdir(".");

    const filesWithTypes = await Promise.all(
      files.map(async (file) => {
        return {
          Name: file,
          Type: (await stat(file)).isDirectory() ? "directory" : "file",
        };
      })
    );
    console.table(filesWithTypes.sort((el1, el2) => el1.Type > el2.Type ? 1 : -1));
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
