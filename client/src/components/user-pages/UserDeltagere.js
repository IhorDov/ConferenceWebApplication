import { Link } from 'react-router-dom';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';
import { useConference } from '../custom-hooks/conferences';
import ConferenceButton from '../UI/ConferenceButton';

export default function UserDeltagere() {
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
                                    to={`/user-delt/${conferences.kon_id}`}
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
