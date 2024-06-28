import { useEffect, useState } from "react";
import "./App.css";
import { Country, CountryWithIsFavor } from "./types/Country";
import { getCountries } from "./api/countries.api";
import CountryList from "./components/CountryList";
import styled from "styled-components";

function App() {
  const [countries, setCountries] = useState<CountryWithIsFavor[]>([]);
  const [originalData, setOriginalData] = useState<CountryWithIsFavor[]>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const contries: Country[] = await getCountries();
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
      <StH1>Favorite Countries</StH1>
      <CountryList
        countries={countries.filter((country) => {
          return country.isFavor === true;
        })}
        setCountries={setCountries}
        setOriginalData={setOriginalData}
      />
      <StH1>Countries</StH1>
      <select
        name=""
        id=""
        onChange={(e) => {
          if (e.target.value === "인구 많은 순") {
            setCountries((prev) =>
              [...prev].sort((a, b) => {
                return b.population - a.population;
              })
            );
          } else if (e.target.value === "인구 적은 순") {
            setCountries((prev) =>
              [...prev].sort((a, b) => {
                return a.population - b.population;
              })
            );
          } else {
            setCountries(originalData);
          }
        }}
      >
        <option value="기본순">기본순</option>
        <option value="인구 많은 순">인구 많은 순</option>
        <option value="인구 적은 순">인구 적은 순</option>
      </select>
      <CountryList
        countries={countries.filter((country) => {
          return country.isFavor === false;
        })}
        setCountries={setCountries}
        setOriginalData={setOriginalData}
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
