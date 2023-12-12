import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthUserContext } from '../context/AuthUserContext';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const sidebarClass = props.isOpen ? 'sidebar open' : 'sidebar';
    const { currentUser, logout } = useContext(AuthUserContext);
    const { kon_id } = useParams();

    return (
        <div className={sidebarClass}>
            <div>
                <a href="adminRedigerForside.js">Forside</a>
            </div>
            <hr></hr>
            <div>
                <a href="adminInfo.js">Information</a>
            </div>
            <hr></hr>
            <div>
                <Link to={`/users/program/${kon_id}`}>program</Link>
            </div>
            <hr></hr>
            <div>
                <a href="edpar?">Deltagere</a>
            </div>
            <div>
                {currentUser ? (
                    <p onClick={logout}>
                        <Link to="/users/tak">Log af</Link>
                    </p>
                ) : (
                    <div>
                        <Link to="/users/login">Login</Link>
                    </div>
                )}
            </div>
            <hr></hr>
        </div>
    );
};
export default SideBar;
