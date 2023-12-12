import Logo from '../../assets/images/dania_logo.png';
import '../../CSS/w3.css';

function LogoHeader() {
    return (
        <div className="logo-img-pos">
            <img src={Logo} className="logo-img" alt="Logo_image"></img>
        </div>
    );
}

export default LogoHeader;
