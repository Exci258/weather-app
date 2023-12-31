import { StateSchema } from '@/app/providers/StoreProvider';

export const getWeatherData = (state: StateSchema) => state.weather.data;
export const getWeatherIsLoading = (state: StateSchema) =>
    state.weather.isLoading;
