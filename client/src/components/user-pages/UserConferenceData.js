import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';
// import { useConference } from './conferences';

function UserConferenceData() {
    const { kon_id } = useParams(); // Get the conference ID from the URL

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
    }, [kon_id]);

    return (
        <div>
            <UserHeader />
            <div className="w3-container w3-content w3-center">
                <form>
                    <label htmlFor="name">Navn af konferencen</label>
                    <br />
                    <h1>{conferenceData.navn}</h1>
                    <br />
                    <br />
                    <label htmlFor="date">Start dato af konferencen</label>
                    <br />
                    <h2>{conferenceData.dato}</h2>
                    <br />
                    <br />
                    <label htmlFor="enddate">Slut dato af konferencen</label>
                    <br />
                    <h2>{conferenceData.dato}</h2>
                    <br />
                    <br />
                    <label htmlFor="address">Konferences addresse</label>
                    <br />
                    <h2>{conferenceData.adresse}</h2>
                    <br />
                    <br />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default UserConferenceData;
