import { highlightWords } from "./highlightWords.js";

export const MESSAGES = {
  greeting: (userName) => `Welcome to the File Manager, ${userName}!`,
  farewell: (userName) => `Thank you for using File Manager, ${userName}, goodbye!`,
  directory: (path) => `You are currently in: 📍 ${highlightWords(path, 'blue')}`,
  waiting: (userName) => highlightWords(`Waiting your command, ${userName} 💖`, 'yellow'),
  invalidInput: highlightWords('Invalid input', 'red'),
  failedOperation: highlightWords('Operation failed', 'red'),
  fileCreted: highlightWords('File successfully created!', 'green'),
  fileRenamed: highlightWords('File successfully renamed!', 'green'),

}
