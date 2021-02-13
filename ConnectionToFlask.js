import axios from "axios";

const Http = axios.create({
    baseURL: 'https://geoclock-back.herokuapp.com'
})

export default Http
