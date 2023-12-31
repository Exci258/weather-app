import classNames from 'classnames';
import cls from './DailyForecast.module.scss';
import { WeatherData } from '../../models/types/weather';

export interface DailyForecastProps {
    className?: string;
    weather: WeatherData[];
}

export const DailyForecast = (props: DailyForecastProps) => {
    const { className, weather } = props;
    const timestampToDate = (ts: number) => {
        const date = new Date(ts * 1000);
        return date.getUTCDate();
    };
    const today = new Date().getUTCDate();
    const todayWeather = weather.filter(
        (item) => timestampToDate(item.dt) === today,
    );

    return (
        <div className={classNames(cls.DailyForecast, [className])}>
            <h3 className={cls.Title}>Прогноз на сегодня</h3>
            {todayWeather.map((item) => {
                return (
                    <div className={cls.Item} key={item.dt}>
                        <div>{item.dt_txt.match(/\b\d{2}:\d{2}\b/g)}</div>
                        <img
                            width={60}
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        />
                        <div>{Math.round(item.main.temp)} °C</div>
                    </div>
                );
            })}
        </div>
    );
};
