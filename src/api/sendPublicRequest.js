import { getRootUrl } from "../api/getRootUrl";

const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return true
}

export async function sendPublicRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8",
  });
  const response = await fetch(
    `${getRootUrl()}${path}`,
    Object.assign({ method: "POST" }, opts, {
      headers,
    })
  );

  if (response.status !== 200) {
    throw response;
  }

  const data = await response.json();
  return data;
}

export async function sendRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8",
  });

  const response = await fetch(
    `${getRootUrl()}${path}`,
    Object.assign({ method: "POST" }, opts, {
      headers,
    })
  );

  if (response.status !== 200) {
    throw response;
  }

  const data = await response.json();
  return data;
}
export default async function allProductsRequest(path, opts = {}) {
  // Get authToken from cookies
  const token = getCookie('token')
  if (!token) {
      throw new Error('token not found')
  }
  const headers = Object.assign({}, opts.headers || {}, {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
  })

  const response = await fetch(
      `${getRootUrl()}${path}`,
      Object.assign({ method: 'GET', credentials: 'same-origin' }, opts, {
          headers,
      }),
  )
  
  if (response.status !== 200) {
      throw response
  }

  const data = await response.json()
  return data
}

export async function categoryIdRequest(path, opts = {}) {
  // Get authToken from cookies
  const token = getCookie("token");
  const roleId = getCookie("roleId");

  if (!token) {
    throw new Error("Auth token not found");
  }
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${token}`,
    roleId: roleId,
  });

  const response = await fetch(
    `${getRootUrl()}${path}`,
    Object.assign({ method: "GET", credentials: "same-origin" }, opts, {
      headers,
    })
  );

  if (response.status !== 200) {
    throw response;
  }

  const data = await response.json();  
  return data;
}

export async function productsByCategoryRequest(path, opts = {}) {
    // Get authToken from cookies
    const token = getCookie('token')
    if (!token) {
        throw new Error('token not found')
    }
    const headers = Object.assign({}, opts.headers || {}, {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
    })
  
    const response = await fetch(
        `${getRootUrl()}${path}`,
        Object.assign({ method: 'GET', credentials: 'same-origin' }, opts, {
            headers,
        }),
    )
    
    if (response.status !== 200) {
        throw response
    }
  
    const data = await response.json()
    return data
  }
  

  export async function singleProductRequest(path, opts = {}) {
    // Get authToken from cookies
    const token = getCookie('token')
    if (!token) {
        throw new Error('token not found')
    }
    const headers = Object.assign({}, opts.headers || {}, {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
    })
  
    const response = await fetch(
        `${getRootUrl()}${path}`,
        Object.assign({ method: 'GET', credentials: 'same-origin' }, opts, {
            headers,
        }),
    )
    
    if (response.status !== 200) {
        throw response
    }
  
    const data = await response.json()
    return data
  }
  