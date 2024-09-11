import React from 'react';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import styled from 'styled-components';
import HeroImg from '../../assets/HeroImages/hero-image.jpg';

const spacing = {
  small: '2px',
  medium: '4px',
  large: '8px',
};

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: calc(${spacing.large} * 10) calc(${spacing.large} * 5);
  @media (max-width: 960px) {
    padding: calc(${spacing.large} * 8) calc(${spacing.large} * 2);
  }
  @media (max-width: 640px) {
    padding: calc(${spacing.large} * 4) calc(${spacing.large} * 2);
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: calc(${spacing.medium} * 2);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: calc(${spacing.large} * 4);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: calc(${spacing.large} * 4);
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: calc(${spacing.large} * 1.5);
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: calc(${spacing.large} * 10);
  }
  @media (max-width: 640px) {
    margin-bottom: calc(${spacing.large} * 4);
  }
`;

export const Img = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 50%;
  border: calc(${spacing.small} * 2) solid ${({ theme }) => theme.primary};
  box-shadow: 0 calc(${spacing.medium} * 2) calc(${spacing.medium} * 4) rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 calc(${spacing.medium} * 4) calc(${spacing.medium} * 8) rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-height: 320px;
  }

  @media (max-width: 640px) {
    max-height: 240px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: calc(${spacing.large} * 2);
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: calc(${spacing.large});
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: calc(${spacing.large} * 2);
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: calc(${spacing.large} * 6);
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: calc(${spacing.large} * 2);
  color: ${({ theme }) => theme.white};
  border-radius: calc(${spacing.large} * 3);
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(135deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: calc(${spacing.large} * 1) calc(${spacing.large} * 2) calc(${spacing.large} * 4) rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(135deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
    box-shadow: calc(${spacing.large} * 2) calc(${spacing.large} * 4) calc(${spacing.large} * 8) rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    padding: calc(${spacing.large} * 2 - ${spacing.small});
    font-size: 18px;
    max-width: 100%;
  }
`;

export const LinkedInButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: calc(${spacing.large} * 2);
  color: ${({ theme }) => theme.white};
  border-radius: calc(${spacing.large} * 3);
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(135deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: calc(${spacing.large} * 1) calc(${spacing.large} * 2) calc(${spacing.large} * 4) rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(135deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
    box-shadow: calc(${spacing.large} * 2) calc(${spacing.large} * 4) calc(${spacing.large} * 8) rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    padding: calc(${spacing.large} * 2 - ${spacing.small});
    font-size: 18px;
    max-width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: calc(${spacing.large});
  margin-top: calc(${spacing.large} * 2);
  @media (max-width: 640px) {
    flex-direction: column;
    gap: calc(${spacing.large});
  }
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          {/* <HeroBgAnimation /> */}
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, my name is <br />
              <Typewriter
                options={{
                  strings: [Bio.name],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ButtonContainer>
              <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton>
              <LinkedInButton href={Bio.linkedin} target="_blank">LinkedIn</LinkedInButton>
            </ButtonContainer>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" /> {/* Display image on the right */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
