import { axiosInstance } from "@/auth/axiosInstance";
import { useMutation } from "@tanstack/react-query";

type FlagData = {
    flag: string;
    chall_id: number;
};

export const FlagApi = async (data: FlagData) => {
    const response = await axiosInstance.post("/chall/submit", data);
    return response.data;
}

const useFlagApi = () => {
    return useMutation({
        mutationFn: FlagApi,

    })
};

export { useFlagApi };
