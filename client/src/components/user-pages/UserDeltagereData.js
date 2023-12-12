import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';
import UserDynamicTable from './UserDynamicTable';
import TeacherInfoPage from '../common-pages/TeachersInfoPage';
import { useActivity } from '../custom-hooks/activities';

function UserDeltagereData() {
    //Obtain konference id
    const { kon_id } = useParams();
    // const activities = useActivity();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deltagereData, setDeltagereData] = useState([]);

    useEffect(() => {
        if (kon_id !== null) {
            fetch(`http://localhost:5000/par/users/${kon_id}`, {
                method: 'GET',
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('data from UserDeltagere: ', data);

                    setDeltagereData(data);
                    setIsLoading(false);

                    console.log(
                        'deltagereData from UserDeltagere: ',
                        deltagereData
                    );
                })
                .catch((error) => {
                    console.log('Test Error:', error.message);
                    setError(error);
                })
                .finally(() => setIsLoading(false));
        }
    }, [kon_id]);

    return (
        <div>
            <UserHeader />
            <div>
                <h1>Deltagere data:</h1>
                {isLoading ? (
                    <div>
                        <h1>{`Denne konference har ingen deltagere`}</h1>
                        <TeacherInfoPage />
                    </div>
                ) : (
                    <UserDynamicTable data={deltagereData} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default UserDeltagereData;
