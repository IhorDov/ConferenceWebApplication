import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../Extra/SideBar';
import Tab from '../../Extra/Tab';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import tabs from '../../userData/userTabs';

export default function UserProgram() {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    const { kon_id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('user');

        console.log(token);

        if (token) {
            const requestOptions = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            fetch(
                `http://localhost:5000/users/getToken/${kon_id}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log('Data from fetch:', data);
                })
                .catch((error) =>
                    console.error('Error fetching user email:', error)
                );
        } else {
            console.log('no token available.');
        }
    }, [kon_id]);

    return (
        <div>
            <nav className="w3-bar w3-red">
                <span
                    style={{ font: 30, cursor: 'pointer' }}
                    onClick={handleViewSidebar}
                >
                    &#9776;
                    <SideBar
                        isOpen={sidebarOpen}
                        toggleSidebar={handleViewSidebar}
                    />
                </span>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="avatar"
                    style={{ width: 40 }}
                ></img>
                viho@eadania.dk
                <img
                    src="https://dkea.dk/files/styles/open_graph/public/media/image/EA%20Dania_1.jpg"
                    alt="logo"
                    style={{ width: 75, float: 'right' }}
                ></img>
            </nav>

            <div className="scrollable-container">
                <Tab tabs={tabs} />
            </div>
        </div>
    );
}
