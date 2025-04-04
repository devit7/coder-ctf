import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";



interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
       // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        return !!token; // Return true if token exists, false otherwise
    });
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axiosInstance.get("/me") // Endpoint baru untuk mendapatkan data user
                .then((response) => {
                    setIsAuthenticated(true);
                    //console.log("User data:", response.data.data.user.name); // Log user data
                    setUser(response.data.data.user.username); // Simpan data user ke state
                })
                .catch(() => {
                    //console.error("Error fetching user data:", data);
                    localStorage.removeItem("token");
                    console.log("Token kadaluwarsa atau tidak valid. Redirecting to login...");
                    setIsAuthenticated(false);
                    setUser(null);
                });
        }
       
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
