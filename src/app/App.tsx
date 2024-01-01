import { AutoComplete } from '@/shared/ui/AutoСomplete';
import { WeatherCard } from '@/entities/Weather';
import { getDate } from '@/shared/lib/getDate';

function App() {
    return (
        <div className="app">
            <div className="date">{getDate()}</div>
            <AutoComplete />
            <WeatherCard />
        </div>
    );
}

export default App;
