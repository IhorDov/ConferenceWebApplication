import React from 'react';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import linkedin from '../../assets/images/linkedin.png';

export default function NewFooter() {
    return (
        <footer className="ad-footer-position ">
            <div className="admin-footer">
                <a href="https://www.facebook.com/eadania/">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://twitter.com/erhvervsakademi">
                    <img src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com/eadania/">
                    <img src={instagram} alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCNAfOEddlGuL8kX-2RwUKrw?view_as=subscriber">
                    <img src={youtube} alt="" />
                </a>
                <a href="https://www.linkedin.com/school/erhvervsakademi-dania/?originalSubdomain=dk">
                    <img src={linkedin} alt="" />
                </a>
            </div>
        </footer>
    );
}
