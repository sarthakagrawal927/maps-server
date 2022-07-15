import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const info = chalk.hex('#00BFFF'); // Blue color

export const logger = {
    error: (message: string) => {
        console.log(error(message));
    },
    warning: (message: string) => {
        console.log(warning(message));
    },
    info: (message: string) => {
        console.log(info("[INFO]" + message));
    }
}