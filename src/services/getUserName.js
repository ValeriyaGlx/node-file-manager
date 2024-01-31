export const getUserName = async () => {
    const userName = process.argv.filter((el) => el.startsWith('--username'))[0];
    return userName ? userName.replace(/^--username=/, '') : 'Anonymous';
}

// TODO: обработать пустую строку

