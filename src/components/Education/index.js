import React from 'react';
import styled from 'styled-components';
import { education } from '../../data/constants'; // Adjust the path as needed

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

const EducationContainer = styled.div`
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

const EducationCard = styled.div`
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

const EducationImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const SchoolName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
  text-align: center;
`;

const Date = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 8px;
`;

const Grade = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Degree = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>Here is a summary of my educational background.</Desc>
        <EducationContainer>
          {education.map((edu) => (
            <EducationCard key={edu.id}>
              <EducationImage src={edu.img} alt={edu.school} />
              <SchoolName>{edu.school}</SchoolName>
              <Date>{edu.date}</Date>
              {edu.grade && <Grade>Grade: {edu.grade}</Grade>}
              {edu.foundation && <Degree>{edu.foundation}</Degree>}
              {edu.degree && <Degree>{edu.degree}</Degree>}
            </EducationCard>
          ))}
        </EducationContainer>
      </Wrapper>
    </Container>
  );
};

export default Education;
