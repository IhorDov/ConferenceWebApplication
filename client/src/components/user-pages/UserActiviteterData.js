import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';

function UserActiviteterData() {
    //Obtain konference id
    const { kon_id } = useParams();
    const [activitesFromConference, setActivitesFromConference] = useState([]);
    const [conferenceData, setConferenceData] = useState({
        navn: '',
        dato: '',
        adresse: '',
    });

    useEffect(() => {
        // Fetch existing conference data based on 'id' and populate fields
        fetch(`http://localhost:5000/events/${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.name && data.date && data.address) {
                    console.log('data from UserActiviteterData side', data);

                    setConferenceData({
                        ...data,
                        navn: data.name,
                        dato: data.date,
                        adresse: data.address,
                    });
                } else {
                    console.error('Invalid data received:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching conference data:', error);
            });

        fetch(`http://localhost:5000/events/userGetActByKonId/${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                // Log the data to the console
                console.log(
                    'data to setActivitesFromConference in UserActiviteterData',
                    data
                );

                if (data) {
                    setActivitesFromConference(data);
                } else {
                    return (
                        <h1>Du skal have udfyldt alt data i aktivitetet </h1>
                    );
                }
            })
            .catch((error) => {
                console.error('Error fetching aktivitys:', error.message);
            });
    }, [kon_id]);

    return (
        <>
            <UserHeader />
            {
                <div className="w3-container w3-content w3-center">
                    <h1>{`Du har valgt ${conferenceData.navn} konference`}</h1>
                    {activitesFromConference.length > 0 ? (
                        activitesFromConference.map((aktivity, index) => (
                            <div key={index}>
                                <h2>
                                    {index > 1
                                        ? `Den konference har ${aktivity.navn} aktiviteter: `
                                        : `Den konference har ${aktivity.navn} aktivitet`}
                                </h2>
                                <h3>{`Aktivitet tidspunkt: ${new Date(
                                    aktivity.tidspunkt
                                ).toLocaleString()}`}</h3>
                                <h3>{`Aktivitet adresse: ${aktivity.adresse}`}</h3>
                                <p>{`Aktivitet beskrivelse: ${aktivity.beskrivelse}`}</p>
                            </div>
                        ))
                    ) : (
                        <h3>{`Konferencen har ingen aktiviteter`}</h3>
                    )}
                    {
                        <div className="dropdown">
                            <div className="dropdown-content">
                                {activitesFromConference.map((aktivity) => (
                                    <>
                                        <h2>{`Den konference har ${aktivity.navn} aktivitet`}</h2>
                                    </>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }
            <Footer />
        </>
    );
}

export default UserActiviteterData;
