import { useState } from 'react';
import AdminSideBar from '../admin-pages/AdminSideBar';

function AdminHeader() {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div onClick={handleViewSidebar}>
            <nav className="w3-bar w3-red">
                <div style={{ cursor: 'pointer' }} onClick={handleViewSidebar}>
                    &#9776;
                    <AdminSideBar
                        isOpen={sidebarOpen}
                        toggleSidebar={handleViewSidebar}
                    />
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
                </div>
            </nav>
        </div>
    );
}

export default AdminHeader;
