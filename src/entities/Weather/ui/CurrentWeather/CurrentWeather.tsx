import classNames from 'classnames';
import cls from './CurrentWeather.module.scss';
import { Weather } from '../../models/types/weather';

export interface CurrentWeatherProps {
    className?: string;
    weather: Weather;
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
    const { className, weather } = props;
    return (
        <div className={classNames(cls.TodayWeather, [className])}>
            <h3 className={cls.Title}>Текущая погода</h3>
            <h3 className={cls.City}>
                {`${weather.city.name}`}
                <br />
                {`${weather.city.country}`}
            </h3>
            <div className={cls.Temp}>
                <h4>{weather.list[0].weather[0].description}</h4>
                <h3>{`${Math.round(weather.list[0].main.temp)} °C`}</h3>
            </div>
            <div className={cls.Image}>
                <img
                    width={70}
                    src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                />
            </div>
        </div>
    );
};
