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
    padding: 150px 8px 200px 8px;
    .wrapper {
        max-width: 800px;
        margin: 0 auto;
        whitespace: pre-line;
        h1 {
            font-family: 'plantin', sans-serif;
            font-weight: 300;
            font-size: 40px;
            color: #0A2041;
            line-height: 1;
            padding: 0px 0 10px 0;
        }
        h2 {
            font-family: 'plantin', sans-serif;
            font-weight: 300;
            font-size: 32px;
            color: #0A2041;
            line-height: 1;
            padding: 10px 0 10px 0;
        }
        p {
            whitespace: pre-line;
            padding: 10px 0 10px 0;
        }
        @media (min-width: 992px) {
            
        }
    }
`;

export default function PrivacyPolicy({ pageData }) {

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Content>
            <div className="wrapper" dangerouslySetInnerHTML={{__html: pageData.acf.text}}>

            </div>
        </Content>
        </>
    );
}