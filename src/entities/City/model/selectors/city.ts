import { StateSchema } from '@/app/providers/StoreProvider';

export const getCityFoundCities = (state: StateSchema) =>
    state.city.foundCities;
