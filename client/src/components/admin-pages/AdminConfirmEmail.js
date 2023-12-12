import React from 'react';
import '../../CSS/user-login.css';
import LogoHeader from '../common-pages/LogoHeader';

function AdminConfirmEmail() {
    return (
        <form>
            <LogoHeader />
            <div>
                <label htmlFor="text">
                    <h2 className="textcontainer">
                        Please check your email and confirm registration.
                    </h2>
                </label>
            </div>
        </form>
    );
}

export default AdminConfirmEmail;
