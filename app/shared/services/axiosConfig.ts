import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // Logica para obtener el token de acceso y usarlo como bearer token.
  return config;
});

export default axiosInstance;
