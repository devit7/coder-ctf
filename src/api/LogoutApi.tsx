import { axiosInstance } from "@/auth/axiosInstance";

export const logoutApi = async () => {
    try {
        const response = await axiosInstance.post("/logout");
        return response.data;
    } catch (error) {
        console.error("Error saat logout:", error);
        throw error; // Pastikan error tetap ditangkap
    }
};
