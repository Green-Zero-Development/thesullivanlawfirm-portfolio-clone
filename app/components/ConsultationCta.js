'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Content = styled.ul`
    overflow: hidden;
    background-color: #f0e6dd;
    padding: 120px 8px 120px 8px;
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
        h3 {
            font-size: 40px;
            color: #0A2041;
            line-height: 1;
            padding-bottom: 30px;
            width: 100%;
            text-align: center;
            @media (min-width: 516px) {
                font-size: 64px;
            }
            @media (min-width: 992px) {
                text-align: left;
            }
        }
        p {
            font-family: 'stevie-sans', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: #0A2041;
            padding-bottom: 50px;
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
            .cog-button__text {
                background-color: #0A2041;
                font-family: 'stevie-sans', sans-serif;
                font-weight: 600;
                color: #ffffff;
                padding: 8px 30px 8px 30px;
                filter: drop-shadow(0px 4px 1px rgba(10, 32, 65, 0.25));
                border: 1px solid #0A2041;
                transition: 0.25s;
            }
            .cog-button__text:hover {
                background-color: #ffffff;
                color: #0A2041;
                border: 1px solid #0A2041;
                transition: 0.25s;
            }
            .loader {
                min-height: 600px;
            }
        }
    }
`;

export default function ConsultationCta({ consultationCta, phone, email, googleVoice }) {
    
    useEffect(() => {
        Cognito.load("forms", { id: "66" });
    }, []);

    return (
        <Content>
            <div className="wrapper">
                <motion.div 
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <div className="content-box">
                        <h3>{consultationCta.acf.title}</h3>
                        <p>{consultationCta.acf.paragraph}</p>
                        <div className="cta">
                            {consultationCta.acf.cta}
                        </div>
                        <div className="phone">
                            <h6>{consultationCta.acf.call_title}</h6>
                            <a href={`tel:${googleVoice}`}>
                                {phone}
                            </a>
                        </div>
                        <div className="email">
                            <h6>{consultationCta.acf.email_title}</h6>
                            <a href={`mailto:${email}`}>
                                {email}
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <div className="form-box">
                        <div className="cognito">
                            <div className="loader">Form loading...</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Content>
    );
}