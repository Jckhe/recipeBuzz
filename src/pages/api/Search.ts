import axios, { AxiosResponse } from "axios";

export const searchMeals = async (searchTerm: string) => {
  const url: string= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  const response: AxiosResponse<any, any> = await axios.get(url);
  return response.data.meals;
};