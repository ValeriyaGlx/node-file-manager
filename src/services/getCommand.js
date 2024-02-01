import * as readline from "node:readline/promises";
import { cd, up, ls, add, cat, rn } from "../nwdFunctions/index.js";

import { MESSAGES } from "../utils/constants.js";

const parseInput = (input) => {
  const regex = /[^\s'"]+|['"]([^'"]*?)['"](?!['"])/gi;
  const args = [];
  let match;

  do {
    match = regex.exec(input);
    if (match !== null) {
      args.push(match[1] ? match[1] : match[0]);
    }
  } while (match !== null);

  return args;
};

export const getCommand = async (input) => {
  const argsInput = parseInput(input);
  console.log(argsInput);
  switch (argsInput[0]) {
    case "up":
      if (argsInput.length > 1) {
        return console.log(MESSAGES.invalidInput);
      }
      await up();
      break;
    case "cd":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      await cd(argsInput[1]);
      break;
    case "ls":
      if (argsInput.length > 1) {
        return console.log(MESSAGES.invalidInput);
      }
      await ls();
      break;
    case "add":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      await add(argsInput[1]);
      break;
    case "cat":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      await cat(argsInput[1]);
      break;
    case "rn":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      await rn(argsInput[1], argsInput[2]);
      break;
    case "cp":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      // TODO
      break;
    case "mv":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      // TODO
      break;
    case "rm":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      // TODO
      break;
    default:
      console.log(MESSAGES.invalidInput);
      break;
  }
};
