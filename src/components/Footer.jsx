import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  
`;

const SocialMediaLinks = styled.div`
  margin-top: 20px;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Jobs Japan. All rights reserved.</p>
      <SocialMediaLinks>
        <SocialMediaLink href="https://facebook.com"><FaFacebook /></SocialMediaLink>
        <SocialMediaLink href="https://twitter.com"><FaTwitter /></SocialMediaLink>
        <SocialMediaLink href="https://instagram.com"><FaInstagram /></SocialMediaLink>
      </SocialMediaLinks>
    </FooterContainer>
  );
}

export default Footer;
