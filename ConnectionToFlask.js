import axios from "axios";

const Http = axios.create({
    //baseURL: 'https://geoclock-back.herokuapp.com'
    baseURL: 'http://127.0.0.1:5000/'

})

export default Http
