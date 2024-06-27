import { useEffect, useState } from "react";
import "./App.css";
import { Country, CountryWithIsFavor } from "./types/Country";
import { getCountries } from "./api/countries.api";
import CountryList from "./components/CountryList";
import styled from "styled-components";

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
    <>
      <StH1>Favorite Countries</StH1>
      <CountryList
        countries={countries.filter((contry) => {
          return contry.isFavor === true;
        })}
        setCountries={setCountries}
      />
      <StH1>Countries</StH1>
      <CountryList
        countries={countries.filter((contry) => {
          return contry.isFavor === false;
        })}
        setCountries={setCountries}
      />
    </>
  );
}
const StH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 20px auto;
`;

export default App;
