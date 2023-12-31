import classNames from 'classnames';
import cls from './AirCondition.module.scss';
import { WeatherData } from '../../models/types/weather';
import TemperatureIcon from '@/shared/assets/icons/temperature.svg';
import WindIcon from '@/shared/assets/icons/wind.svg';
import CloudsIcon from '@/shared/assets/icons/clouds.svg';
import HumidityIcon from '@/shared/assets/icons/humidity.svg';

export interface AirConditionProps {
    className?: string;
    weather: WeatherData;
}

export const AirCondition = (props: AirConditionProps) => {
    const { className, weather } = props;
    return (
        <div className={classNames(cls.AirCondition, [className])}>
            <h3 className={cls.Title}>Метеоусловия</h3>
            <div className={cls.RealFeel}>
                <h4>
                    <TemperatureIcon width={24} height={24} />
                    Ощущается как
                </h4>
                <span>{Math.round(weather.main.feels_like)} °C</span>
            </div>
            <div className={cls.Wind}>
                <h4>
                    <WindIcon width={24} height={24} />
                    Ветер
                </h4>
                <span>{weather.wind.speed} м/с</span>
            </div>
            <div className={cls.Clouds}>
                <h4>
                    <CloudsIcon width={24} height={24} />
                    Облачность
                </h4>
                <span>{weather.clouds.all} %</span>
            </div>
            <div className={cls.Humidity}>
                <h4>
                    <HumidityIcon width={24} height={24} />
                    Влажность
                </h4>
                <span>{weather.main.humidity} %</span>
            </div>
        </div>
    );
};
