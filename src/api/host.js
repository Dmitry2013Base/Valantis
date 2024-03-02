import axios from "axios";
import CryptoJs from 'crypto-js';


const today = new Date().toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' }).split('.').reverse().join('');
const password = CryptoJs.MD5(`Valantis_${today}`).toString();
const $host = axios.create({
    baseURL: 'https://api.valantis.store:41000/'
});

$host.interceptors.request.use(config => {
    config.headers['X-Auth'] = password;
    return config;
})

$host.interceptors.response.use(config => {
    return config;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status !== 200 && error.config && !error.config.isRetry) {
        originalRequest.isRetry = true;
        console.log(error.message);
        return $host.request(originalRequest);
    }
});

export { $host }
