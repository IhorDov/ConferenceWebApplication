import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import AdminHeader from '../AdminHeader';
import AdminGreeting from './AdminGreeting';
import AdminNyKonference from './AdminNyKonference';
import ConferenceButton from '../UI/ConferenceButton';

export default function AdminForside() {
    // const { kon_id } = useParams(); // Get the conference ID from the URL

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getData/adminForside')
            .then((response) => response.json())
            .then((data) => {
                setConferences(data);
            })
            .catch((error) => {
                console.error('Error fetching conferences:', error);
            });
    }, []);

    return (
        <>
            <AdminHeader />
            <div>
                <AdminGreeting />
                <AdminNyKonference />
                {
                    <div className="w3-container w3-content w3-center">
                        <div className="dropdown">
                            <ConferenceButton />
                            <div className="dropdown-content">
                                {conferences.map((conferences) => (
                                    <Link
                                        key={conferences.kon_id}
                                        to={`/edit-conference/${conferences.kon_id}`}
                                    >
                                        {conferences.navn}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                {/* <NewFooter /> */}
            </div>
        </>
    );
}
