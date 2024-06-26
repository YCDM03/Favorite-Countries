import React from "react";
import styled from "styled-components";
import { CountryWithIsFavor } from "../types/Country";

interface props {
  countries: CountryWithIsFavor[];
  setCountries: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
}

function CountryList({ countries, setCountries }: props) {
  return (
    <StCountries>
      {countries.map((country: CountryWithIsFavor) => {
        return (
          <StCountryCard
            key={country.name.common}
            $favor={country.isFavor}
            onClick={() => {
              setCountries((prev) =>
                prev.map((item) => {
                  return item.name.common === country.name.common
                    ? { ...item, isFavor: !item.isFavor }
                    : item;
                })
              );
            }}
          >
            <StCardImg src={country.flags.svg} alt="" />
            <h3>{country.name.common}</h3>
            <h4>{country.capital}</h4>
          </StCountryCard>
        );
      })}
    </StCountries>
  );
}

const StCountries = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const StCountryCard = styled.div<{ $favor: boolean }>`
  width: 300px;
  height: 200px;
  border: 1px solid ${(props) => (props.$favor ? "#4DE800" : "grey")};
  border-radius: 5px;
  align-content: center;
  cursor: pointer;
`;

const StCardImg = styled.img`
  width: 100px;
`;

export default CountryList;
