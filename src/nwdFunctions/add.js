import { writeFile } from "fs/promises";
import { join } from 'path';
import { MESSAGES } from "../utils/constants.js";

export const add = async (name) => {
  try {
    await writeFile(join(process.cwd(), name), "", { flag: "wx" });
    console.log(MESSAGES.fileCreted);
  } catch (error) {
    console.log(MESSAGES.failedOperation);
  }
};
