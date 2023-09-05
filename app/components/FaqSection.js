'use client';

import { motion } from "framer-motion";
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

const faqToggle = (faqElement) => {
    let answer = faqElement.target.querySelector('.answer');
    let faqIcon = faqElement.target.querySelector('.faq-icon');
    answer.classList.toggle('opened-faq');
    faqIcon.classList.toggle('opened-faq-icon');
}

// #region Styles

const Section = styled.div`
    background-color: #ffffff;
    padding: 100px 8px 100px 8px;
    overflow: hidden;
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        align-items: start;
        max-width: 1300px;
        margin: 0 auto;
        @media (min-width: 768px) {
            display: grid;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        grid-column: 1 / 6;
        padding-bottom: 100px;
        text-align: center;
        @media (min-width: 768px) {
            padding-bottom: 0px;
            text-align: left;
        }
        h4 {
            width: 100%;
            font-family: 'plantin', sans-serif;
            font-size: 56px;
            font-weight: 200;
            color: #0A2041;
            line-height: 1;
            padding-bottom: 5px;
        }
        p {
            font-size: 18px;
            color: #0A2041;
            padding-bottom: 25px;
        }
        a {
            margin: 0 auto;
            @media (min-width: 768px) {
                margin-left: 0;
            }
        }
        .outline-button {
            margin-bottom: 60px;
        }
        .arrow-button {
            color: #0A2041;
        }
    }
    .faqs {
        grid-column: 6 / 13;
        border-top: 1px solid #0A2041;
        font-family: 'stevie-sans', sans-serif;
        .faq-single {
            border-bottom: 1px solid #0A2041;
            transition: 0.25s;
            .question {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 17px 0 15px 0;
                color: #0A2041;
                font-weight: 600;
                pointer-events: none;
            }
            .answer {
                transform: scaleY(0);
                transform-origin: top;
                height: 0px;
                font-size: 16px;
                color: #0A2041;
                padding-bottom: 0px;
                pointer-events: none;
            }
        }
        .faq-single:hover {
            background-color: rgba(10, 32, 65, 0.1);
            cursor: pointer;
            transition: 0.25s;
        }
    }
`;

// #endregion

export default function FaqSection({ faqSection }) {

    let faqButtonLink = getButtonLink(faqSection.acf.faq_cta.link_to_where, faqSection.acf.faq_cta.onsite_link, faqSection.acf.faq_cta.offsite_link, faqSection.acf.faq_cta.file_link);
    let glossaryButtonLink = getButtonLink(faqSection.acf.glossary_button.link_to_where, faqSection.acf.glossary_button.onsite_link, faqSection.acf.glossary_button.offsite_link, faqSection.acf.glossary_button.file_link);

    return (
        <Section>
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
                    <h4>{faqSection.acf.title}</h4>
                    <p>{faqSection.acf.faq_paragraph}</p>
                    <a href={faqButtonLink}>
                        <div className="outline-button">{faqSection.acf.faq_cta.text}</div>
                    </a>
                    <p>{faqSection.acf.glossary_paragraph}</p>
                    <a href={glossaryButtonLink}>
                        <div className="arrow-button">{faqSection.acf.glossary_button.text}</div>
                    </a>
                </motion.div>
                <motion.div 
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="faqs"
                >
                    {faqSection.acf.faq.map((item, index) => {
                        return (
                            <div className="faq-single" key={index} onClick={faqToggle}>
                                <div className="question">
                                    <h5>{item.question}</h5>
                                    <svg className="faq-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="#0A2041"/>
                                    </svg>
                                </div>
                                <div className="answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
                
            </div>
        </Section>
    );
}