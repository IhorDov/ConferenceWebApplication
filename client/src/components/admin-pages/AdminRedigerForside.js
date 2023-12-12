import React, { useState } from 'react';
import AdminSideBar from '../../Extra/AdminSideBar';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import Footer from '../common-pages/Footer';
import AdminHeader from '../common-pages/AdminHeader';

export default function AdminEditHome() {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    return (
        <div>
            <AdminHeader />
            <div className="w3-container w3-content w3-center">
                <label for="name">Indsæt billeder til slideshow</label>
                <br></br>
                <input
                    type="file"
                    id="picture"
                    name="picture"
                    accept="img"
                ></input>
                <br></br>
                <br></br>
                <label for="welcome">Ændre velkomst besked</label>
                <br></br>
                <input type="text" id="welcome" name="welcome"></input>
                <br></br>
                <br></br>
                <label for="info">Indsæt tekst/information</label>
                <br></br>
                <input type="text" id="info" name="info"></input>
                <br></br>
                <br></br>
                <button className="w3-button">Gem</button>
            </div>
            <Footer />
        </div>
    );
}
