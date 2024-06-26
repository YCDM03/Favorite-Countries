import { useEffect, useState } from "react";
import "./App.css";
import { Country, CountryWithIsFavor } from "./types/Country";
import { getCountries } from "./api/countries.api";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState<CountryWithIsFavor[]>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const contries: Country[] = await getCountries();
      const countryWithIsFavor: CountryWithIsFavor[] = contries.map(
        (country) => {
          return { ...country, isFavor: false };
        }
      );
      setCountries(countryWithIsFavor);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Favorite Countries</h1>
      <CountryList
        countries={countries.filter((contry) => {
          return contry.isFavor === true;
        })}
        setCountries={setCountries}
      />
      <h1>Countries</h1>
      <CountryList
        countries={countries.filter((contry) => {
          return contry.isFavor === false;
        })}
        setCountries={setCountries}
      />
    </div>
  );
}

export default App;
