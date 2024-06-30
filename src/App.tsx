import { useEffect, useState } from "react";
import "./App.css";
import { Country, CountryWithIsFavor } from "./types/Country";
import { CountriesAPI } from "./api/countries.api";
import CountryList from "./components/CountryList";
import styled from "styled-components";

function App() {
  const [countries, setCountries] = useState<CountryWithIsFavor[]>([]);
  const [originalData, setOriginalData] = useState<CountryWithIsFavor[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "인구 많은 순") {
      setCountries((prev) =>
        [...prev].sort((a, b) => {
          return b.population - a.population;
        })
      );
    } else if (event.target.value === "인구 적은 순") {
      setCountries((prev) =>
        [...prev].sort((a, b) => {
          return a.population - b.population;
        })
      );
    } else {
      setCountries(originalData);
    }
  };

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const contries: Country[] = await CountriesAPI.getCountries();
      const countryWithIsFavor: CountryWithIsFavor[] = contries.map(
        (country) => {
          return { ...country, isFavor: false };
        }
      );
      setOriginalData(countryWithIsFavor);
      setCountries(countryWithIsFavor);
    };
    getData();
  }, []);

  return (
    <>
      <StSelect name="" id="" onChange={handleSelectChange}>
        {["기본 순", "인구 많은 순", "인구 적은 순"].map((filter) => {
          return <option value={filter}>{filter}</option>;
        })}
      </StSelect>
      <CountryList
        title={"Favorite Countries"}
        countries={countries.filter((country) => {
          return country.isFavor === true;
        })}
        setCountries={setCountries}
        setOriginalData={setOriginalData}
      />

      <CountryList
        title={"Countries"}
        countries={countries.filter((country) => {
          return country.isFavor === false;
        })}
        setCountries={setCountries}
        setOriginalData={setOriginalData}
      />
    </>
  );
}
const StSelect = styled.select`
  display: block;
  margin-left: auto;
`;

export default App;
