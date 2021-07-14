import Axios from 'axios'
export function loginUser(dataTosubmit) {
    const request = Axios.post('/api/users/login', dataTosubmit)
        .then(response => response.data)

    return {
        type: "LOGIN_USER",
        payload: request
    }
}

export function registerUser(dataTosubmit) {
    const request = Axios.post('/api/users/register', dataTosubmit)
        .then(response => response.data)

    return {
        type: "REGISTER_USER",
        payload: request
    }
}

export function auth() {
    const request = Axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: "AUTH_USER",
        payload: request
    }
}
