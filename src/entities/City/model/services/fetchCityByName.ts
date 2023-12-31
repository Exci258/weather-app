import { createAsyncThunk } from '@reduxjs/toolkit';
import { cityApi } from '@/shared/api/api';

export const fetchCityByName = createAsyncThunk(
    'city/fetchCityByName',
    async (cityName: string, thunkApi) => {
        try {
            const response = await cityApi.get('/cities', {
                params: {
                    minPopulation: 35000,
                    languageCode: 'ru',
                    namePrefix: cityName,
                },
            });
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
