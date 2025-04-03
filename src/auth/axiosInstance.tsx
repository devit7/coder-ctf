import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Sesuaikan dengan URL API Laravel
});

// Interceptor untuk menyisipkan token ke header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Intercept setiap response untuk memeriksa token kadaluwarsa
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response && error.response.message === "Unauthenticated.") {
          localStorage.removeItem("token");
          console.log("Token kadaluwarsa atau tidak valid. Redirecting to login...");
          window.location.href = "/login"; // Redirect jika token tidak valid
      }
      return Promise.reject(error);
  }
);