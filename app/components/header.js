'use client';

import Link from 'next/link';
import styled from 'styled-components';

function toggleDropdown(dropTrig) {
  dropTrig.target.nextSibling.classList.toggle("desktop-menu-toggle");
}

function toggleMobileDropdown(dropTrig) {
    dropTrig.target.nextSibling.classList.toggle("mobile-menu-toggle");
}

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-close").classList.toggle("mobile-menu-toggle-icon");
}

// #region Styles

const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 50;
    transition: .25s;
`;

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 24px 16px 24px 16px;
    transition: .25s;
    @media (min-width: 992px) {
        padding: 35px 8px 24px 8px;
    }
    @media (min-width: 1200px) {
        padding: 28px 16px 24px 16px;
    }
    @media (min-width: 1440px) {
        padding: 28px 32px 32px 32px;
    }
`;

const DesktopLogoLink = styled.a`
    grid-column: span 12 / span 12;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
`;

const DesktopLogo = styled.img`
    @media (min-width: 576px) {
        max-width: 210px;
    }
    @media (min-width: 992px) {
        max-width: 150px;
    }
    @media (min-width: 1200px) {
        max-width: 210px;
    }
`;

const MobileMenuOpen = styled.div`
    position: fixed;
    bottom: 30px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 10;
    svg {
        margin: auto;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileMenuClose = styled.div`
    position: fixed;
    bottom: 30px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    display: none;
    svg {
        margin: auto;
    }
`

const DesktopNavi = styled.div`
    grid-column: span 10 / span 10;
    display: flex;
    align-items: center;
    margin-left: auto;
`

const DesktopMenu = styled.ul`
    display: none;
    > * {
        &:last-child {
            
           a {
            background-color: #0A2041;
            color: #ffffff;
            font-weight: 600;
            padding: 12px 20px 12px 20px;
            filter: drop-shadow(0px 4px 1px rgba(10, 32, 65, 0.25));
            border: 1px solid #0A2041;
            transition: 0.25s;
            &:hover {
                background-color: #ffffff;
                color: #0A2041;
                transition: 0.25s;
            }
           }
        }
    }
    @media (min-width: 992px) {
        display: flex;
    }
`

const DesktopMenuSingle = styled.li`
    color: #0A2041;
    a {
        color: #0A2041;
    }
    &:hover {
        border-bottom: 2px solid #BB9067;
        margin-bottom: -2px;
    }
    @media (min-width: 992px) {
        font-size: 14px;
        margin-left: 20px;
    }
    @media (min-width: 1200px) {
        font-size: 16px;
        margin-left: 24px;
    }
    @media (min-width: 1440px) {
        margin-left: 48px;
    }
`

const DesktopDropdown = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    display: flex;
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #091c3a;
    padding: 24px 0 100px 0;
    z-index: 998;
    transition: .25s;
`

const MobileItems = styled.div`
    position: relative;
    padding-bottom: 100px;
    z-index: 998;
`

const MobileMenuHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    padding: 6px 8px 0px 8px;
    a {
        margin-left: 0;
    }
`

const MobileMenuList = styled.ul`
    padding-top: 5rem;
    padding-left: 12px;
    padding-right: 0px;
    > * {
        &:last-child {
            border-width: 0px;
        }
    }
    @media (min-width: 992px) {
        
    }
`

const MobileMenuSingle = styled.li`
    font-family: plantin, sans-serif;
    font-weight: 200;
    font-size: 26px;
    color: #ffffff !important;
    padding-bottom: 12px !important;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 20px;
    border-bottom: 1px solid #BB9067;
    a {
        display: flex;
        width: 100%;
    }
    @media (min-width: 416px) {
        font-size: 32px;
    }
`

const MobileMenuSingleDrop = styled.li`
    font-size: 16px;
    padding-bottom: 22px !important;
    margin-bottom: 1.5rem;
    .desktop-trigger {
        display: grid;
    }
`

const MobileMenuDropTitle = styled.div`
    pointer-events: none;
`

const SocialIcons = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-left: 12px;
    svg {
        width: 38px;
        height: 38px;
        margin-right: 20px;
    }
`

// #endregion

export default function Header({ logos, mainMenu, mobileMenu, socialMedia }) {
    
    const mainLogo = logos[0].acf.logo.url;
    const mobileLogo = logos[0].acf.mobile_menu_logo.url;
    const facebook = socialMedia[0].acf.value_list[0].value;
    const linkedin = socialMedia[0].acf.value_list[1].value;

    return (
        <>
        <HeaderStyle>
            <HeaderWrapper>
                <DesktopLogoLink href="/">
                    <DesktopLogo src={mainLogo} />
                </DesktopLogoLink>
                <DesktopNavi>
                    <DesktopMenu>
                        {mainMenu.map((item) => {
                            if (item.children) {
                                return (
                                    <DesktopMenuSingle key={item.id}>
                                        <div id="dropdown-trigger" onClick={toggleDropdown} className="">{item.title}</div>
                                        <DesktopDropdown id="dropdown">
                                        {Object.keys(item.children).map((key, index) => {
                                            if (item.children[key].url.includes("#")) {
                                                return (
                                                    <a key={index} href={item.children[key].url}>{item.children[key].title}</a>
                                                );
                                            } else {
                                                return (
                                                    <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                                );
                                            }
                                        })}
                                        </DesktopDropdown>
                                    </DesktopMenuSingle>
                                )
                            } else {
                                if (item.url.includes("#")) {
                                    return (
                                        <DesktopMenuSingle key={item.id}>
                                            <a href={item.url}>{item.title}</a>
                                        </DesktopMenuSingle>
                                    )
                                } else {
                                    return (
                                        <DesktopMenuSingle key={item.id}>
                                            <Link href={item.url}>{item.title}</Link>
                                        </DesktopMenuSingle>
                                    )
                                }
                            }
                        })}
                    </DesktopMenu>
                </DesktopNavi>
                <MobileMenu id="mobile-menu">
                    <MobileItems id="mobile-items">
                        <MobileMenuHeader>
                            <DesktopLogoLink href="/">
                                <DesktopLogo src={mobileLogo} />
                            </DesktopLogoLink>
                        </MobileMenuHeader>
                        <MobileMenuList className="pt-12 px-6">
                        {mobileMenu.map((item) => {
                            if (item.children) {
                                return (
                                    <MobileMenuSingleDrop key={item.id}>
                                        <div id="dropdown-trigger" className="dropdown-trigger" onClick={toggleMobileDropdown}>
                                            <MobileMenuDropTitle>{item.title}</MobileMenuDropTitle>
                                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                        </div>
                                        <DesktopDropdown className="dropdown">
                                        {Object.keys(item.children).map((key, index) => {
                                            if (item.children[key].url.includes("#")) {
                                                return (
                                                    <a key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</a>
                                                );
                                            } else {
                                                return (
                                                    <Link key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</Link>
                                                );
                                            }
                                        })}
                                        </DesktopDropdown>
                                    </MobileMenuSingleDrop>
                                )
                            } else {
                                if (item.url.includes("#")) {
                                    return (
                                        <MobileMenuSingle key={item.id}>
                                            <a href={item.url} className="" onClick={mobiletoggle} >{item.title}</a>
                                        </MobileMenuSingle>
                                    )
                                } else {
                                    return (
                                        <MobileMenuSingle key={item.id}>
                                            <Link href={item.url} onClick={mobiletoggle}>{item.title}</Link>
                                        </MobileMenuSingle>
                                    )
                                }
                            }
                        })}
                        </MobileMenuList>
                        <SocialIcons>
                            <a href={facebook}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5746 9.30002H20.9246C20.0685 9.30002 19.3746 9.99399 19.3746 10.85V15.5H25.5746C25.7508 15.4961 25.9181 15.5781 26.0229 15.72C26.1276 15.8618 26.1571 16.0456 26.1016 16.213L24.9546 19.623C24.8489 19.936 24.5564 20.1475 24.2261 20.15H19.3746V31.775C19.3746 32.203 19.0276 32.55 18.5996 32.55H14.7246C14.2966 32.55 13.9496 32.203 13.9496 31.775V20.15H11.6246C11.1966 20.15 10.8496 19.803 10.8496 19.375V16.275C10.8496 15.8471 11.1966 15.5 11.6246 15.5H13.9496V10.85C13.9496 7.42586 16.7255 4.65002 20.1496 4.65002H25.5746C26.0026 4.65002 26.3496 4.99701 26.3496 5.42502V8.52502C26.3496 8.95304 26.0026 9.30002 25.5746 9.30002Z" fill="white"/>
                                </svg>
                            </a>
                            <a href={linkedin}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5502 4.65002H30.2502C31.9623 4.65002 33.3502 6.03794 33.3502 7.75002V29.45C33.3502 31.1622 31.9623 32.55 30.2502 32.55H8.5502C6.83811 32.55 5.4502 31.1622 5.4502 29.45V7.75002C5.4502 6.03794 6.83811 4.65002 8.5502 4.65002ZM13.2002 27.9C13.6282 27.9 13.9752 27.553 13.9752 27.125V16.275C13.9752 15.8471 13.6282 15.5 13.2002 15.5H10.8752C10.4472 15.5 10.1002 15.8471 10.1002 16.275V27.125C10.1002 27.553 10.4472 27.9 10.8752 27.9H13.2002ZM12.0377 13.95C10.7536 13.95 9.7127 12.9091 9.7127 11.625C9.7127 10.341 10.7536 9.30002 12.0377 9.30002C13.3218 9.30002 14.3627 10.341 14.3627 11.625C14.3627 12.9091 13.3218 13.95 12.0377 13.95ZM27.9252 27.9C28.3531 27.9 28.7002 27.553 28.7002 27.125V19.995C28.7506 17.5318 26.9295 15.4295 24.4842 15.128C22.7745 14.9719 21.1181 15.7703 20.1752 17.205V16.275C20.1752 15.8471 19.8281 15.5 19.4002 15.5H17.0752C16.6472 15.5 16.3002 15.8471 16.3002 16.275V27.125C16.3002 27.553 16.6472 27.9 17.0752 27.9H19.4002C19.8281 27.9 20.1752 27.553 20.1752 27.125V21.3125C20.1752 20.0285 21.2162 18.9875 22.5002 18.9875C23.7842 18.9875 24.8252 20.0285 24.8252 21.3125V27.125C24.8252 27.553 25.1722 27.9 25.6002 27.9H27.9252Z" fill="white"/>
                                </svg>
                            </a>
                        </SocialIcons>
                    </MobileItems>
                </MobileMenu>
            </HeaderWrapper>
        </HeaderStyle>
        <MobileMenuOpen id="mobile-menu-open" onClick={mobiletoggle}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3351_4711)">
            <rect x="4" width="64" height="64" rx="32" fill="#BB9067"/>
            <g clip-path="url(#clip0_3351_4711)">
            <path d="M42 38V40H30V38H42ZM45 31V33H27V31H45ZM42 24V26H30V24H42Z" fill="white"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_3351_4711" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.12549 0 0 0 0 0.254902 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3351_4711"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3351_4711" result="shape"/>
            </filter>
            <clipPath id="clip0_3351_4711">
            <rect x="24" y="20" width="24" height="24" rx="12" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </MobileMenuOpen>
        <MobileMenuClose id="mobile-menu-close" onClick={mobiletoggle}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3351_4810)">
                <rect x="4" width="64" height="64" rx="32" fill="#BB9067"/>
                <g clip-path="url(#clip0_3351_4810)">
                <path d="M35.9997 30.586L40.9497 25.636L42.3637 27.05L37.4137 32L42.3637 36.95L40.9497 38.364L35.9997 33.414L31.0497 38.364L29.6357 36.95L34.5857 32L29.6357 27.05L31.0497 25.636L35.9997 30.586Z" fill="white"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_3351_4810" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.12549 0 0 0 0 0.254902 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3351_4810"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3351_4810" result="shape"/>
                </filter>
                <clipPath id="clip0_3351_4810">
                <rect width="24" height="24" fill="white" transform="translate(24 20)"/>
                </clipPath>
                </defs>
            </svg>
        </MobileMenuClose>
        </>
    );
}