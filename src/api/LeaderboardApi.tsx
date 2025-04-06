import { axiosInstance } from '../auth/axiosInstance';

export const getLeaderboard = async () => {
    const response = await axiosInstance.get('/leaderboard');
    return response.data;
}

export const graphAllLeaderboardTop10 = async () => {
    const response = await axiosInstance.get('/leaderboard/linechart');
    return response.data;
}