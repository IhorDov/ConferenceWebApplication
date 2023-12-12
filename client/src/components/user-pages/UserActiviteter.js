import { Link } from 'react-router-dom';
import { useConference } from '../custom-hooks/conferences';
import UserHeader from './UserHeader';
import Footer from '../common-pages/Footer';
import ConferenceButton from '../UI/ConferenceButton';

function UserActiviteter() {
    const conferences = useConference();

    return (
        <>
            <UserHeader />
            {
                <div className="w3-container w3-content w3-center">
                    <div className="dropdown">
                        <ConferenceButton />
                        <div className="dropdown-content">
                            {conferences.map((conferences) => (
                                <Link
                                    key={conferences.kon_id}
                                    to={`/user-ak/${conferences.kon_id}`}
                                >
                                    {conferences.navn}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    );
}

export default UserActiviteter;
