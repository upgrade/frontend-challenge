import ky from "ky";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001/api";

export default ky.create({
  headers: {},
  prefixUrl: API_BASE_URL,
});
