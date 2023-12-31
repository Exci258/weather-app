import { Weather } from './weather';

export interface WeatherSchema {
    data: Weather | undefined;
    isLoading: boolean;
}
