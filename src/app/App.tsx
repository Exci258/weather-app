import { AutoComplete } from '@/shared/ui/AutoСomplete';
import { WeatherCard } from '@/entities/Weather';

function App() {
    const getTime = () => {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        return `${now.getUTCDate()}-${
            now.getUTCMonth() + 1
        }-${now.getUTCFullYear()} ${hours}:${minutes} UTC`;
    };
    return (
        <div className="app">
            <div className="date">{getTime()}</div>
            <AutoComplete />
            <WeatherCard />
        </div>
    );
}

export default App;
