import axios, { AxiosResponse } from "axios";

export const searchMeals = async ({ query }: { query: string }) => {
  const url: string= `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response: AxiosResponse<any, any> = await axios.get(url);
  return response.data.meals;
};