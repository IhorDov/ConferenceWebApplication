import avatar from '../assets/images/avatar.png';
import dania_logo from '../assets/images/dania_logo.jpg';
import { useState } from 'react';
import AdminSideBar from '../../Extra/AdminSideBar';

function NewHeader() {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div onClick={handleViewSidebar}>
            <nav className="w3-bar w3-red">
                <span height="20">
                    <div>
                        &#9776;
                        <AdminSideBar
                            isOpen={sidebarOpen}
                            toggleSidebar={handleViewSidebar}
                        />
                    </div>
                    <div>
                        <img src={avatar} alt="avatar" height="50" />
                        viho@eadania.dk
                    </div>
                    <div>
                        <img
                            className="head-logo"
                            src={dania_logo}
                            alt="dania_logo"
                            height="50"
                        />
                    </div>
                </span>
            </nav>
        </div>
    );
}

export default NewHeader;
