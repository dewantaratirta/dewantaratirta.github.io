import { dev } from "$app/env";

export const generateSlug = (str) => {
    //replace all special characters | symbols with a space
    str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ')
        .toLowerCase();

    // trim spaces at start and end of string
    str = str.replace(/^\s+|\s+$/gm, '');

    // replace space with dash/hyphen
    str = str.replace(/\s+/g, '-');
    return str;
}

export const makeUrl = (str) => {
    let baseUrl = (dev) ? 'http://localhost:3000/' : 'https://dewantaratirta@github.io/';
    return baseUrl + 'p/' +str;
}