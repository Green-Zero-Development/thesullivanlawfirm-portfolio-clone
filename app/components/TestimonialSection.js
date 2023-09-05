'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

const TestimonialSlider = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .inner-slide-box {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
        padding: 150px 8px 80px 8px;
        max-width: 800px;
    }
    p {
        font-family: plantin, sans-serif;
        font-size: 20px;
        font-style: italic;
        font-weight: 300;
        color: #171717;
        @media (min-width: 516px) {
            font-size: 24px;
        }
        @media (min-width: 768px) {
            font-size: 32px;
        }
    }
    h5 {
        font-family: 'stevie-sans', sans-serif;
        font-weight: 600;
        color: #171717;
        padding-top: 25px;
    }
    h6 {
        font-family: 'stevie-sans', sans-serif;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.6);
    }
    .splide {
        width: 100%;
        margin: 0 auto;
    }
    .splide__arrows {
        display: flex;
        justify-content: center;
        gap: 15px;
    }
    .splide__arrow {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: transparent;
    }
    .splide__arrow--prev {
        left: auto;
    }
    .splide__arrow--next {
        right: auto;
    }
    .splide__arrow svg {
        fill: transparent;
        width: 40px;
        height: 40px;
    }
    .sidebar {
        height: 2px;
        width: 70%;
        background-color: #BB9067;
    }
`;

export default function TestimonialSection({ testimonials, sidebars }) {
    useEffect(() => {
        if (sidebars !== 'true') {
            const sidebars = document.querySelectorAll('.sidebar');
            sidebars.forEach((sidebar) => {
                sidebar.style.display = 'none';
            });
        }
    }, []);
    return (
        <TestimonialSlider className="">
            <div className="sidebar"></div>
            <Splide hasTrack={ false }
                options={ {
                    type: 'loop',
                    perPage: 1,
                    pagination: false,
                    keyboard: 'global',
                    autoplay: true
                } 
                }
                
                >
                <SplideTrack>
                    {testimonials.acf.testimonial.map((item, index) => {
                        return (
                        <SplideSlide key={index} className="splide__slide">
                            <div className="inner-slide-box">
                                <p>"{item.text}"</p>
                                <h5>{item.name}</h5>
                                <h6>{item.service_received}</h6>
                            </div>
                        </SplideSlide>
                        );
                    })}
                    
                </SplideTrack>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 20H27M27 20L20 13M27 20L20 27" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#BB9067"/>
                        </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 20H27M27 20L20 13M27 20L20 27" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#BB9067"/>
                        </svg>
                    </button>
                </div>
            </Splide>
            <div className="sidebar"></div>
        </TestimonialSlider>
    );
}