import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthUserContext';
import '../../CSS/user-login.css';
import sidebarTextSize from '../../CSS/New-styles.module.css';

const UserSideBar = (props) => {
    const sidebarClass = props.isOpen ? 'sidebar open' : 'sidebar';
    const { kon_id } = useParams();
    const { currentUser, logout } = useContext(AuthUserContext);

    return (
        <div>
            <div className={sidebarClass}>
                <div>
                    <Link to="/users/forsiden">
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Forside
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link to="/users/konference">
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Vælg konference
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link key={kon_id} to={`/users/aktiviteter`}>
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Aktiviteter
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link key={kon_id} to={`/users/delt`}>
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Deltagere
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link to="/users_info/:kon_id">
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Information
                        </div>
                    </Link>
                    {currentUser ? (
                        <div onClick={logout}>
                            <Link to="/users/tak">
                                <div
                                    className={sidebarTextSize.sidebarTextSize}
                                >
                                    Log af
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/users/tak">
                                <div
                                    className={sidebarTextSize.sidebarTextSize}
                                >
                                    Login
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default UserSideBar;
