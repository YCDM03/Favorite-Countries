import axios from "axios";
import { Country } from "../type/Country";

export const getCountries = async (): Promise<Country[]> => {
  const { data } = await axios.get<Country[]>(
    "https://restcountries.com/v3.1/all"
  );
  return data;
};
