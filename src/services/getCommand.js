import { hash } from "../hash/hash.js";
import {
  cd,
  cp,
  up,
  ls,
  add,
  cat,
  rn,
  mv,
  remove,
} from "../nwdFunctions/index.js";

import { compress, decompress } from "../compress/index.js";

import { MESSAGES } from "../utils/constants.js";
import { os } from "../os/os.js";

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
      await cp(argsInput[1], argsInput[2]);
      break;
    case "mv":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      await mv(argsInput[1], argsInput[2]);
      break;
    case "rm":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      await remove(argsInput[1]);
      break;
    case "hash":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      await hash(argsInput[1]);
      break;
    case "compress":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      await compress(argsInput[1], argsInput[2]);
      break;
    case "decompress":
      if (argsInput.length !== 3) {
        return console.log(MESSAGES.invalidInput);
      }
      await decompress(argsInput[1], argsInput[2]);
      break;
    case "os":
      if (argsInput.length !== 2) {
        return console.log(MESSAGES.invalidInput);
      }
      os(argsInput[1]);
      break;
    default:
      console.log(MESSAGES.invalidInput);
      break;
  }
};
