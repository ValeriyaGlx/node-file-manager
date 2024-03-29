const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
}

export const highlightWords = (word, color) => `${colors[color]}${word}${colors.reset}`;
