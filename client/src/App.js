import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminEditConference from './components/admin-pages/AdminRedigerKonference';
import UserLogin from './components/user-pages/UserLogin';
import AdminDeltagere from './components/admin-pages/AdminDeltagere';
import AdminDeltagereData from './components/admin-pages/AdminDeltagereData';
import AdminAktiviteter from './components/admin-pages/AdminAktiviteter';
import AdminAktiviteterData from './components/admin-pages/AdminAktiviteterData';
import AdminNyAktivitet from './components/admin-pages/AdminNyAktivitet';
import AdminRegisration from './components/admin-pages/AdminRegisration';
import AdminLogin from './components/admin-pages/AdminLogin';
import UserProgram from './components/user-pages/UserProgram';
import AdminInfo from './components/admin-pages/AdminInfo';
import AdminReset from './components/admin-pages/AdminReset';
import AdminConfirmEmail from './components/admin-pages/AdminConfirmEmail';
import UserForside from './components/user-pages/UserForside';
import ThankYou from './components/user-pages/ThankYou';
import AdminNewPassword from './components/admin-pages/AdminNewPassword';
import Container from './components/common-pages/Container';
import NewAdminForside from './components/admin-pages/NewAdminForside';
import UserActiviteter from './components/user-pages/UserActiviteter';
import UserConference from './components/user-pages/UserConference';
import UserConferenceData from './components/user-pages/UserConferenceData';
import UserDeltagere from './components/user-pages/UserDeltagere';
import UserDeltagereData from './components/user-pages/UserDeltagereData';
import UserActiviteterData from './components/user-pages/UserActiviteterData';
import UserInfo from './components/user-pages/UserInfo';
import UserInfoData from './components/user-pages/UserInfoData';
import AdminInfoData from './components/admin-pages/AdminInfoData';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<AdminLogin />} />
                    <Route path="/" element={<AdminLogin />} />
                    <Route
                        path="/admins_delt/:kon_id"
                        element={<AdminDeltagere />}
                    />
                    <Route
                        path="/edpar/:kon_id"
                        element={<AdminDeltagereData />}
                    />
                    <Route
                        path="/users/login/:kon_id"
                        element={<UserLogin />}
                    />
                    <Route
                        exact
                        path="/make-conference"
                        element={<AdminEditConference />}
                    />
                    <Route
                        path="/edit-conference/:kon_id"
                        element={<AdminEditConference />}
                    />
                    <Route
                        path="/aktivitet/:kon_id"
                        element={<AdminAktiviteter />}
                    />
                    <Route
                        path="/aktivitet_data/:kon_id"
                        element={<AdminAktiviteterData />}
                    />
                    <Route
                        path="/edit_aktivitet/:ak_id"
                        element={<AdminNyAktivitet />}
                    />
                    <Route
                        path="/new_aktivitet/:kon_id"
                        element={<AdminNyAktivitet />}
                    />
                    <Route
                        path="/admins/forsiden"
                        element={
                            <Container>
                                <NewAdminForside />
                            </Container>
                        }
                    />
                    <Route
                        path="/users/program/:kon_id"
                        element={<UserProgram />}
                    />
                    <Route
                        path="/admins_info/:kon_id"
                        element={<AdminInfo />}
                    />
                    <Route
                        path="/admins_info_data/:kon_id"
                        element={<AdminInfoData />}
                    />
                    <Route path="/admins/login" element={<AdminLogin />} />
                    <Route
                        path="/admins/register"
                        element={<AdminRegisration />}
                    />
                    <Route path="/admins/reset" element={<AdminReset />} />
                    <Route
                        path="/admins/confirm-email"
                        element={<AdminConfirmEmail />}
                    />
                    <Route path="/users/forsiden" element={<UserForside />} />
                    <Route path="/users/tak" element={<ThankYou />} />
                    <Route
                        path="/admins/newpas/:adm_email"
                        element={<AdminNewPassword />}
                    />
                    <Route
                        path="/users/konference"
                        element={<UserConference />}
                    />
                    <Route
                        path="/user-conference/:kon_id"
                        element={<UserConferenceData />}
                    />
                    <Route path="/users/delt" element={<UserDeltagere />} />
                    <Route
                        path="/user-delt/:kon_id"
                        element={<UserDeltagereData />}
                    />
                    <Route
                        path="/users/aktiviteter"
                        element={<UserActiviteter />}
                    />
                    <Route
                        path="/user-ak/:kon_id"
                        element={<UserActiviteterData />}
                    />
                    <Route path="/users_info/:kon_id" element={<UserInfo />} />
                    <Route
                        path="/users_info_data/:kon_id"
                        element={<UserInfoData />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
