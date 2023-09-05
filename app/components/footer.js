'use client';

import Image from 'next/image';
import styled from 'styled-components';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "Onsite":
        return (onSiteLink);
      case "Offsite":
        return (offSiteLink);
      case "File":
        return (fileLink);
      default:
        return ('/');
    }
}

function getYear() {
    return new Date().getFullYear();
}

// #region Styles

const FooterCont = styled.footer`
    background-color: #091c3a;
    .wrapper {
        max-width: 1440px;
        margin: 0 auto;
        padding: 50px 8px 0px 8px;
        color: #FFFFFF;
    }
    .first-row {
        
        align-items: start;
        gap: 25px;
        @media (min-width: 516px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(5, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(6, 1fr);
        }
        img {
            margin: 0 auto;
            padding-bottom: 25px;
            @media (min-width: 516px) {
                padding-bottom: 0px;
                margin-left: 0px;
            }
        }
        ul {
            display: flex;
            grid-column: 2 / 4;
            align-items: start;
            padding-top: 25px;
        }
        h6 {
            font-family: 'stevie-sans', sans-serif;
            font-weight: 600;
            font-size: 10px;
            color: #BB9067;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding-bottom: 5px;
        }
        .footer-menu-parent {
            padding-bottom: 5px;
        }
        .footer-menu-item {
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            .footer-menu-parent {
                width: 100%;
            }
        }
        .footer-child {
            width: 100%;
            font-family: 'stevie-sans', sans-serif;
            font-size: 14px;
            padding-bottom: 10px;
            span {
                &:hover {
                    border-bottom: 2px solid #BB9067;
                    margin-bottom: -2px;
                }
            }
        }
        address {
            font-family: 'stevie-sans', sans-serif;
            font-size: 14px;
            font-style: normal;
        }
        time {
            font-family: 'stevie-sans', sans-serif;
            font-size: 14px;
            font-style: normal;
        }
        
        .inner-box {
            padding-top: 25px;
            padding-bottom: 15px;
            span {
                &:hover {
                    border-bottom: 2px solid #BB9067;
                    margin-bottom: -2px;
                }
            }
        }
        .social-box {
            display: flex;
            padding-top: 10px;
            gap: 15px;
        }
    }
    .office-title {
        padding-top: 25px;
    }
    .second-row {
        
        margin-top: 50px;
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            margin-top: -150px;
        }
        @media (min-width: 1200px) {
            margin-top: 50px;
        }
        .cta {
            grid-column: 5 / 7;
            border-bottom: 1px solid #BB9067;
            font-family: 'plantin', sans-serif;
            font-size: 24px;
            font-weight: 200;
            line-height: 1;
            @media (min-width: 992px) {
                grid-column: 4 / 7;
                font-size: 32px;
            }
        }
    }
    .copyright {
        margin-top: 150px;
        border-top: 1px solid #ffffff;
        padding: 30px 0 30px 0;
        font-size: 12px;
        padding-bottom: 200px;
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 992px) {
            padding: 30px 0 30px 0;
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        .pioneer {
            margin-top: 25px;
            @media (min-width: 1200px) {
                margin-top: 0px;
                margin-left: auto;
            }
        }
        .post-footer-menu {
            grid-column: 2 / 4;
            text-decoration: underline;
            margin-top: 25px;
            @media (min-width: 768px) {
                margin-top: 0px;
            }
            a {
                margin-bottom: 15px;
                margin-left: 0px;
                margin-right: 24px;
                @media (min-width: 768px) {
                    margin-left: 24px;
                    margin-right: 0px;
                }
                @media (min-width: 1200px) {
                    margin-right: 24px;
                    margin-left: 0px;
                }
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

// #endregion Styles

export default function Footer({ logos, footerMenu, socialMedia, phoneNumbers, emails, physicalAddresses, businessHours }) {
    
    const footerLogo = logos[0].acf.footer_logo.url;
    const street = physicalAddresses[0].values[0].street;
    const city = physicalAddresses[0].values[0].city;
    const state = physicalAddresses[0].values[0].state;
    const zip = physicalAddresses[0].values[0].zip;
    const businessHoursList = businessHours[0];
    const phone = phoneNumbers[0].values[0].value;
    const fax = phoneNumbers[0].values[1].value;
    const googleVoice = phoneNumbers[0].values[2].value;
    const email = emails[0].values[0].value;
    const facebook = socialMedia[0].acf.value_list[0].value;
    const instagram = socialMedia[0].acf.value_list[1].value;

    return (
        <FooterCont>
            <div className="wrapper">
                <div className="first-row">
                    <a href="/">
                        <Image className="logo" src={footerLogo} width={180} height={180} />
                    </a>
                    <ul>
                        {footerMenu.map((item, index) => {
                            if (item.children) {
                                return (
                                    <div key={item.id} className="footer-menu-item">
                                        <div className={`footer-menu-parent footer-menu-parent-${index}`}>
                                            <h6>{item.title}</h6>
                                        </div>
                                        {Object.keys(item.children).map((key, index) => {
                                            return (
                                                <a key={index} href={item.children[key].url} className="footer-child"><span>{item.children[key].title}</span></a>
                                            );
                                        })}
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.id}>
                                        <a href={item.url} className=""><span>{item.children[key].title}</span></a>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                    <div className="address-box">
                        <h6 className="office-title">Office</h6>
                        <address>
                            {street},<br/>
                            {city}, {state} {zip}<br/><br/>
                        </address>
                        <time>
                            Mon - Thurs: {businessHoursList.acf.mon_thurs.open} - {businessHoursList.acf.mon_thurs.close}<br/><br/>
                        </time>
                        <time>
                            Fri: {businessHoursList.acf.fri.open} - {businessHoursList.acf.fri.close}
                        </time>
                        <h6>Our firm accepts calls 24/7 - if our business hours have passed, please call our office.</h6>
                    </div>
                    <div className="phone-box">
                        <div className="inner-box">
                            <h6>Phone</h6>
                            <a href={`tel:${googleVoice}`}>
                                <span>{phone}</span>
                            </a>
                        </div>
                        <div className="inner-box">
                            <h6>fax</h6>
                            <div>
                                {fax}
                            </div>
                        </div>
                    </div>
                    <div className="email-box">
                        <div className="inner-box">
                            <h6>Email</h6>
                            <a href={`mailto:${email}`}>
                                <span>{email}</span>
                            </a>
                        </div>
                        <div className="inner-box">
                            <h6>Social</h6>
                            <div className="social-box">
                                <a href={facebook}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="white"/>
                                    </svg>
                                </a>
                                <a href={instagram}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-row">
                        <a href="/contact" className="cta">
                            Contact Us for a Free Consultation
                        </a>
                </div>
                <div className="copyright">
                    <div className="">
                        <div className="text">
                            &copy; {getYear()} The Sullivan Law Firm. All rights reserved.
                        </div>
                    </div>
                    <div className="post-footer-menu">
                        <a href="/privacy-policy">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="pioneer">
                        <a href="https://madebypioneer.com/">
                            <img src="https://inside.thesullivanlawfirm.com/wp-content/uploads/2023/05/pioneer.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterCont>
    );
}