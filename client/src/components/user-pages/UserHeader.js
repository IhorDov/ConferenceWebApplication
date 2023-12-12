import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSideBar from './UserSideBar';
import React, { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';

function UserHeader() {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    const { currentUser } = useContext(AuthUserContext);
    const navigate = useNavigate();

    // Check if the value is not null before using it
    if (currentUser === null) {
        navigate('/users/login');
        return <></>;
    }

    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div onClick={handleViewSidebar}>
            <nav className="w3-bar w3-red">
                <div style={{ cursor: 'pointer' }} onClick={handleViewSidebar}>
                    &#9776;
                    <UserSideBar
                        isOpen={sidebarOpen}
                        toggleSidebar={handleViewSidebar}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                        alt="avatar"
                        style={{ width: 40 }}
                    ></img>
                    {`viho@eadania.dk \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${currentUser.Navn}`}
                    <img
                        src="https://dkea.dk/files/styles/open_graph/public/media/image/EA%20Dania_1.jpg"
                        alt="logo"
                        style={{ width: 75, float: 'right' }}
                    ></img>
                </div>
            </nav>
        </div>
    );
}

export default UserHeader;
