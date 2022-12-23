import ky from "ky";

const loader = async (): Promise<string[]> => {
  const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001/api";

  return await ky.get(`${API_BASE_URL}/colors`).json();
};

export default loader;
