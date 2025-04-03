
import axios from "axios";


export const getVerifyEmail = async (url:string) => {
    const response = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return response.data;
}