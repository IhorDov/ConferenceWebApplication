import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Plus from '../../Pictures/plus.png';
import DropdownBtn from '../../Pictures/dropdownbtn.png';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import Footer from '../common-pages/Footer';
import AdminHeader from '../common-pages/AdminHeader';

function AdminAktiviteterData() {
    const { kon_id } = useParams(); // Get the conference ID from the URL
    const [aktivitys, setAktivity] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getData/getActivity?kon_id=${kon_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data from AdminAktiviteter', data); // Log the data to the console
                setAktivity(data);
            })
            .catch((error) => {
                console.error('Error fetching aktivitys:', error);
            });
    }, [kon_id]);

    return (
        <div>
            <AdminHeader />
            <div className="w3-container w3-content w3-center">
                <button className="w3-button">
                    <Link to={`/new_aktivitet/${kon_id}`}>
                        Opret ny aktivitet
                    </Link>
                    <img src={Plus} alt="" style={{ width: '2%' }}></img>
                </button>
            </div>
            <div className="w3-container w3-content w3-center">
                <div className="dropdown">
                    <button className="dropbtn">
                        Vælg aktivitet{' '}
                        <img
                            src={DropdownBtn}
                            alt=""
                            style={{ width: '3%' }}
                        ></img>
                    </button>
                    <div className="dropdown-content">
                        {aktivitys.map((aktivitys) => (
                            <Link
                                key={aktivitys.ak_id}
                                to={`/edit_aktivitet/${aktivitys.ak_id}`}
                            >
                                {aktivitys.navn}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminAktiviteterData;
