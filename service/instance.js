import axios from 'axios';
import Config from "@/service/config.js";

const baseURL = Config.baseURL


let instanceToken = axios.create({
    baseURL: baseURL,
});

// Alter defaults after instance has been created
instanceToken.interceptors.request.use(function (config) {
    config.headers = {
       [tokenParamsName]: tokenStr,
    };
    return config;
}, function (error) {
    return Promise.reject(error);
});

const instance = axios.create({
    baseURL: baseURL
});

const translationInstance = axios.create({
    baseURL: 'https://translation.googleapis.com/language/translate',
});



export default {
    instanceToken: instanceToken,
    instance: instance,
    translationInstance :translationInstance
}