import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../CSS/user-login.css';
import LogoHeader from '../common-pages/LogoHeader';
import adminLoginValidation from '../../inputValidation/adminLoginValidation';
import { AuthContext } from '../../context/AuthContext';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [err, setError] = useState(null);

    const { login } = useContext(AuthContext);

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
            if (errors.email === '' && errors.password === '') {
                // await axios.post('http://localhost:5000/admins/login', values);

                await login(values);
                navigate('/admins/forsiden');
            }
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
    };

    return (
        <div className="screen-size">
            <form onSubmit={handleSubmit}>
                <div>
                    <LogoHeader />
                </div>
                <div className="logo admin-body">
                    <div>
                        <label htmlFor="email">
                            <p>Email</p>
                        </label>
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleInput}
                        />
                        <div>
                            {errors.email && (
                                <span className="error-color">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>
                    <label htmlFor="password">
                        <p>Password</p>
                    </label>
                    <Input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleInput}
                    />
                    <div>
                        {errors.password && (
                            <span className="error-color">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="login-size">
                        <Button title="Admin login">Login</Button>
                        {err && <p className="error-color">{err}</p>}
                    </div>
                    <div className="ad-footer-desighn">
                        <div className="admin-footer logo">
                            <span>
                                <Link to="/admins/reset">
                                    Glemt <div>kodeord?</div>
                                </Link>
                            </span>
                            <br></br>
                            <span>
                                <Link to="/admins/register">Ny Admin?</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
