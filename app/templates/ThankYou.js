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

const Content = styled.ul`
    background-color: #f0e6dd;
    padding: 200px 8px 500px 8px;
    .wrapper {
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
        h1 {
            font-family: 'plantin', sans-serif;
            font-weight: 300;
            font-size: 40px;
            color: #0A2041;
            line-height: 1;
            padding: 0px 0 10px 0;
        }
        p {
            padding: 10px 0 50px 0;
        }
        @media (min-width: 992px) {
            
        }
    }
`;

export default function ThankYou({ pageData }) {

    let heroButtonLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);


    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Content>
            <div className="wrapper">
              <h1>{pageData.acf.hero_section.title}</h1>
              <p>{pageData.acf.hero_section.description}</p>
              <a href={heroButtonLink}>
                  <div className="filled-dark-button">{pageData.acf.hero_section.button.text}</div>
              </a>
            </div>
        </Content>
        </>
    );
}