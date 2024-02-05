export const getUserName = async () => {
    const userName = process.argv.filter((el) => el.startsWith('--username'))[0];
    const updatedUserName = userName ? userName.replace(/^--username=/, '') : 'Anonymous';
    return updatedUserName ? updatedUserName : 'Anonymous';
}

