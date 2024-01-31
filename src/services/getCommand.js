import { cd, up, ls, add, cat } from "../nwdFunctions/index.js";

import { MESSAGES } from "../utils/constants.js";

cd;
export const getCommand = (input) => {
  const argsInput = input.split(" ").filter((el) => el);
  const trimedInput = input.trim();
  switch (argsInput[0]) {
    case "up":
      if (argsInput.length > 1) {
        return console.log(MESSAGES.invalidInput);
      }
      up();
      break;
    case "cd":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      cd(argsInput[1]);
      break;
    case "ls":
      if (argsInput.length > 1) {
        return console.log(MESSAGES.invalidInput);
      }
      ls();
      break;
    case "add":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      add(argsInput[1]);
      break;
    case "cat":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      cat(argsInput[1]);
      break;
    default:
      console.log(MESSAGES.invalidInput);
      break;
  }
};
