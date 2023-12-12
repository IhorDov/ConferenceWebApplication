import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentAdmin, setCurrentAdmin] = useState(
        JSON.parse(localStorage.getItem('admin')) || null
    );

    const login = async (inputs) => {
        const response = await axios.post(
            'http://localhost:5000/admins/login',
            inputs
        );
        setCurrentAdmin(response.data);
    };

    const logout = async (inputs) => {
        await axios.post('http://localhost:5000/admins/logout');
        setCurrentAdmin(null);
    };

    useEffect(() => {
        localStorage.setItem('admin', JSON.stringify(currentAdmin));
    }, [currentAdmin]);

    return (
        <AuthContext.Provider value={{ currentAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
