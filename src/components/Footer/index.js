import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg};  // Use theme background color
  color: ${({ theme }) => theme.text_secondary};  // Use theme text color
  text-align: center;
  padding: 20px 10px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 3px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};  // Use theme text color
`;

const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};  // Use theme primary text color
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.primary};  // Use theme primary color
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Wan Haziq Iskandar bin Wan Izhan</FooterTitle>
      <FooterText>Contact: 012-507-0034</FooterText>
      <FooterText>
        Email: <FooterLink href="mailto:wanhaziqiskandar@gmail.com">wanhaziqiskandar@gmail.com</FooterLink>
      </FooterText>
      <FooterText>&copy; {new Date().getFullYear()} Wan Haziq Iskandar bin Wan Izhan. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
