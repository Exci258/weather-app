import axios from 'axios';
import {
    WEATHER_API_URL,
    CITY_API_URL,
    CITY_API_KEY,
    CITY_API_HOST,
} from '../const/api';

export const weatherApi = axios.create({
    baseURL: WEATHER_API_URL,
});

export const cityApi = axios.create({
    baseURL: CITY_API_URL,
    headers: {
        'X-RapidAPI-Key': CITY_API_KEY,
        'X-RapidAPI-Host': CITY_API_HOST,
    },
});
