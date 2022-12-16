import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        const profile = JSON.parse(localStorage.getItem('profile'))
        const token = profile.token
        req.headers.Authorization = `Bearer ${token}`
    }

    return req;
})

export const getArticles = () => API.get(`articles`);

export const login = (formData) => API.post('/users/login', formData);
export const register = (formData) => API.post('/users', formData);
export const logout = () => localStorage.removeItem("current_user");