import React from 'react';
import SocialLinks from '../Navigation/SocialLinks';
import "./Footer.scss";



const socialNetData = [
    {
        id: 1,
        name: "WhatsApp",
        img: "https://cdn-icons-png.flaticon.com/512/174/174879.png",
        link: " https://wa.me/+918999677343",
    },
    {
        id: 2,
        name: "Instagram",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png",
        link: "https://www.instagram.com/vikesh_g9/",
    },
    {
        id: 3,
        name: "Youtube",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png",
        link: "https://www.youtube.com/@nayan1915",
    },
];

const Footer = () => {
    return (
        <div className='footer'>
            <div className="terms_condition">
                <p>Terms And Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Preference</p>
                <p><b>Updated by 03/2023</b></p>
            </div>
        </div>
    )
}

export default Footer;


