import { CountryWithIsFavor } from "../types/Country";
import styled from "styled-components";

interface CountryCardsProps {
  country: CountryWithIsFavor;
  setCountries: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
  setOriginalData: React.Dispatch<React.SetStateAction<CountryWithIsFavor[]>>;
}

function CountryCard({
  country,
  setCountries,
  setOriginalData,
}: CountryCardsProps) {
  const { name, isFavor, flags, capital } = country;

  const changeCountryIsFavor = (country: CountryWithIsFavor) => {
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
  };

  return (
    <StCountryCard
      $favor={isFavor}
      onClick={() => {
        changeCountryIsFavor(country);
      }}
    >
      <StCardImg src={flags.svg} alt="" />
      <StH3>{name.common}</StH3>
      <StH4>{capital}</StH4>
    </StCountryCard>
  );
}

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

export default CountryCard;
