import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import AdminHeader from '../common-pages/AdminHeader';
import Footer from '../common-pages/Footer';

export default function AdminEditConference() {
    const navigate = useNavigate();
    const { kon_id } = useParams(); // Get the conference ID from the URL

    const [navn, setName] = useState('');
    const [dato, setDate] = useState('');
    const [adresse, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventData = {
            navn,
            dato,
            adresse,
        };

        if (kon_id) {
            fetch(`http://localhost:5000/events/${kon_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
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
            fetch('http://localhost:5000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Event created successfully:', data);
                    const newKonId = data.kon_id;
                    navigate(`/edit-conference/${newKonId}`);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    useEffect(() => {
        // Fetch existing conference data based on 'id' and populate fields
        fetch(`http://localhost:5000/events/${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.name && data.date && data.address) {
                    // console.log(data);
                    setName(data.name);
                    setDate(data.date);
                    setAddress(data.address);
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
            <AdminHeader />
            <div className="w3-container w3-content w3-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Indtast navn på konference</label>
                    <br />
                    <input
                        type="string"
                        id="name"
                        name="name"
                        value={navn}
                        onChange={(e) => setName(e.target.value)}
                        required={!kon_id}
                    />
                    <br />
                    <br />
                    <label htmlFor="date">
                        Indtast start dato for konference
                    </label>
                    <br />
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={dato}
                        onChange={(e) => setDate(e.target.value)}
                        required={!kon_id}
                    />
                    <br />
                    <br />
                    <label htmlFor="enddate">
                        Indtast slut dato for konference
                    </label>
                    <br />
                    <input
                        type="date"
                        id="enddate"
                        name="enddate"
                        value={dato}
                        onChange={(e) => setDate(e.target.value)}
                        required={!kon_id}
                    />
                    <br />
                    <br />
                    <label htmlFor="address">
                        Indtast addresse for konference
                    </label>
                    <br />
                    <input
                        type="string"
                        id="address"
                        name="address"
                        value={adresse}
                        onChange={(e) => setAddress(e.target.value)}
                        required={!kon_id}
                    />
                    <br />
                    <br />
                    <button className="w3-button" type="submit">
                        {kon_id ? 'Update' : 'Create'} konference
                    </button>
                    {}
                </form>
            </div>
            <Footer />
        </div>
    );
}
