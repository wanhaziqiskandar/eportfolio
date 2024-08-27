// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/constants'; // Adjust the path as needed

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExperiencesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: space-between; // Evenly distribute cards across the row
  padding: 20px;
  @media (max-width: 960px) {
    justify-content: center; // Center cards when the screen size is smaller
  }
`;




const ExperienceCard = styled.div`
  flex: 1 1 45%; // Each card takes 45% of the width, allowing 2 cards per row with some gap
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    flex: 1 1 100%; // Full width for small screens
    padding: 10px 36px;
  }
`;



const ExperienceTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const ExperienceDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const ExperienceDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 20px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const SkillItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const CompanyLogo = styled.img`
  width: 150px;
  height: auto;
  margin: 0 auto 16px auto; // Center the logo horizontally
  display: block; // Ensures image is treated as a block for margin auto to work
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
`;

// Define logos mapping
const skillLogos = {
    TM: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TM_Research_and_Development_Logo.png',
    Docker: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
    Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    Airflow: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*BEGGWVM2rQx438Fevmz1Fw.png',
    VSCode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519', // Fixed the quotes issue
  };

  const Experience = () => {
    return (
      <Container id="experiences">
        <Wrapper>
          <Title>Experience</Title>
          <Desc>
            Here is my professional experiences where I have applied my skills and knowledge.
          </Desc>
          <ExperiencesContainer>
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id}>
                <CompanyLogo src={experience.logo} alt={`${experience.company} logo`} />
                <ExperienceTitle>{experience.company}</ExperienceTitle>
                <ExperienceTitle>{experience.role}</ExperienceTitle>
                <ExperienceDesc>{experience.desc}</ExperienceDesc>
                <ExperienceDate>{experience.date}</ExperienceDate>
                <SkillList>
                  {experience.skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={skillLogos[skill]} alt={skill} />
                      {skill}
                    </SkillItem>
                  ))}
                </SkillList>
              </ExperienceCard>
            ))}
          </ExperiencesContainer>
        </Wrapper>
      </Container>
    );
  };
  
  export default Experience;