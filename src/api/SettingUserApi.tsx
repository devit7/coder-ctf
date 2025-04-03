import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from '../auth/axiosInstance';

type SettingUserData = {
    username: string;
    institution: string;
    bio: string;
};

const SettingUser = async (data: SettingUserData) => {
    const response = await axiosInstance.put("/user/update", data);
    return response.data;
}

const useSettingUser = () => {
    return useMutation({
        mutationFn: SettingUser,

    })
};

export { useSettingUser };
