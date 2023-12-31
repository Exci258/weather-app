import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherSchema } from '../types/weatherSchema';
import { fetchWeatherByCity } from '@/entities/Weather/models/services/fetchWeatherByCity.ts';
import { Weather } from '@/entities/Weather/models/types/weather.ts';

const initialState: WeatherSchema = {
    data: undefined,
    isLoading: false,
};

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherByCity.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchWeatherByCity.fulfilled,
                (state, action: PayloadAction<Weather>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchWeatherByCity.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { reducer: weatherReducer } = weatherSlice;
export const { actions: weatherActions } = weatherSlice;
