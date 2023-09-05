'use client';

import { motion } from "framer-motion";
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

const faqToggle = (faqElement) => {
    let answer = faqElement.target.querySelector('.answer');
    let faqIcon = faqElement.target.querySelector('.faq-icon');
    answer.classList.toggle('opened-faq');
    faqIcon.classList.toggle('opened-faq-icon');
}

// #region Styles

const FaqsList = styled.div`
	background-color: #f0e6dd;
	.wrapper {
		max-width: 1400px;
		margin: 0 auto;
		padding: 100px 8px 150px 8px;
	}
	.first-row {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		@media (min-width: 768px) {
			display: grid;
        }
		h1 {
			font-family: 'plantin', sans-serif;
            font-size: 56px;
            font-weight: 200;
            color: #0A2041;
            line-height: 1;
            padding-bottom: 10px;
		}
		p {
            font-size: 18px;
            color: #0A2041;
            padding-bottom: 56px;
			@media (min-width: 768px) {
				padding-bottom: 25px;
			}
        }
	}
    .faqs-peek {
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
    .faqs-others {
		grid-template-columns: repeat(2, 1fr);
		gap: 0px 20px;
		align-items: start;
		font-family: 'stevie-sans', sans-serif;
		@media (min-width: 768px) {
			display: grid;
        }
		.faq-single {
			border-bottom: 1px solid #0A2041;
			transition: 0.25s;
			.question {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 18px 0 15px 0;
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
		.border-fix {
			width: 100%;
			background-color: #0A2041;
			@media (min-width: 768px) {
				height: 1px;
			}
		}
    }
`;

const Glossary = styled.div`
	background-color: #ffffff;
	.wrapper {
		max-width: 1400px;
		margin: 0 auto;
		padding: 150px 8px 150px 8px;
	}
	.first-row {
		grid-template-columns: repeat(3, 1fr);
		@media (min-width: 768px) {
			display: grid;
        }
		.content {
			grid-column: 1 / 2;
			@media (min-width: 768px) {
				max-width: 300px;
				padding-right: 20px;
			}
			h2 {
				font-family: 'plantin', sans-serif;
				font-size: 56px;
				font-weight: 200;
				color: #000000;
				line-height: 1;
				padding-bottom: 10px;
			}
			p {
				font-size: 18px;
				color: #000000;
				padding-bottom: 56px;
				@media (min-width: 768px) {
					padding-bottom: 25px;
				}
			}
		}
		.glossary-peek {
			grid-column: 2 / 4;
			grid-template-columns: repeat(2, 1fr);
			color: #000000;
			@media (min-width: 516px) {
				display: grid;
			}
			li {
				padding: 0px 0 60px 0;
				h5 {
					font-family: 'stevie-sans', sans-serif;
					font-size: 22px;
					padding-bottom: 10px;
				}
				p {
					width: 100%;
					@media (min-width: 516px) {
						width: 80%;
					}
				}
			}
		}
	}
	.glossary-others {
		grid-template-columns: repeat(2, 1fr);
		color: #000000;
		@media (min-width: 516px) {
			display: grid;
		}
		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		}
		li {
			padding: 0px 0 60px 0;
			h5 {
				font-family: 'stevie-sans', sans-serif;
				font-size: 22px;
				padding-bottom: 10px;
			}
			p {
				width: 100%;
				@media (min-width: 516px) {
					width: 80%;
				}
			}
		}
	}
`;

const FormSection = styled.div`
	background-color: #f0e6dd;
	border-bottom: 20px solid #e1cebc;
	text-align: center;
	.wrapper {
		max-width: 1400px;
		margin: 0 auto;
		padding: 120px 8px 150px 8px;
		h2 {
			font-family: 'plantin', sans-serif;
			font-size: 56px;
			font-weight: 200;
			color: #000000;
			line-height: 1;
			padding-bottom: 10px;
		}
		p {
			font-size: 18px;
			color: #000000;
			padding-bottom: 56px;
			max-width: 500px;
			margin: 0 auto;
			@media (min-width: 768px) {
				padding-bottom: 25px;
			}
		}
		.buttons {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			gap: 20px;
			padding-top: 20px;
			max-width: 500px;
			margin: 0 auto;
			@media (min-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
`;

// #endregion Styles

export default function FaqsPage({ pageData }) {

    const faqSection = pageData.global_sections[2];

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
			
            <FaqsList>
				<div className="wrapper">
					<div className="first-row">
						<motion.div 
							initial={{ y: 20 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5
							}}
							className="content"
						>
							<h1>{pageData.acf.hero_section.title}</h1>
							<p>{pageData.acf.hero_section.paragraph}</p>
						</motion.div>
						<div className="faqs-peek">
							{faqSection.acf.faq.map((item, index) => {
								if (index < 3) {
									return (
									<div className="faq-single" key={index} onClick={faqToggle}>
										<motion.div 
											initial={{ y: -20 }}
											whileInView={{ y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.01 + index / 6
											}}
											className="question"
										>
											<h5>{item.question}</h5>
											<svg className="faq-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="#0A2041"/>
											</svg>
										</motion.div>
										<div className="answer">
											<p>{item.answer}</p>
										</div>
									</div>
									);
								}
							})}
						</div>
					</div>
					<div className="faqs-others">
						<div className="border-fix"></div>
						<div className="border-fix-alt"></div>
						{faqSection.acf.faq.map((item, index) => {
							if (index > 3) {
								return (
								<div className="faq-single" key={index} onClick={faqToggle}>
									<motion.div 
											initial={{ y: -20 }}
											whileInView={{ y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5 + index / 6
											}}
											className="question"
									>
										<h5>{item.question}</h5>
										<svg className="faq-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="#0A2041"/>
										</svg>
									</motion.div>
									<div className="answer">
										<p>{item.answer}</p>
									</div>
								</div>
								);
							}
						})}
					</div>
				</div>
            </FaqsList>
			<Glossary>
				<div className="wrapper">
					<div className="first-row">
						<motion.div 
							initial={{ y: 20 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5
							}}
							className="content"
						>
							<h2>{pageData.acf.glossary_section.title}</h2>
							<p>{pageData.acf.glossary_section.paragraph}</p>
						</motion.div>
						<ul className="glossary-peek">
							{pageData.acf.glossary_section.glossary_entry.map((item, index) => {
								if (index < 4) {
									return (
										<motion.li
											initial={{ y: -20 }}
											whileInView={{ y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.01 + index / 6
											}}
										>
											<h5>{item.term}</h5>
											<p>{item.explanation}</p>
										</motion.li>
									);
								}
							})}
						</ul>
					</div>
					<ul className="glossary-others">
						{pageData.acf.glossary_section.glossary_entry.map((item, index) => {
							if (index > 4) {
								return (
									<motion.li
										initial={{ y: -20 }}
										whileInView={{ y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.01 + index / 6
										}}
									>
										<h5>{item.term}</h5>
										<p>{item.explanation}</p>
									</motion.li>
								);
							}
						})}
					</ul>
				</div>
			</Glossary>
			{/* <FormSection>
					<motion.div 
						initial={{ y: 20 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5
						}}
						className="wrapper"
					>
					<h2>{pageData.acf.form_section.title}</h2>
					<p>{pageData.acf.form_section.paragraph}</p>
					<div className="buttons">
						{pageData.acf.form_section.form.map((item, index) => {
							return (
								<a href={item.file.url} target="_blank" className="filled-dark-button">
									{item.button_text}
								</a>
							);
						})}
					</div>
				</motion.div>
			</FormSection> */}
        </>
    );
}