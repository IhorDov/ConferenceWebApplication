import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../CSS/user-login.css';
import adminRegisterValidation from '../../inputValidation/adminRegisterValidation';
import Button from '../UI/Button';
import Input from '../UI/Input';
import LogoHeader from '../common-pages/LogoHeader';

export default function AdminReset() {
    const [values, setValues] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(adminRegisterValidation(values));

        try {
            if (errors.email === '') {
                await axios.post('http://localhost:5000/admins/reset', values);

                navigate('/admins/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <LogoHeader />
            <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        <p>Email</p>
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleInput}
                        />
                        {errors.email && (
                            <span className="error-color">{errors.email}</span>
                        )}
                    </label>
                </div>
                <div>
                    <Button
                        type="submit"
                        title="Press this button to send a new password to choosen email"
                    >
                        Send
                    </Button>
                </div>

                <div className="ad-footer-desighn">
                    <span style={{ paddingRight: '40px' }} className="psw">
                        <Link to="/admins/register">Ny Admin?</Link>
                    </span>
                </div>
            </form>
        </>
    );
}
