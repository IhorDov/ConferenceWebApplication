import { Link } from 'react-router-dom';
import { useConference } from '../custom-hooks/conferences.js';
import ConferenceButton from '../UI/ConferenceButton.js';
import ShowHideButton from '../../Extra/ShowHideButton.js';
import UserHeader from './UserHeader.js';
import Footer from '../common-pages/Footer.js';

export default function UserInfo() {
    const conferences = useConference();

    return (
        <div>
            <UserHeader />
            {
                <div className="w3-container w3-content w3-center">
                    <div className="dropdown">
                        <ConferenceButton />
                        <div className="dropdown-content">
                            {conferences.map((conferences) => (
                                <Link
                                    key={conferences.kon_id}
                                    to={`/users_info_data/${conferences.kon_id}`}
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
