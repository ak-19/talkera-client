import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('current_user')) {
        const profile = JSON.parse(localStorage.getItem('current_user'))
        const token = profile.token
        req.headers.Authorization = `Bearer ${token}`
    }

    return req;
})

export const createArticle = (formData) => API.post('/articles', formData);
export const getArticles = () => API.get(`articles`);
export const getFeed = () => API.get(`feed`);

export const login = (formData) => API.post('/users/login', formData);
export const register = (formData) => API.post('/users', formData);
export const logout = () => localStorage.removeItem("current_user");