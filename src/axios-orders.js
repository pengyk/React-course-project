import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-ec1a7.firebaseio.com/'
})

export default instance;