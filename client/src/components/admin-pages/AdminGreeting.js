import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function AdminGreeting() {
    const { currentAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    if (currentAdmin === null) {
        navigate('/admins/login');
        return <></>;
    }

    return (
        <div
            className="w3-container w3-content w3-center"
            style={{ maxWidth: '600px' }}
        >
            <h2 className="w3-wide">Velkommen {currentAdmin.name}!</h2>
        </div>
    );
}

export default AdminGreeting;
