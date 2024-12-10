import axios from "axios";
const api = axios.create({
  baseURL: "https://api.unsplash.com",
});

api.defaults.headers.common["Authorization"] =
  "Client-ID 06wciDzaSkXe5Y-MhFfLuRc4UidNf4Q_svjOBl3K1Zc";

export default api;
