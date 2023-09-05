'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import FaqSection from "../components/FaqSection";

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

const Content = styled.ul`
    background-color: #f0e6dd;
    padding: 150px 8px 200px 8px;
    overflow: hidden;
    .wrapper {
        align-items: start;
        max-width: 1200px;
        margin: 0 auto;
        gap: 50px;
        @media (min-width: 992px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .content-box {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        @media (min-width: 992px) {
            text-align: left;
        }
        h1 {
            width: 100%;
            font-size: 40px;
            color: #0A2041;
            line-height: 1;
            padding-bottom: 10px;
            @media (min-width: 516px) {
                font-size: 64px;
            }
        }
        p {
            font-family: 'stevie-sans', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: #0A2041;
        }
        h5 {
            font-family: 'stevie-sans', sans-serif;
            font-weight: 600;
            font-size: 12px;
            color: #0A2041;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding-top: 20px;
            padding-bottom: 50px;
            margin: 0 auto;
        }
        h6 {
            font-family: 'stevie-sans', sans-serif;
            font-size: 12px;
            font-weight: 600;
            color: #0A2041;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .phone {
            width: 100%;
            font-family: 'plantin', sans-serif;
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 15px;
            color: #0A2041;
            @media (min-width: 516px) {
                font-size: 40px;
            }
        }
        .email {
            width: 100%;
            font-family: 'plantin', sans-serif;
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 15px;
            color: #0A2041;
            @media (min-width: 516px) {
                font-size: 40px;
            }
        }
    }
    .form-box {
        .cog-form__container {
            width: 100%;
            font-family: 'stevie-sans', sans-serif;
            padding: 50px 0 0 0;
            @media (min-width: 516px) {
                width: 75%;
            }
            @media (min-width: 992px) {
                width: 100%;
                padding: 0px 0 0 0;
            }
            .el-input__inner {
                width: 100%;
                background-color: transparent;
                border-style: solid;
                border-width: 0 0 1px 0;
                border-color: #000000;
                margin-bottom: 20px;
                padding: 10px 10px 1px 10px;
            }
            .el-textarea__inner {
                width: 100%;
                min-height: 100px;
                background-color: transparent;
                border-style: solid;
                border-width: 0 0 1px 0;
                border-color: #000000;
                margin-bottom: 20px;
                padding: 10px 10px 1px 10px;
            }
            .cog-page__navigation {
                width: 100%;
                .cog-button--navigation {
                    margin-left: auto !important;
                }
            }
            .cog-button {
                background-color: #0A2041;
                font-family: 'stevie-sans', sans-serif;
                font-weight: 600;
                color: #ffffff;
                padding: 8px 30px 8px 30px;
                filter: drop-shadow(0px 4px 1px rgba(10, 32, 65, 0.25));
                border: 1px solid #0A2041;
                transition: 0.25s;
            }
            .cog-button:hover {
                background-color: #ffffff;
                color: #0A2041;
                border: 1px solid #0A2041;
                transition: 0.25s;
            }
        }
        .loader {
            min-height: 600px;
            max-height: 600px;
            overflow: hidden;
        }
    }
    .cta {
        width: 100%;
        font-family: 'plantin', sans-serif;
        font-size: 24px;
        font-weight: 200;
        line-height: 1;
        margin-bottom: 30px;
        color: #0A2041;
        @media (min-width: 992px) {
            font-size: 32px;
        }
    }
`;

const PostHero = styled.div`
    color: #ffffff;
    background-color: #ffffff;
    border-top: 1px solid #f0e6dd;
    @media (min-width: 516px) {
        
    }
    .outer-wrapper {
        position: relative;
        max-width: 1680px;
        margin: 0px auto 0 auto;
        background-color: #ffffff;
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
        margin: -50px auto 0 auto;
        text-align: center;
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

export default function Contact({ pageData }) {

    useEffect(() => {
        Cognito.load("forms", { id: "66" });
    }, []);

    const phone = pageData.site_data[3].acf.value_list[0].value;
    const googleVoice = pageData.site_data[3].acf.value_list[2].value;
    const email = pageData.site_data[1].acf.value_list[0].value;

    const faqSection = pageData.global_sections[2];

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Content>
            <div className="wrapper">
                <motion.div 
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="content-box"
                >
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                    <h5>Our firm accepts calls 24/7 - if our business hours have passed, please call our office.</h5>
                    <div className="cta">
                        {pageData.acf.hero_section.button.text}
                    </div>
                    <div className="phone">
                        <h6>Call</h6>
                        <a href={`tel:${googleVoice}`}>
                            {phone}
                        </a>
                    </div>
                    <div className="email">
                        <h6>Email</h6>
                        <a href={`mailto:${email}`}>
                            {email}
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="form-box"
                >
                <div className="cognito">
                    <div className="loader">Form loading...</div>
                </div>
                </motion.div>
            </div>
        </Content>

        <PostHero>
            <motion.div 
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5
                }}
                className="wrapper"
            >
                <h1>{pageData.acf.post_hero_section.title}</h1>
                <div className="border"></div>
                <p>{pageData.acf.post_hero_section.paragraph}</p>
            </motion.div>
            <div className="spacer"></div>
        </PostHero>


        <FaqSection faqSection={faqSection} />
        </>
    );
}