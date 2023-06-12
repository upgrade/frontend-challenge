import { useQuery } from "react-query";
import axios from "axios";

/**
 * @typedef {import("react-query").UseQueryResult} UseQueryResult
 */

/**
 * @description This hook is responsible to call our colors API and return the useQuery abstraction.
 * @returns {UseQueryResult}
 */
export const useColors = () => {
  return useQuery("colors", async () => {
    const { data } = await axios.get("http://localhost:3001/api/colors");
    return data;
  });
};
