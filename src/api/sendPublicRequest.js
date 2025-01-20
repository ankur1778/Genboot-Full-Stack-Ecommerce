import { getRootUrl } from '../api/getRootUrl';

export async function sendPublicRequest(path, opts = {}) {
    const headers = Object.assign({}, opts.headers || {}, {
        'Content-type': 'application/json; charset=UTF-8',
    })
console.log(path);
    const response = await fetch(
        `${getRootUrl()}${path}`,
        Object.assign({ method: 'POST',  }, opts, {
            headers,
        }),
    )
    console.log(getRootUrl());
    
    if (response.status !== 200) {
        throw response
    }

    const data = await response.json()
    return data
}