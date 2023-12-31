import { WeatherSchema } from '@/entities/Weather';
import { CitySchema } from '@/entities/City';

export interface StateSchema {
    weather: WeatherSchema;
    city: CitySchema;
}
