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
    background-color: #0a2041;
    color: #ffffff;
    border-bottom: 8px solid #A6805B;
    padding: 0 8px 80px 8px;
    @media (min-width: 1200px) {
        padding: 0 8px 100px 8px;
    }
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        align-items: start;
        max-width: 1380px;
        width: 100%;
        padding: 60px 15px 0px 15px;
        margin: 0 auto -150px auto;
        @media (min-width: 768px) {
            display: grid;
            margin: 0 auto 0px auto;
            padding: 60px 0 0px 0;
        }
        @media (min-width: 1200px) {
            padding: 100px 0 0px 0;
            margin: 0 auto -150px auto;
        }
        .content {
            grid-column: 1 / 7;
            padding: 0 0px 50px 0px;
            overflow: hidden;
            @media (min-width: 768px) {
                padding: 0 50px 0px 0px;
            }
            h1 {
                font-size: 48px;
                padding-bottom: 10px;
                @media (min-width: 768px) {
                    font-size: 48px;
                }
                @media (min-width: 992px) {
                    font-size: 64px;
                }
            }
            p {
                font-size: 18px;
                line-height: 1.6;
            }
        }
        .image {
            position: relative;
            grid-column: 7 / 13;
            width: 100%;
            height: 215px;
            @media (min-width: 516px) {
                height: 403px;
            }
        }
    }
`;

const Content = styled.div`
    background-color: #ffffff;
    overflow: hidden;
    .wrapper {
        max-width: 1250px;
        padding: 100px 8px 100px 8px;
        margin: 0 auto;
    }
    .content-wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        color: #0A2041;
        padding: 80px 0 50px 0;
        @media (min-width: 768px) {
            display: grid;
        }
        h2 {
            grid-column: 1 / 7;
            font-size: 32px;
            line-height: 1.1;
            padding-bottom: 40px;
            @media (min-width: 516px) {
                font-size: 48px;
            }
            @media (min-width: 768px) {
                font-size: 32px;
            }
            @media (min-width: 992px) {
                grid-column: 1 / 6;
                padding-bottom: 0px;
                font-size: 48px;
            }
        }
        p {
            grid-column: 7 / 13;
            font-size: 18px;
            white-space: pre-line;
            @media (min-width: 992px) {
                grid-column: 6 / 13;
            }
        }
    }
    .list-wrapper {
        color: #0A2041;
        h6 {
            font-family: 'stevie-sans', sans-serif;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 1px;
            padding: 0 0 25px 0;
        }
        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            @media (min-width: 516px) {
                grid-template-columns: repeat(3, 1fr);
            }
            @media (min-width: 768px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            svg {
                min-width: 16px;
                min-height: 3px;
                margin-right: 15px;
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

// #endregion Styles

export default function SingleService({ pageData }) {

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
                <div className="wrapper">
                    <motion.div 
                        initial={{ x: -20 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="content"
                    >
                        <h1>{pageData.acf.hero_section.title}</h1>
                        <p>{pageData.acf.hero_section.paragraph}</p>
                    </motion.div>
                    <motion.div 
                        initial={{ y: -20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="image"
                    >
                         <Image src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </Hero>

            <Content>
                <div className="wrapper">
                    <div className="content-wrapper">
                        <motion.h2 
                            initial={{ x: -20 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                        {pageData.acf.content_section.title}
                        </motion.h2>
                        <motion.p 
                            initial={{ x: 20 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                        {pageData.acf.content_section.paragraph}
                        </motion.p>
                    </div>
                    <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}

                    >
                        <div className="list-wrapper">
                            <h6>{pageData.acf.content_section.list_title}</h6>
                            {pageData.acf.content_section.list_item ? 
                                <ul>
                                    {pageData.acf.content_section.list_item.map((item) => {
                                        return (
                                            <li>
                                                <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 1.5H16" stroke="#BB9067" stroke-width="2"/>
                                                </svg>
                                                {item.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                            : 
                            null
                            }
                        </div>
                    </motion.div>
                </div>
            </Content>

            <TestimonialSection testimonials={testimonials} sidebars="true" />

            <div className="spacer"></div>

            <FaqSection faqSection={faqSection} />

            <ConsultationCta consultationCta={consultationCta} phone={phone} email={email} googleVoice={googleVoice} />

        </>
    );
}