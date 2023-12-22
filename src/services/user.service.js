import {authHeader} from '@/helpers/auth-header.js';

const APU_URL = 'http://localhost:9090/v1/e-ngo'

export const userService = {
  login,
  logout,
  getAll,
  getById,
  update,
  delete: _delete
};

function login (username, password, remember_me) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({username, password, remember_me})
  };

  return fetch (`${APU_URL}/oauth/login`, requestOptions)
    .then ((response) => response.json ())
    .then (user => {
      console.log (user);
      if (user.data.access_token) {
        localStorage.setItem ('user', JSON.stringify (user));
      }

      return user;
    });
}

function logout () {
  localStorage.removeItem ('user');
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader ()
  };

  return fetch (`${APU_URL}/user/pageable`, requestOptions).then (handleResponse);
}


function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader ()
  };

  return fetch (`${APU_URL}/users/${id}`, requestOptions).then (handleResponse);
}

function update (user) {
  const requestOptions = {
    method: 'PUT',
    headers: {...authHeader (), 'Content-Type': 'application/json'},
    body: JSON.stringify (user)
  };

  return fetch (`${APU_URL}/users/${user.id}`, requestOptions).then (handleResponse);
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader ()
  };

  return fetch (`${APU_URL}/users/${id}`, requestOptions).then (handleResponse);
}

function handleResponse (response) {
  return response.text ().then (text => {
    const data = text && JSON.parse (text);
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