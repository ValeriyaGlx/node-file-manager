import { MESSAGES } from "../utils/constants.js";

export const up = () => {
    try {
        process.chdir('..');
    } catch (error) {
        console.log(MESSAGES.failedOperation);
    }
};

