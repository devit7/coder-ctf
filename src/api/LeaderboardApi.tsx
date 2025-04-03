import { axiosInstance } from '../auth/axiosInstance';

export const getLeaderboard = async () => {
    const response = await axiosInstance.get('/leaderboard');
    return response.data;
}