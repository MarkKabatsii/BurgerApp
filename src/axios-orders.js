import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-65a5f.firebaseio.com/'
});

export default instance;