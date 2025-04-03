import { axiosInstance } from '../auth/axiosInstance';

export const getChallList = async () => {
    const response = await axiosInstance.get("/chall/list");
    return response.data;
}

export const getSubmissionsByChallId = async (id: number) => {
    const response = await axiosInstance.get(`/chall/submissions/${id}`);
    return response.data;
}

export const getCategories = async () => {
    const response = await axiosInstance.get("/chall/categories");
    return response.data;
}