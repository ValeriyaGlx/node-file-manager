/**
 * Delete file
 * @param {string} pathFile - path to file
 */

import {rm} from "fs/promises";
import { resolve } from "path";

import { MESSAGES } from "../utils/constants.js";

export const remove = async (pathFile) => {
    try {
        await rm(resolve(process.cwd(), pathFile));
        console.log(MESSAGES.fileRemoved);
    } catch (err) {
        throw new Error(MESSAGES.failedOperation);
    }
}
