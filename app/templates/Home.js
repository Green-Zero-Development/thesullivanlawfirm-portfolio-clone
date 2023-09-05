'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import TestimonialSection from "../components/TestimonialSection";
import ConsultationCta from "../components/ConsultationCta";

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

const videoToggle = (videoElement) => {
    const vidIcon = videoElement.target;
    const ytBox = videoElement.target.parentElement.parentElement.querySelector('.video');
    vidIcon.style.display = "none";
    ytBox.style.opacity = "1";
    ytBox.style.pointerEvents = "all";
}

// #region Styles

const Hero = styled.div`
    background-color: #ffffff;
    z-index: 3;
    overflow: hidden;
    .outer-wrapper {
        position: relative;
        max-width: 1680px;
        margin: auto;
    }
    .wrapper {
        position: relative;
        padding: 150px 0 50px 0;
        max-width: 1560px;
        z-index: 3;
        @media (min-width: 516px) {
            padding: 191px 0 100px 0;
        }
        @media (min-width: 768px) {
            padding: 191px 0 191px 0;
        }
        @media (min-width: 1681px) {
            margin: auto;
        }
        .bk-img-desktop {
            display: none;
            object-position: -250px;
            @media (min-width: 992px) {
                display: block;
            }
            @media (min-width: 1200px) {
                object-position: 0px;
            }
        }
        .bk-img-mobile {
            @media (min-width: 992px) {
                display: none;
            }
        }
        .gradient {
            position: absolute;
            top: 0;
            background-color: rgba(10, 32, 65, 0.6);
            width: 100%;
            height: 100%;
            z-index: 2;
            @media (min-width: 1200px) {
                display: none;
            }
        }
    }
    .content-box {
        position: relative;
        max-width: 1400px;
        padding: 0 8px 0 8px;
        margin-left: auto;
        color: #ffffff;
        z-index: 3;
        h1 {
            max-width: 660px;
            font-size: 64px;
            text-align: center;
            margin: 0 auto;
            @media (min-width: 516px) {
                font-size: 96px;
            }
            @media (min-width: 768px) {
                text-align: left;
                margin-left: 0px;
            }
        }
        hr {
            width: 535px;
            border: 1px solid #BB9067;
        }
        p {
            max-width: 660px;
            font-size: 20px;
            font-weight: 100;
            padding: 20px 0 30px 0;
            margin: 0 auto;
            text-align: center;
            @media (min-width: 768px) {
                text-align: left;
                margin-left: 0px;
            }
        }
        .buttons {
            display: flex;
            align-items: center;
            a {
                margin: 0 auto;
                @media (min-width: 768px) {
                    margin: 0px;
                }
            }
            .filled-button {
                margin-right: 30px;
            }
        }
        @media (min-width: 516px) {
            padding: 0 16px 0 16px;
        }
        @media (min-width:1440px) {
            padding: 0 0 0 0;
        }
    }
    @media (min-width: 992px) {
        
    }
`;

const Expertise = styled.div`
    .wrapper {
        position: relative;
        padding: 352px 0 0px 0;
        margin-top: -340px;
        border-top: 2px solid #BB9067;
        z-index: 1;
    }
    .content-box {
        position: relative;
        padding: 100px 0 100px 0;
        h2 {
            font-size: 64px;
            color: #ffffff;
            text-align: center;
            padding-bottom: 20px;
        }
    }
    .box-wrapper {
        position: relative;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        max-width: 1300px;
        margin: auto;
        padding: 0 16px 0 16px;
        z-index: 3;
        > * {
            &:first-child {
                margin-top: -80px;
                @media (min-width: 992px) {
                    margin-top: 0px;
                }
            }
        }
        .box {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            h3 {
                display: flex;
                height: 80px;
                background-color: #BB9067;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                color: #0A2041;
                padding: 10px 25px 0px 25px;
                @media (min-width: 516px) {
                    font-size: 32px;
                }
                @media (min-width: 992px) {
                    justify-content: left;
                    font-size: 24px;
                }
                @media (min-width: 1200px) {
                    font-size: 32px;
                }
            }
            .after-title-box {
                background-color: #ffffff;
                filter: drop-shadow(0px 4px 1px rgba(10, 32, 65, 0.25));
                padding: 20px 25px 20px 25px;
                p {
                    font-size: 16px;
                    font-weight: 200;
                    color: #0A2041;
                    padding-bottom: 25px;
                    line-height: 1.6;
                    text-align: center;
                    @media (min-width: 992px) {
                        text-align: left;
                    }
                }
                .arrow-button {
                    display: flex;
                    justify-content: center;
                    color: #0A2041;
                    @media (min-width: 992px) {
                        justify-content: left;
                    }
                }
            }
            @media (min-width: 992px) {
                margin-top: -80px;
            }
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

const VideoSection = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding-bottom: 150px;
    .video-box {
        position: relative;
        display: flex;
        align-items: center;
        max-width: 1141px;
        margin: 0 auto;
        height: 250px;
        width: 100%;
        margin: -200px auto 0 auto;
        filter: drop-shadow(0px 4px 1px rgba(10, 32, 65, 0.25));
        z-index: 2;
        @media (min-width: 516px) {
            height: 350px;
        }
        @media (min-width: 768px) {
            height: 450px;
        }
        @media (min-width: 992px) {
            height: 637px;
        }
        .video-play-button {
            position: absolute;
            width: 100%;
            margin: 0 auto;
            transition: 0.25s;
            &:hover {
                transform: scale(1.1);
                cursor: pointer;
                transition: 0.25s;
            }
        }
        .video {
            opacity: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            height: 100%;
        }
    }
`;

const OurProcess = styled.div`
    background-color: #ffffff;
    text-align: center;
    padding-bottom: 200px;
    .heading-box {
        max-width: 700px;
        margin: 0 auto;
        padding-bottom: 50px;
    }
    h2 {
        color: #0A2041;
        font-size: 56px;
        padding: 0 8px 6px 8px;
        @media (min-width: 516px) {
            font-size: 64px;
        }
    }
    h4 {
        max-width: 700px;
        margin: 0 auto;
        color: #0A2041;
        font-size: 18px;
        padding: 15px 25px 0 25px;
    }
    p {
        color: #0A2041;
        font-size: 18px;
        padding: 0 25px 0 25px;
    }
    .splide {
        max-width: 1141px;
        margin: 0 auto;
    }
    .splide__list {
        & :nth-child(2){
            .icon-box {
                .icon {
                    height: 150px;
                }
            }
        }
    }
    .icon-box {
        position: relative;
        display: flex;
        width: 162px;
        height: 162px;
        background-color: #ffffff;
        border: 1px solid #BB9067;
        border-radius: 6em;
        margin: 0 auto;
        z-index: 3;
    }
    .icon {
        margin: 0 auto;
    }
    h6 {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #BB9067;
        letter-spacing: 1.1px;
        padding: 20px 0 0 0;
    }
    h5 {
        max-width: 200px;
        margin: 0 auto;
        font-family: 'plantin', sans-serif;
        font-weight: 300;
        font-size: 24px;
        color: #0A2041;
        line-height: 1;
    }
    .timeline {
        max-width: 1017px;
        width: 100%;
        margin: -167px 0 0 auto;
        padding-bottom: 200px;
        border-top: 1px solid #BB9067;
        @media (min-width: 416px) {
            margin: -167px auto 0 auto;
        }
        @media (min-width: 768px) {
            width: 70%;
        }
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding-top: 50px;
        a {
            margin: 0 auto;
            @media (min-width: 768px) {
                margin: 0px;
            }
        }
        .filled-button {
            margin-right: 30px;
        }
    }
    @media (min-width: 516px) {
        
    }
`;

// #endregion Styles

export default function Home({ pageData }) {

    let firstHeroButtonLink = getButtonLink(pageData.acf.hero_section.first_button.link_to_where, pageData.acf.hero_section.first_button.onsite_link, pageData.acf.hero_section.first_button.offsite_link, pageData.acf.hero_section.first_button.file_link);

    let secondHeroButtonLink = getButtonLink(pageData.acf.hero_section.second_button.link_to_where, pageData.acf.hero_section.second_button.onsite_link, pageData.acf.hero_section.second_button.offsite_link, pageData.acf.hero_section.second_button.file_link);

    const testimonials = pageData.global_sections[0];

    let videoLink = pageData.acf.video_link.replace('youtu.be', 'youtube.com/embed');

    let firstProcessButtonLink = getButtonLink(pageData.acf.our_process.first_button.link_to_where, pageData.acf.our_process.first_button.onsite_link, pageData.acf.our_process.first_button.offsite_link, pageData.acf.our_process.first_button.file_link);

    let secondProcessButtonLink = getButtonLink(pageData.acf.our_process.second_button.link_to_where, pageData.acf.our_process.second_button.onsite_link, pageData.acf.our_process.second_button.offsite_link, pageData.acf.our_process.second_button.file_link);

    const consultationCta = pageData.global_sections[1];

    const phone = pageData.site_data[3].acf.value_list[0].value;
    const googleVoice = pageData.site_data[3].acf.value_list[2].value;
    const email = pageData.site_data[1].acf.value_list[0].value;

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>

            <Hero>
                <div className="outer-wrapper">
                    <motion.div 
                    initial={{ x: -20, position: 'relative', zIndex: 3 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    >
                        <div className="wrapper">
                            <div className="gradient"></div>
                            <Image className="bk-img bk-img-desktop" src={`${pageData.acf.hero_section.background_image.url}`} alt={`${pageData.acf.hero_section.background_image.alt}`} fill style={{ objectFit: 'cover' }} />
                            <Image className="bk-img bk-img-mobile" src={`${pageData.acf.hero_section.mobile_background_image.url}`} alt={`${pageData.acf.hero_section.mobile_background_image.alt}`} fill style={{ objectFit: 'cover' }} />
                            <div className="content-box">
                                <h1>{pageData.acf.hero_section.title}</h1>
                                <hr className="border"></hr>
                                <p>{pageData.acf.hero_section.paragraph}</p>
                                <div className="buttons">
                                    <a href={firstHeroButtonLink}>
                                        <div className="filled-button">{pageData.acf.hero_section.first_button.text}</div>
                                    </a>
                                    <a href={secondHeroButtonLink}>
                                        <div className="arrow-button">{pageData.acf.hero_section.second_button.text}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                    </motion.div>
                </div>
            </Hero>
            
            <Expertise>
                <div className="wrapper">
                    <Image className="bk-img" src={`https://inside.thesullivanlawfirm.com/wp-content/uploads/2023/05/border-blue-bk.jpg`} fill style={{ objectFit: 'cover' }} />
                    <div className="content-box">
                        <h2>{pageData.acf.expertise_boxes.title}</h2>
                    </div>
                </div>
                <div className="box-wrapper">
                    {pageData.acf.expertise_boxes.box.map((item, index) => {
                        let boxButtonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                        return (
                            <motion.div 
                            initial={{ y: -20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.2 + index / 3
                            }}
                            >
                                <div className="box">
                                    <h3>{item.title}</h3>
                                    <div className="after-title-box">
                                        <p>{item.paragraph}</p>
                                        <a href={boxButtonLink}>
                                            <div className="arrow-button">{item.button.text}</div>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Expertise>

            <TestimonialSection testimonials={testimonials} />

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>

            <VideoSection>
                <motion.div 
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="video-box"
                >
                    <Image className="bk-img" src={`${pageData.acf.video_poster_image.url}`} alt={`${pageData.acf.video_poster_image.alt}`} fill style={{ objectFit: 'cover' }} />
                    <iframe className="video" width="100%" height="100%" src={videoLink + '?autoplay=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <svg id="video-play-button" className="video-play-button" onClick={videoToggle} width="64" height="64" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 57C0 25.5197 25.5198 0 57.0001 0C72.1174 0 86.6156 6.00535 97.3053 16.6948C107.995 27.3845 114 41.8827 114 57C114 88.4802 88.4804 114 57.0001 114C25.5198 114 0 88.4802 0 57ZM46.5693 81.3961L79.8002 60.648C81.0438 59.8516 81.796 58.4768 81.796 57C81.796 55.5234 81.0438 54.1483 79.8002 53.3521L46.4552 32.604C45.1419 31.776 43.4827 31.7251 42.1212 32.4709C40.7596 33.2169 39.9093 34.6424 39.9003 36.195V77.8051C39.8819 79.3954 40.7478 80.8645 42.1481 81.6184C43.5484 82.3725 45.2515 82.2868 46.5693 81.3961Z" fill="#BB9067"/>
                    </svg>
                </motion.div>
            </VideoSection>
            
            <OurProcess>
                <div className="heading-box">
                    <h2>{pageData.acf.our_process.title}</h2>
                    <p>{pageData.acf.our_process.paragraph}</p>
                </div>
                <Splide hasTrack={ false }
                    options={ {
                        type: 'slide',
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        rewind: false,
                        drag: 'free',
                        noDrag: true,
                        keyboard: 'global',
                        breakpoints: {
                            416: {
                                perPage: 1,
                                padding: '70px'
                            },
                            516: {
                                perPage: 2,
                                padding: '30px'
                            },
                            768: {
                                perPage: 3,
                                padding: '10px'
                            }
                        }
                    } 
                    }
                    
                    >
                    <SplideTrack>
                        {pageData.acf.our_process.process_items.process_item.map((item, index) => {
                            return (
                            <SplideSlide key={index} className="splide__slide">
                                <div className="icon-box">
                                    <Image className="icon" src={`${item.icon.url}`} alt={`${item.icon.alt}`} width={76} height={76} />
                                </div>
                                <div className="">
                                    <h6>Step {index + 1}</h6>
                                    <h5>{item.text}</h5>
                                </div>
                            </SplideSlide>
                            );
                        })}
                    </SplideTrack>
                </Splide>
                <div className="timeline" />
                <h4>{pageData.acf.our_process.after_process_text}</h4>
                <div className="buttons">
                    <a href={firstProcessButtonLink}>
                        <div className="filled-dark-button">{pageData.acf.our_process.first_button.text}</div>
                    </a>
                    <a href={secondProcessButtonLink}>
                        <div className="arrow-button">{pageData.acf.our_process.second_button.text}</div>
                    </a>
                </div>
            </OurProcess>

            <ConsultationCta consultationCta={consultationCta} phone={phone} email={email} googleVoice={googleVoice} />
        </>
    );
}