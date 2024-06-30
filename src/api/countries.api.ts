import { countriesInstance } from "./api";
import { Country } from "../types/Country";

export const CountriesAPI = {
  getCountries: async (): Promise<Country[]> => {
    const { data } = await countriesInstance.get<Country[]>("all");
    return data;
  },
};
