import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//It is self made custom hook
export const useActivity = () => {
    const { kon_id } = useParams();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getData/userActivity?kon_id=${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(
                    'data from getData/userActivity/:kon_id router: ',
                    data
                );
                setActivities(data);
            })
            .catch((error) => {
                console.error('Error fetching conferences:', error);
            });
    }, [kon_id]);

    return activities;
};
