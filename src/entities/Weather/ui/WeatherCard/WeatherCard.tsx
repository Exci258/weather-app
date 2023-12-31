import { useSelector } from 'react-redux';
import {
    getWeatherData,
    getWeatherIsLoading,
} from '../../models/selectors/weather';
import cls from './WeatherCard.module.scss';
import { CurrentWeather } from '../../ui/CurrentWeather/CurrentWeather';
import { AirCondition } from '../../ui/AirCondition/AirCondition';
import { DailyForecast } from '../../ui/DailyForecast/DailyForecast';
import { Loader } from '@/shared/ui/Loader';
import CloudIcon from '@/shared/assets/icons/clouds.svg';
export const WeatherCard = () => {
    const weather = useSelector(getWeatherData);
    const isLoading = useSelector(getWeatherIsLoading);

    if (isLoading) {
        return <Loader />;
    }
    if (!weather) {
        return (
            <div className={cls.WeatherCard}>
                <h1>Введите название города</h1>
                <h2>Поиск более чем по 300 000 городам</h2>
                <CloudIcon width={100} height={100} />
            </div>
        );
    }

    return (
        <div className={cls.WeatherCard}>
            <div className={cls.WeatherCardDetails}>
                <CurrentWeather weather={weather} />
                <AirCondition weather={weather.list[0]} />
                <DailyForecast weather={weather.list} />
            </div>
        </div>
    );
};
