/**
 * Print in console list of all files and folders in current directory.
 */

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

    const sortLs = [...filesWithTypes.filter((el) => el.Type === 'directory'), ...filesWithTypes.filter((el) => el.Type === 'file')];
    console.table(sortLs);
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
