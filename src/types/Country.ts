export type Country = {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: { lating: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: object;
  continents: string[];
  currencies: {
    [key: string]: currenciesObj;
  };
  demonyms: { [key: string]: demonymsObj };
  flag: string;
  flags: { png: string; svg: string };
  gini?: object;
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { fra: string };
  fra: string;
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: translationsObj };
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: translationsObj;
  };
  unMember: boolean;
};

type currenciesObj = {
  name: string;
  symbol: string;
};

type demonymsObj = {
  f: string;
  m: string;
};

type translationsObj = {
  official: string;
  common: string;
};

export type CountryWithIsFavor = Country & {
  isFavor: boolean;
};
