import React from "react";
import styled from "styled-components";
import { CountryWithIsFavor } from "../types/Country";
import CountryCard from "./CountryCard";

interface props {
  title: string;
  countries: CountryWithIsFavor[];
  setCountries: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
  setOriginalData: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
  children?: React.ReactNode;
}

function CountryList({
  title,
  countries,
  setCountries,
  setOriginalData,
  children,
}: props) {
  return (
    <>
      <StH1>{title}</StH1>
      {children}
      <StCountries>
        {countries.map((country: CountryWithIsFavor) => {
          return (
            <CountryCard
              key={country.name.common}
              setCountries={setCountries}
              setOriginalData={setOriginalData}
              country={country}
            />
          );
        })}
      </StCountries>
    </>
  );
}

const StH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 20px auto;
`;

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

export default CountryList;
