import { createSlice } from '@reduxjs/toolkit';
import { fetchCityByName } from '../services/fetchCityByName';
import { CitySchema } from '../types/citySchema';
import { INITIAL_CITIES } from '@/shared/const/initialCities';

const initialState: CitySchema = {
    foundCities: INITIAL_CITIES,
    isLoading: false,
};
export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityByName.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCityByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.foundCities = action.payload.data;
            })
            .addCase(fetchCityByName.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { reducer: cityReducer } = citySlice;
export const { actions: cityActions } = citySlice;
