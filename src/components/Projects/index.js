// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants'; // Adjust the path as needed
import { FaGithub } from 'react-icons/fa';

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

const ProjectsContainer = styled.div`
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

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const TagItem = styled.li`
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

const TagImage = styled.img`
  width: 24px;
  height: 24px;
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 16px;
  }
`;

const GitHubIcon = styled(FaGithub)`
  font-size: 22px;
  color: ${({ theme }) => theme.white}; 
  transition: color 0.3s ease-in-out;

  ${GitHubButton}:hover & {
    color: ${({ theme }) => theme.accent}; /* Change icon color on hover */
  }

  margin-right: 8px; /* Space between icon and text */
`;

const skillLogos = {
  Laravel: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
  PHP: 'https://www.svgrepo.com/show/303656/php-logo.svg',
  HTML: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
  CSS: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
  MySQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  VSCode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
  ReactJs: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
  Bootstrap: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
};


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of the projects I've worked on, showcasing my skills and expertise.
        </Desc>
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
              <TagList>
                {project.tags.map((tag, index) => (
                  <TagItem key={index}>
                    {skillLogos[tag] && <TagImage src={skillLogos[tag]} alt={tag} />}
                    {tag}
                  </TagItem>
                ))}
              </TagList>
              <GitHubButton href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                View on GitHub
              </GitHubButton>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
