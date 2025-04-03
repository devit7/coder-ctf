import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from '../auth/axiosInstance';

type RegisterData = {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
    institution: string;
};

const RegisterApi = async (data: RegisterData) => {
    const response = await axiosInstance.post("/register", data);
    return response.data;
};

const useRegisterApi = () => {
    return useMutation({
        mutationFn: RegisterApi,

    })
};

export { useRegisterApi };
