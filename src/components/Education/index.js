
import React from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
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
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Skill = styled.span`
  background: #222a35;
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 14px;
`;

const EducationCardCustom = ({ education }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
      <img src={education.img} alt={education.school} style={{ width: '60px', height: '60px', borderRadius: '10%', objectFit: 'cover' }} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{ fontWeight: 600, fontSize: 18 }}>{education.school}</div>
        <div style={{ fontWeight: 400, fontSize: 16, color: '#aaa' }}>{education.degree}</div>
        <div style={{ fontSize: 14, color: '#aaa' }}>{education.date}</div>
        <div style={{ fontSize: 14, color: '#aaa' }}><b>Grade:</b> {education.grade}</div>
      </div>
    </div>
    <div style={{ marginTop: 8 }}>{education.desc}</div>
  </div>
);

const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <VerticalTimeline>
                        {education.map((edu, index) => (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{ background: 'rgba(17, 25, 40, 0.83)', color: '#fff', boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', border: '1px solid rgba(255,255,255,0.125)', borderRadius: 6 }}
                                contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.3)' }}
                                date={edu.date}
                                icon={<img src={edu.img} alt={edu.school} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />}
                                iconStyle={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <EducationCardCustom education={edu} />
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index