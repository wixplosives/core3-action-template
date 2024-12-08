const wait = async (milliseconds) => {
    return new Promise((resolve) => {
        if (isNaN(milliseconds)) {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve('done!'), milliseconds);
    });
};
export const generateGreeting = async ({ name, jobName }) => {
    await wait(100);
    const result = `${name} => ${jobName}`;
    return result;
};
//# sourceMappingURL=helpers.js.map