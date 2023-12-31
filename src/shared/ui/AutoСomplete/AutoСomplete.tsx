import { Combobox } from '@headlessui/react';
import { City, getCityFoundCities, fetchCityByName } from '@/entities/City';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import cls from './Autocomplete.module.scss';
import ChevronUpDownIcon from '../../assets/icons/chevron-up-down.svg';
import CheckIcon from '../../assets/icons/check.svg';
import { fetchWeatherByCity } from '@/entities/Weather';

export const AutoComplete = () => {
    const dispatch = useAppDispatch();
    const foundCities = useSelector(getCityFoundCities);

    const fetchCities = (e: ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        dispatch(fetchCityByName(newQuery));
    };

    const fetchWeather = (city: City) => {
        dispatch(
            fetchWeatherByCity({
                lat: Number(city.latitude.toFixed(4)),
                lon: Number(city.longitude.toFixed(4)),
            }),
        );
    };

    const debouncedFetch = useDebounce(fetchCities, 500);

    const handleOptionSelection = (selectedOption: City | null) => {
        if (selectedOption) {
            fetchWeather(selectedOption);
        }
    };

    return (
        <div className={cls.AutoComplete}>
            <Combobox onChange={handleOptionSelection}>
                <div className={cls.AutoCompleteInput}>
                    <Combobox.Input
                        className={cls.AutoCompleteInput}
                        placeholder={'Введите город'}
                        displayValue={(city: City) => city.name}
                        onChange={debouncedFetch}
                    />
                    <Combobox.Button className={cls.AutoCompleteBtn}>
                        <ChevronUpDownIcon width={24} />
                    </Combobox.Button>
                </div>

                <Combobox.Options className={cls.AutoCompleteOptions}>
                    {foundCities.length === 0 ? (
                        <div className={cls.AutoCompleteNotFound}>
                            Поиск не дал результатов
                        </div>
                    ) : (
                        foundCities.map((city) => (
                            <Combobox.Option
                                className={({ active }) =>
                                    `${cls.AutoCompleteOption} ${
                                        active
                                            ? [cls.AutoCompleteOptionActive]
                                            : ''
                                    }`
                                }
                                key={city.id}
                                value={city}
                                onClick={() => fetchWeather(city)}
                            >
                                {({ selected }) => (
                                    <>
                                        {selected ? (
                                            <span className={cls.Selected}>
                                                <CheckIcon width={24} />
                                            </span>
                                        ) : null}
                                        <span>{`${city.name}, ${city.region}`}</span>
                                    </>
                                )}
                            </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
            </Combobox>
        </div>
    );
};
