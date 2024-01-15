import {authHeader} from '@/helpers/auth-header.js';

const ENV = import.meta.env;

const baseUrl = ENV.VITE_APP_API_BASE_URL

function login (username, password, remember_me) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({username, password, remember_me})
  };

  return fetch (`${baseUrl}/auth/login`, requestOptions)
    .then ((response) => response.json ())
    .then (user => {
      if (user.data.accessToken) {
        localStorage.setItem ('user', JSON.stringify (user.data));
      }

      return user;
    });
}

function getList () {
  const requestOptions = {
    method: 'POST',
    headers: authHeader (),
    body: JSON.stringify ({
      per_page: 10,
      page: 0,
      sort: {
        name: "id",
        direction: "desc"
      }
    })
  };

  return fetch (`${baseUrl}/admin/users/pageable`, requestOptions).then (handleResponse)
}


function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader ()
  };

  return fetch (`${baseUrl}/users/${id}`, requestOptions).then (handleResponse);
}

function update (user) {
  const requestOptions = {
    method: 'PUT',
    headers: {...authHeader (), 'Content-Type': 'application/json'},
    body: JSON.stringify (user)
  };

  return fetch (`${baseUrl}/users/${user.id}`, requestOptions).then (handleResponse);
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader ()
  };

  return fetch (`${baseUrl}/users/${id}`, requestOptions).then (handleResponse);
}

function handleResponse (response) {
  return response.text ().then (text => {
    const {data} = text && JSON.parse (text);
    if (!response.ok) {
      if (response.status === 401) {
        logout ();
        location.reload (true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject (error);
    }

    return data;
  });
}

function logout () {
  localStorage.removeItem ('user');
}

export const userService = {
  login,
  logout,
  getList,
  update,
  getById,
  delete: _delete
};