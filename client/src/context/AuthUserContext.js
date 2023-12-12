import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const AuthUserContext = createContext();

export const AuthContextUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const { kon_id } = useParams();
    // console.log('kon_id from AuthUserContex', kon_id);

    const login = async (inputs) => {
        const response = await axios.post(
            `http://localhost:5000/users/login/${kon_id}`,
            inputs
        );
        setCurrentUser(response.data);
    };

    const logout = async (inputs) => {
        await axios.post(`http://localhost:5000/users/logout/${kon_id}`);
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthUserContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthUserContext.Provider>
    );
};
