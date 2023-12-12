import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserInfoData() {
    const { kon_id } = useParams();

    const [displayText, setDisplayText] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/info/saveData/${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                setDisplayText(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [kon_id]);

    console.log('displayText', displayText);

    return <div>{displayText.email}</div>;
}

export default UserInfoData;
