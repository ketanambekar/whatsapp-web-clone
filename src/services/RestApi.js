import axios from 'axios';

const instance = axios.create({
    baseURL: "https://whatsapp-web-mern-krd.herokuapp.com" //"http://localhost:9000"
})

export default instance;

