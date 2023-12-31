import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from '@/shared/api/api';
import { Weather } from '../types/weather';
import { WEATHER_API_KEY } from '@/shared/const/api';

export const fetchWeatherByCity = createAsyncThunk<
    Weather,
    { lat: number; lon: number }
>('weather/fetchWeatherByCity', async ({ lat, lon }, thunkApi) => {
    try {
        const response = await weatherApi.get<Weather>('/forecast', {
            params: {
                appid: WEATHER_API_KEY,
                units: 'metric',
                lang: 'ru',
                lat,
                lon,
            },
        });
        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue('error');
    }
});
