import { HTTPClient } from 'koajax';

let token;

export const service = new HTTPClient({
    baseURI: 'https://allab.web-cell.dev:1337',
    responseType: 'json'
}).use(async ({ request: { method, path, headers }, response }, next) => {
    if (token) headers['Authorization'] = 'token ' + token;

    await next();

    if (method === 'POST' && path.startsWith('/session'))
        token = response.headers.Token;
});
