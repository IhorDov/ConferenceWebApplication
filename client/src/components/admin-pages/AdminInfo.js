import { Link } from 'react-router-dom';
import { useConference } from '../custom-hooks/conferences';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';
import AdminHeader from '../common-pages/AdminHeader';
import Footer from '../common-pages/Footer';
import ConferenceButton from '../UI/ConferenceButton';

export default function AdminInfo() {
    const conferences = useConference();

    return (
        <div>
            <AdminHeader />
            {
                <div className="w3-container w3-content w3-center">
                    <div className="dropdown">
                        <ConferenceButton />
                        <div className="dropdown-content">
                            {conferences.map((conferences) => (
                                <Link
                                    key={conferences.kon_id}
                                    to={`/admins_info_data/${conferences.kon_id}`}
                                >
                                    {conferences.navn}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </div>
    );
}
