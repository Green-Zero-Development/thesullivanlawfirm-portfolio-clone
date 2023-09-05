'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';
import FaqSection from "../components/FaqSection";
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

// #region Styles

const Hero = styled.div`
    background-color: #ffffff;
    color: #ffffff;
    @media (min-width: 516px) {
        
    }
    .outer-wrapper {
        position: relative;
        max-width: 1680px;
        padding: 300px 0 0 0;
        margin: 0 auto;
        .gradient {
            position: absolute;
            top: 0;
            background-color: rgba(10, 32, 65, 0.6);
            width: 100%;
            height: 100%;
            margin-top: -150px;
            z-index: 2;
        }
    }
    .bk-img {
        position: relative;
        margin: -200px auto 0 auto;
        @media (min-width: 500px) {
            margin: -100px auto 0 auto;
        }
        @media (min-width: 700px) {
            margin: -50px auto 0 auto;
        }
        @media (min-width: 992px) {
            margin: -200px auto 0 auto;
        }
        @media (min-width: 1200px) {
            margin: -150px auto 0 auto;
        }
    }
    .bk-img-desktop {
        display: none;
        @media (min-width: 992px) {
            display: block;
        }
        @media (min-width: 1200px) {
            object-position: 0px;
        }
    }
    .bk-img-mobile {
        object-fit: contain;
        @media (min-width: 450px) {
            object-fit: cover;
        }
        @media (min-width: 992px) {
            display: none;
        }
    }
    .wrapper {
        position: relative;
        max-width: 1380px;
        grid-template-columns: repeat(4, 1fr);
        gap: 50px;
        align-items: center;
        background-color: #0a2041;
        padding: 50px 20px 50px 20px;
        margin: 0 auto;
        text-align: center;
        z-index: 3;
        @media (min-width: 768px) {
            display: grid;
            padding: 100px 40px 100px 40px;
            text-align: left;
        }
        @media (min-width: 1200px) {
            padding: 100px 80px 100px 80px;
        }
        h1 {
            font-size: 56px;
            @media (min-width: 768px) {
                font-size: 64px;
            }
            @media (min-width: 992px) {
                font-size: 80px;
            }
        }
        .border {
            width: 70%;
            height: 2px;
            background-color: #BB9067;
            margin: 20px auto 30px auto;
            @media (min-width: 768px) {
                display: none;
                width: 120px;
                margin: 0 auto;
            }
            @media (min-width: 992px) {
                display: block;
            }
        }
        p {
            grid-column: 2 / 5;
            font-size: 18px;
            @media (min-width: 992px) {
                grid-column: 3 / 5;
            }
        }
    }
`;

const Awards = styled.div`
    padding: 150px 8px 150px 8px;
    background-color: #ffffff;
    .wrapper {
        max-width: 1400px;
        margin: 0 auto;
    }
    h6 {
        font-family: 'stevie-sans', sans-serif;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        padding-bottom: 30px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
        gap: 30px;
        @media (min-width: 516px) {
            grid-template-columns: repeat(3, 1fr);
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
    }
    li {
        h6 {
            font-family: 'stevie-sans', sans-serif;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            text-transform: none;
        }
        .dot {
            width: 8px;
            height: 8px;
            background-color: #BB9067;
            border-radius: 50%;
            margin: 0 auto 15px auto;
        }
    }
`;

const FoundersSection = styled.div`
    background-color: #f8f4f0;
    .reverse-box {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: start;
        max-width: 1380px;
        margin: 0 auto;
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            gap: 30px;
        }
        @media (min-width: 1200px) {
            gap: 50px;
        }
        .content {
            padding: 0 10px 0 10px;
            grid-column: 1 / 2;
            order: 2;
            @media (min-width: 768px) {
                order: 1;
                padding: 0 20px 0 20px;
            }
            @media (min-width: 1200px) {
                padding: 0 50px 0 50px;
            }
            h6 {
                font-family: 'stevie-sans', sans-serif;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
                padding: 50px 0 8px 0;
            }
            h2 {
                font-size: 56px;
                color: #0A2041;
                padding: 0 0 10px 0;
                @media (min-width: 516px) {
                    text-align: left;
                }
            }
            p {
                white-space: pre-line;
            }
            .bio-second-mobile {
                @media (min-width: 768px) {
                    display: none;
                }
            }
        }
        .image-and-second-bio {
            order: 1;
            padding: 0 10px 0 10px;
            margin: -100px 0 12px 0;
            @media (min-width: 516px) {
                margin-bottom: 0px;
            }
            p {
                display: none;
                white-space: pre-line;
                @media (min-width: 768px) {
                    display: block;
                }
            }
        }
        .image {
            position: relative;
            width: 100%;
            padding: 200px 0 200px 0;
            @media (min-width: 516px) {
                width: 60%;
                padding: 200px 0 200px 0;
                margin-bottom: 40px;
            }
            @media (min-width: 768px) {
                width: 100%;
                padding: 200px 0 200px 0;
            }
            @media (min-width: 992px) {
                padding: 300px 0 300px 0;
            }
        }
    }                                    
`;

const Staff = styled.div`
    overflow: hidden;
    background-color: #f8f4f0;
    ul {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        align-items: start;
        max-width: 1300px;
        margin: 0 auto;
        padding: 100px 8px 100px 8px;
        @media (min-width: 992px) {
            display: grid;
        } 
    }
    li {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        padding-bottom: 50px;
        @media (min-width: 516px) {
            display: grid;
        } 
        @media (min-width: 992px) {
            padding-bottom: 0px;
        }
        .image {
            position: relative;
            width: 100%;
            height: 350px;
            margin: 0 auto 50px auto;
            @media (min-width: 992px) {
                margin: 0 0 0 0;
            }
        }
        .content {
            padding: 0 0px 0 0px;
            @media (min-width: 516px) {
                padding: 0 20px 0 20px;
            } 
            @media (min-width: 992px) {
                padding: 0 40px 0 40px;
            } 
            h5 {
                font-family: 'plantin', sans-serif;
                font-size: 32px;
                color: #0A2041;
                line-height: 1;
            }
            h6 {
                font-size: 22px;
                color: #0A2041;
                padding-bottom: 15px;
            }
        }
        .bio {
            grid-column: 1 / 3;
            font-size: 16px;
            color: #0A2041;
            white-space: pre-line;
            padding-top: 50px;
        }
    }
`;

// #endregion Styles

export default function About({ pageData }) {

    const consultationCta = pageData.global_sections[1];

    const phone = pageData.site_data[3].acf.value_list[0].value;
    const googleVoice = pageData.site_data[3].acf.value_list[2].value;
    const email = pageData.site_data[1].acf.value_list[0].value;

    const faqSection = pageData.global_sections[2];

    const testimonials = pageData.global_sections[0];

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
            <Hero>
                <div className="outer-wrapper">
                    <div className="gradient"></div>
                    <Image className="bk-img bk-img-desktop" src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                    <Image className="bk-img bk-img-mobile" src={`${pageData.acf.hero_section.mobile_image.url}`} alt={`${pageData.acf.hero_section.mobile_image.alt}`} fill />
                    <motion.div 
                        initial={{ y: -20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="wrapper"
                    >
                        <h1>{pageData.acf.hero_section.title}</h1>
                        <div className="border"></div>
                        <p>{pageData.acf.hero_section.paragraph}</p>
                    </motion.div>
                </div>
            </Hero>

            <Awards>
                <motion.div 
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="wrapper"
                >
                    <h6>
                        {pageData.acf.awards_section.title}
                    </h6>
                    <ul>
                        {pageData.acf.awards_section.award.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="dot"></div>
                                    <h6>{item.text}</h6>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
                <div className="spacer"></div>
            </Awards>


            <FoundersSection>
                <div className="reverse-box">
                    <motion.div 
                        initial={{ y: -20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="content"
                    >
                        <h6>{pageData.acf.founder_section.subtitle}</h6>
                        <h2>{pageData.acf.founder_section.title}</h2>
                        <p>{pageData.acf.founder_section.bio_first}</p>
                        <p className="bio-second-mobile">{pageData.acf.founder_section.bio_second}</p>
                    </motion.div>
                    <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="image-and-second-bio"
                    >
                        <div className="image">
                            <Image src={`${pageData.acf.founder_section.image.url}`} alt={`${pageData.acf.founder_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>{pageData.acf.founder_section.bio_second}</p>
                    </motion.div>
                </div>
            </FoundersSection>

            <Staff>
                <ul>
                    {pageData.acf.staff.map((item, index) => {
                        return (
                            <li key={index}>
                                <motion.div 
                                    initial={{ x: 20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    className="image"
                                >
                                    <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                </motion.div>
                                <motion.div 
                                    initial={{ x: -20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    className="content"
                                >
                                    <h5>{item.name}</h5>
                                    <h6>{item.job_title}</h6>
                                </motion.div>
                                <div className="bio">{item.bio}</div>
                            </li>
                        );
                    })}
                </ul>
            </Staff>

            <TestimonialSection testimonials={testimonials} sidebars="true" />

            <div className="spacer"></div>

            <FaqSection faqSection={faqSection} />

            <ConsultationCta consultationCta={consultationCta} phone={phone} email={email} googleVoice={googleVoice} />
        </>
    );
}