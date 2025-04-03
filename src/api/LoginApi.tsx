import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from '../auth/axiosInstance';

type LoginData = {
    email: string;
    password: string;
};

const LoginApi = async (data: LoginData) => {
    const response = await axiosInstance.post("/login", data);
    return response.data;
};

const useLoginApi = () => {
    return useMutation({
        mutationFn: LoginApi,

    })
};

export { useLoginApi };
