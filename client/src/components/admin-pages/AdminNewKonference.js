import { Link } from 'react-router-dom';
import Plus from '../../Pictures/plus.png';

function AdminNewKonference() {
    return (
        <div className="w3-container w3-content w3-center">
            <button className="w3-button">
                <Link to={'/make-conference/'}>Opret ny konference</Link>
                <img src={Plus} alt="" style={{ width: '2%' }}></img>
            </button>
        </div>
    );
}

export default AdminNewKonference;
