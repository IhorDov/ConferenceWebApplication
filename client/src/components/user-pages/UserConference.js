// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './UserHeader';
import NewFooter from '../common-pages/NewFooter';
import ConferenceButton from '../UI/ConferenceButton';
import { useConference } from '../custom-hooks/conferences';

function UserConference() {
    //It is using of self made custom hook
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
                                    to={`/user-conference/${conferences.kon_id}`}
                                >
                                    {conferences.navn}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <NewFooter />
        </div>
    );
}

export default UserConference;
