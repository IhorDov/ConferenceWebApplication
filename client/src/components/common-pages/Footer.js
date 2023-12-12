import '../../CSS/user-login.css';

function Footer() {
    return (
        <>
            <link
                rel="stylesheet"
                typeof="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
            ></link>
            <footer className="w3-container w3-padding-64 w3-center w3-red w3-xlarge">
                <a href="https://www.facebook.com/eadania/">
                    <i className="fa fa-facebook-official"></i>{' '}
                </a>
                <a href="https://twitter.com/erhvervsakademi">
                    <i className="fa fa-twitter"></i>{' '}
                </a>
                <a href="https://www.instagram.com/eadania/">
                    <i className="fa fa-instagram"></i>{' '}
                </a>
                <a href="https://www.youtube.com/channel/UCNAfOEddlGuL8kX-2RwUKrw?view_as=subscriber">
                    <i className="fa fa-youtube"></i>{' '}
                </a>
                <a href="https://www.linkedin.com/school/erhvervsakademi-dania/?originalSubdomain=dk">
                    <i className="fa fa-linkedin"></i>{' '}
                </a>
            </footer>
        </>
    );
}

export default Footer;
