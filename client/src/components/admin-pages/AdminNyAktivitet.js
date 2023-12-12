import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import Footer from '../common-pages/Footer';
import AdminHeader from '../common-pages/AdminHeader';

export default function AdminNyAktivitet() {
    const navigate = useNavigate();
    const { kon_id } = useParams();
    const { ak_id } = useParams();
    console.log('ak_id from AdminNyAktivitet page', ak_id);

    const [navn, setNavn] = useState('');
    const [tidspunkt, setTidspunkt] = useState('');
    const [adresse, setAdresse] = useState('');
    const [beskrivelse, setBeskrivelse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const akData = {
            navn,
            tidspunkt,
            adresse,
            beskrivelse,
        };

        const newAkData = {
            kon_id,
            navn,
            tidspunkt,
            adresse,
            beskrivelse,
        };

        if (ak_id) {
            fetch(`http://localhost:5000/aktivitet/getActivity/${ak_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(akData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Event updated successfully:', data);
                    // Handle the response from the back end here
                })
                .catch((error) => {
                    console.error('Error updating  event:', error);
                });
        } else {
            fetch(`http://localhost:5000/aktivitet/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAkData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Event created successfully:', data);
                    if (data.ak_id) {
                        const newAkId = data.ak_id;
                        navigate(`/edit_aktivitet/${newAkId}`);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    useEffect(() => {
        // Fetch existing aktivity data based on 'id' and populate fields
        fetch(`http://localhost:5000/aktivitet/getActivityId/${ak_id}`)
            .then((response) => response.json())
            .then((data) => {
                if (
                    data &&
                    data.navn &&
                    data.tidspunkt &&
                    data.adresse &&
                    data.beskrivelse
                ) {
                    console.log('data from AdminNyAktivitet: ', data);
                    setNavn(data.navn);
                    setTidspunkt(data.tidspunkt);
                    setAdresse(data.adresse);
                    setBeskrivelse(data.beskrivelse);
                } else {
                    console.error('Invalid data received:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching activity data:', error);
            });
    }, [ak_id]);

    return (
        <div>
            <AdminHeader />
            <div className="w3-container w3-content w3-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Indtast navn på aktivitet*</label>
                    <br></br>
                    <input
                        type="string"
                        id="name"
                        name="name"
                        value={navn}
                        onChange={(e) => setNavn(e.target.value)}
                        required={!ak_id}
                    ></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="date">Indtast lokation på aktivitet*</label>
                    <br></br>
                    <input
                        type="string"
                        id="location"
                        name="location"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        required={!ak_id}
                    ></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="address">
                        Indutast for aktitidsrmvitet*
                    </label>
                    <br></br>
                    <input
                        type="datetime-local"
                        id="time"
                        name="time"
                        value={tidspunkt}
                        onChange={(e) => setTidspunkt(e.target.value)}
                        required={!ak_id}
                    ></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="address">
                        Indtast beskrivelse for aktivitet
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="caption"
                        name="caption"
                        value={beskrivelse}
                        onChange={(e) => setBeskrivelse(e.target.value)}
                    ></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="address">
                        Tilføj billede til aktivitet
                    </label>
                    <br></br>
                    <input
                        type="file"
                        id="picture"
                        name="picture"
                        accept="img"
                    ></input>
                    <br></br>
                    <br></br>
                    <button className="w3-button" type="submit">
                        {ak_id ? 'Update' : 'Create'} Gem
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
