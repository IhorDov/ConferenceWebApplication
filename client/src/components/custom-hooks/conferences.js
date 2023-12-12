import { useState, useEffect } from 'react';

//It is self made custom hook
export const useConference = () => {
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getData/userForside')
            .then((response) => response.json())
            .then((data) => {
                setConferences(data);
            })
            .catch((error) => {
                console.error('Error fetching conferences:', error);
            });
    }, []);

    return conferences;
};
