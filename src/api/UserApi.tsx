import { axiosInstance } from "@/auth/axiosInstance";

export const getUsersList = async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
}

export const getUserByToken = async () => {
    const response = await axiosInstance.get("/me");
    return response.data;
}

export const tokenAuthChek = async () => {
    const response = await axiosInstance.get("/isAuthenticated");
    return response.data;
}

export const getAllCountCategorySolvedByUser = async () => {
    const response = await axiosInstance.get("/user/stats");
    return response.data;
}

export const getUserProfile = async () => {
    const response = await axiosInstance.get("/user/profile");
    return response.data;
}


export const getUserAuth = async () => {
    const response = await axiosInstance.get("/user/auth");
    return response.data;
}