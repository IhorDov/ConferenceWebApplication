import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/images/dania_logo.png';
import '../../CSS/user-login.css';
import axios from 'axios';
import adminRegisterValidation from '../../inputValidation/adminRegisterValidation';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LogoHeader from '../common-pages/LogoHeader';

export default function AdminRegisration() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        admin_key: '',
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
            if (
                errors.name === '' &&
                errors.email === '' &&
                errors.password === '' &&
                errors.admin_key === ''
            ) {
                await axios.post(
                    'http://localhost:5000/admins/register',
                    values
                );

                navigate('/admins/confirm-email');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <LogoHeader />
            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                <span className="psw">
                    <Link to="/admins/login">Login</Link>
                </span>
            </div>
            <label htmlFor="name">
                <p>Username</p>
                <Input
                    type="text"
                    placeholder="Enter Username"
                    name="name"
                    onChange={handleInput}
                />
                {errors.name && (
                    <span className="error-color">{errors.name}</span>
                )}
            </label>
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
            <label htmlFor="password">
                <p>Password</p>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleInput}
                />
                {errors.password && (
                    <span className="error-color">{errors.password}</span>
                )}
            </label>
            <label htmlFor="admin_key">
                <p>Admin kode</p>
                <Input
                    type="password"
                    placeholder="Enter Admin Kode"
                    name="admin_key"
                    onChange={handleInput}
                />
                {errors.admin_key && (
                    <span className="error-color">{errors.admin_key}</span>
                )}
            </label>
            <div>
                <Button
                    type="submit"
                    title="Click this button to register a new admin"
                >
                    Bekræft
                </Button>
            </div>
        </form>
    );
}
