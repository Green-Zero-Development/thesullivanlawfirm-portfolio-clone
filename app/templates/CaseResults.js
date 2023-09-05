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
            margin-top: -180px;
            z-index: 2;
        }
    }
    .bk-img {
        position: relative;
        margin: -180px auto 0 auto;
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

const HowDifferent = styled.div`
    background-color: #ffffff;
    padding-bottom: 100px;
    overflow: hidden;
    .box {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: start;
        max-width: 1380px;
        padding: 150px 0 0px 0;
        margin: 0 auto;
        @media (min-width: 516px) {
            display: grid;
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            align-items: center;
            gap: 30px;
        }
        @media (min-width: 1200px) {
            gap: 50px;
        }
        .content {
            padding: 0 10px 0 10px;
            grid-column: 2 / 4;
            @media (min-width: 516px) {
                padding: 0 20px 0 20px;
            }
            @media (min-width: 768px) {
                grid-column: 2 / 3;
            }
            @media (min-width: 1200px) {
                padding: 0 50px 0 50px;
            }
        }
        .image {
            position: relative;
            width: 100%;
            padding: 150px 0 150px 0;
            margin-bottom: 32px;
            @media (min-width: 516px) {
                padding: 100px 0 100px 0;
                margin-bottom: 0px;
            }
            @media (min-width: 768px) {
                padding: 200px 0 200px 0;
            }
            @media (min-width: 992px) {
                padding: 320px 0 320px 0;
            }
        }
    }
    h2 {
        font-size: 56px;
        color: #0A2041;
        text-align: center;
        @media (min-width: 516px) {
            text-align: left;
        }
    }
    h6 {
        font-family: 'plantin', sans-serif;
        font-weight: 300;
        line-height: 1;
        font-size: 40px;
        color: #BB9067;
        width: 100%;
        padding-bottom: 5px;
    }
    h5 {
        font-family: 'stevie-sans', sans-serif;
        line-height: 1;
        font-size: 18px;
        color: #0A2041;
        width: 100%;
    }
    p {
        font-size: 18px;
        color: #0A2041;
        padding: 10px 0 15px 0;
        text-align: center;
        @media (min-width: 516px) {
            text-align: left;
        }
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        font-size: 16px;
        color: #000000;
        padding: 20px 0 0px 0;
        text-align: center;
        @media (min-width: 516px) {
            text-align: left;
        }
    }
    li {
        padding-bottom: 20px;
    }
    .buttons {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 40px;
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
    @media (min-width: 992px) {
        
    }
`;

const HighlightedCases = styled.div`
    background-color: #ffffff;
    padding: 120px 8px 50px 8px;
    .wrapper {
        max-width: 1300px;
        margin: 0 auto;
        .image {
            position: relative;
            height: 240px;
            width: 100%;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 56px;
            padding-bottom: 15px;
            color: #0A2041;
        }
        ul {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 40px;
            @media (min-width: 516px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (min-width: 992px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        h5 {
            font-family: 'plantin', sans-serif;
            font-size: 32px;
            color: #0A2041;
        }
        p {
            font-size: 18px;
            color: #0A2041;
        }
    }
`;

// #endregion Styles

export default function CaseResults({ pageData }) {

    let buttonLink = getButtonLink(pageData.acf.contact_section.button.link_to_where, pageData.acf.contact_section.button.onsite_link, pageData.acf.contact_section.button.offsite_link, pageData.acf.contact_section.button.file_link);

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
                    <Image className="bk-img" src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
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

            <HowDifferent>
                <div className="wrapper">
                    <div className="box">
                        <motion.div 
                            initial={{ x: 20 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="image"
                        >
                            <Image src={`${pageData.acf.contact_section.image.url}`} alt={`${pageData.acf.contact_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
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
                            <h2>{pageData.acf.contact_section.title}</h2>
                            <p>{pageData.acf.contact_section.paragraph}</p>
                            {/* <ul>
                                {pageData.acf.contact_section.statistic.map((item, index) => {
                                    return (
                                        <li>
                                            <h6>{item.subtitle}</h6>
                                            <h5>{item.title}</h5>
                                        </li>
                                    );
                                })}
                            </ul> */}
                            <div className="buttons">
                                <a href={buttonLink}>
                                    <div className="arrow-button">{pageData.acf.contact_section.button.text}</div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </HowDifferent>

            <TestimonialSection testimonials={testimonials} sidebars="true" />

            <div className="spacer"></div>

            {/* <HighlightedCases>
                <div className="wrapper">
                    <h2>{pageData.acf.highlighted_cases.title}</h2>
                    <ul>
                        {pageData.acf.highlighted_cases.highlighted_case.map((item, index) => {
                            return (
                                <motion.li 
                                    initial={{ y: 20 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5 + index / 3
                                    }}
                                    className="wrapper"
                                >
                                    <div className="image">
                                        <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>{item.paragraph}</p>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </HighlightedCases> */}

            <FaqSection faqSection={faqSection} />

            <ConsultationCta consultationCta={consultationCta} phone={phone} email={email} googleVoice={googleVoice} />
        </>
    );
}