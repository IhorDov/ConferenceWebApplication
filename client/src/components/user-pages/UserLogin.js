import { React, useState, useContext, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../../CSS/user-login.css';
import { AuthUserContext } from '../../context/AuthUserContext';
import adminLoginValidation from '../../inputValidation/adminLoginValidation';
import Footer from '../common-pages/Footer';
import Button from '../UI/Button';
import Input from '../UI/Input';
import LogoHeader from '../common-pages/LogoHeader';
import styles from './UserLogin.module.css';

export default function UserLogin() {
    const { kon_id } = useParams();
    console.log('kon_id from UserLogin frontent: ', kon_id);
    const location = useLocation();
    console.log(location);

    const [values, setValues] = useState({
        email: '',
        kon_id,
    });

    const { login } = useContext(AuthUserContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); //front-end error
    const [err, setError] = useState(null); //error from back-end

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: [event.target.value],
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(adminLoginValidation(values));

        try {
            await login(values);
            navigate(`/users/forsiden`);
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
    };

    useEffect(() => {
        if (kon_id === undefined) {
            navigate('.');
        }
    }, [kon_id, navigate]);

    return (
        <div className={styles.div_size}>
            <LogoHeader />
            <form className={styles.form_size} onSubmit={handleSubmit}>
                <label htmlFor="uname">
                    <p>Email</p>
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        onChange={handleInput}
                    ></Input>
                    {errors.email && (
                        <span className="error-color">{errors.email}</span>
                    )}
                </label>
                <div>
                    <Button
                        type="submit"
                        title="Du som deltager kan logge dig ind"
                    >
                        Login
                    </Button>
                    {err && <p className="error-color">{err}</p>}
                </div>
            </form>
            <Footer />
        </div>
    );
}
