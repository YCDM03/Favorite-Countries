import React from "react";
import styled from "styled-components";
import { CountryWithIsFavor } from "../types/Country";

interface props {
  countries: CountryWithIsFavor[];
  setCountries: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
  setOriginalData: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
}

function CountryList({ countries, setCountries, setOriginalData }: props) {
  return (
    <StCountries>
      {countries.map((country: CountryWithIsFavor) => {
        return (
          <StCountryCard
            key={country.name.common}
            $favor={country.isFavor}
            onClick={() => {
              setCountries((prev) =>
                prev.map((element) => {
                  return element.name.common === country.name.common
                    ? { ...element, isFavor: !element.isFavor }
                    : element;
                })
              );
              setOriginalData((prev) =>
                prev.map((element) => {
                  return element.name.common === country.name.common
                    ? { ...element, isFavor: !element.isFavor }
                    : element;
                })
              );
            }}
          >
            <StCardImg src={country.flags.svg} alt="" />
            <StH3>{country.name.common}</StH3>
            <StH4>{country.capital}</StH4>
          </StCountryCard>
        );
      })}
    </StCountries>
  );
}

const StCountries = styled.div`
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 334px);
  gap: 30px;

  @media screen and (max-width: 767px) {
    max-width: 719px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1023px) {
    max-width: 975px;
    grid-template-columns: repeat(2, 334px);
  }

  @media screen and (max-width: 1279px) {
    max-width: 1231px;
    grid-template-columns: repeat(2, 334px);
  }
`;

const StCountryCard = styled.div<{ $favor: boolean }>`
  padding: 16px;
  min-width: 300px;
  box-shadow: 2px 2px 5px #c5c5c5;
  height: 180px;
  border: 1px solid ${(props) => (props.$favor ? "#4DE800" : "#c5c5c5")};
  border-radius: 5px;
  align-content: center;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;

const StCardImg = styled.img`
  width: 100px;
`;

const StH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 10px auto;
`;
const StH4 = styled.h4`
  font-weight: 600;
  font-size: 18px;
`;

export default CountryList;
