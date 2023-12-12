import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../CSS/user-login.css';
import adminRegisterValidation from '../../inputValidation/adminRegisterValidation';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function AdminNewPassword() {
    const { adm_email } = useParams();

    const [values, setValues] = useState({
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
            if (errors.password === '' && errors.admin_key === '') {
                await axios.put(
                    `http://localhost:5000/admins/newpas/${adm_email}`,
                    values
                );

                console.log(values);

                navigate('/admins/login');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="password">
                    <p>New Password</p>
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
            </div>
            <div>
                <Button
                    type="submit"
                    title="Press this button to change your password"
                >
                    Change Old Password
                </Button>
            </div>
            <div className="container">
                <span className="psw">
                    <Link to="/admins/register">Ny Admin?</Link>
                </span>
            </div>
        </form>
    );
}
