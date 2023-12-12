import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../CSS/user-login.css';
import sidebarTextSize from '../../CSS/New-styles.module.css';

const AdminSideBar = (props) => {
    const sidebarClass = props.isOpen ? 'sidebar open' : 'sidebar';
    const { kon_id } = useParams();
    console.log('kon_id from AdminSideBar: ', kon_id);
    const { currentAdmin, logout } = useContext(AuthContext);

    // //Aded that state to avoid dowload some admin aktivities before get kon_id
    // const [konIdStatus, setKonIdStatus] = useState(false);

    // useEffect(() => {
    //     if (kon_id !== undefined && kon_id !== null) {
    //         setKonIdStatus(true);
    //     }
    // }, [kon_id]);

    return (
        <div>
            <div className={sidebarClass}>
                <div>
                    <Link to="/admins/forsiden">
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Forside
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link key={kon_id} to={`/aktivitet/${kon_id}`}>
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Aktiviteter
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link key={kon_id} to={`/admins_delt/${kon_id}`}>
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Deltagere
                        </div>
                    </Link>
                </div>
                <hr></hr>
                <div>
                    <Link to="/admins_info/:kon_id">
                        <div className={sidebarTextSize.sidebarTextSize}>
                            Information
                        </div>
                    </Link>
                </div>
                <hr></hr>
                {
                    <div>
                        <Link to="/program">
                            <div className={sidebarTextSize.sidebarTextSize}>
                                Program
                            </div>
                        </Link>
                    </div>
                }
                <div>
                    {currentAdmin ? (
                        <div onClick={logout}>
                            <Link to="/">
                                <div
                                    className={sidebarTextSize.sidebarTextSize}
                                >
                                    Log af
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/admins/login">
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
export default AdminSideBar;
