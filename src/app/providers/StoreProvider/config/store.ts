import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from '@/entities/Weather';
import { cityReducer } from '@/entities/City';

const rootReducer = {
    weather: weatherReducer,
    city: cityReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
