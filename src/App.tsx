import { useEffect, useState } from "react";
import "./App.css";
import { Country, CountryWithIsFavor } from "./type/Country";
import { getCountries } from "./api/countries.api";

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

  return <></>;
}

export default App;
