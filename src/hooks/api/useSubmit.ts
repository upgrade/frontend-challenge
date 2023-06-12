import { useMutation } from "react-query";
import axios from "axios";
import { FormData } from "./useSubmit.types";

/**
 * @typedef {import("react-query").UseMutationResult} UseMutationResult
 */

/**
 * @description This hook is responsible to mutate the submit API and return the useQuery abstraction.
 * @returns {UseMutationResult}
 */
export const useSubmit = ({ data: formData }: FormData) => {
  return useMutation("submit", async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/submit",
      {
        ...formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  });
};
