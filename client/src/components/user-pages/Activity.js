import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';

function Activity() {
    const { ak_id } = useParams();

    const [aktivities, setAktivities] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/aktivitet/userGetActId/${ak_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data from Aktivity', data); // Log the data to the console

                if (data) {
                    setAktivities(data);
                } else {
                    return (
                        <h1>Du skal have udfyldt alt data i aktivitetet </h1>
                    );
                }
            })
            .catch((error) => {
                console.error('Error fetching aktivitys:', error.message);
            });
    }, [ak_id]);

    return (
        <>
            <UserHeader />
            <div style={{ textAlign: 'center' }}>
                {aktivities.map((aktivityData, index) => (
                    <div key={index}>
                        <h2
                            key={aktivityData.navn}
                        >{`Aktivitet navn: ${aktivityData.navn}`}</h2>
                        <h3
                            key={aktivityData.tidspunkt}
                        >{`Aktivitet tidspunkt: ${aktivityData.tidspunkt}`}</h3>
                        <h3
                            key={aktivityData.adresse}
                        >{`Aktivitet adresse: ${aktivityData.adresse}`}</h3>
                        <p
                            key={aktivityData.beskrivelse}
                        >{`Aktivitet beskrivelse: ${aktivityData.beskrivelse}`}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Activity;
