"use client";
import React, { useEffect, useRef, useState } from 'react';
import SkillSet from '../components/skillSet';
import ExperienceSection from '../components/experienceSection'
import { TEXTS } from '../constants/texts';

export default function About() {
  const [activeTab, setActiveTab] = useState('aboutme');

  const handleNavbarBtnClick = (e, targetId) => {
    e.preventDefault();
    setActiveTab(targetId);
  };

  const dataScienceSkills = [
    { name: 'Python Programming', level: 80 },
    { name: 'Data Analysis', level: 60 },
    { name: 'SQL / MySQL', level: 55 },
  ];

  const blockchainSkills = [
    { name: 'Solidity', level: 85 },
    { name: 'Foundry / Hardhat', level: 80 },
    { name: 'Wagmi / RainbowKit / Viem', level: 70 },
    { name: 'Web3.js / Ethers', level: 60 }
  ]

  const frontendSkills = [
    { name: 'Kotlin', level: 85 },
    { name: 'Android Development', level: 80 },
    { name: 'React.js / Next.js', level: 70 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'Java', level: 60 }
  ]

  const backendSkills = [
    { name: 'Express.js', level: 60 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 25 },
  ]

  const experiences = [
    { title: TEXTS.BLOCKCHAIN_ENGINEER, content: TEXTS.PELITH_JOB_DESC, time: TEXTS.PELITH_TIME, company: TEXTS.PELITH_TW },
    { title: TEXTS.ANDROID_ENGINEER, content: TEXTS.KK_JOB_DESC, time: TEXTS.KK_TIME, company: TEXTS.KKCOMPANY_TW },
    { title: TEXTS.ANDROID_ENGINEER, content: TEXTS.GOOD_IDEA_JOB_DESC, time: TEXTS.GOOD_IDEA_TIME, company: TEXTS.GOODIDEA_TW }
  ]

  return (
    <div id="about" className="flex flex-row max-w-6xl h-screen mx-auto">
      <div className="justify-center flex flex-1 pt-24" data-aos="fade-up">
        <div className="bg-profile01 rounded-3xl w-3/4 bg-center bg-cover" />
      </div>

      <div className="flex flex-col flex-1 p-8 pt-32" data-aos="fade-left">
        <ul className="tabContainer">
          <li>
            <a
              href="#aboutme"
              onClick={(e) => handleNavbarBtnClick(e, 'aboutme')}
              className={activeTab === 'aboutme' ? 'tab-clicked' : 'tab'}
            >{TEXTS.ABOUT_ME}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleNavbarBtnClick(e, 'skills')}
              className={activeTab === 'skills' ? 'tab-clicked' : 'tab'}
            >
              {TEXTS.SKILLS}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavbarBtnClick(e, 'experience')}
              className={activeTab === 'experience' ? 'tab-clicked' : 'tab'}
            >
              {TEXTS.EXPERIENCE}
            </a>
          </li>
        </ul>

        <div className="mt-8">
          <div id="aboutme" className={`tab-content ${activeTab === 'aboutme' ? 'active' : ''}`}>
            <h1 className='text-3xl font-bold text-black'>{TEXTS.MY_STORY}</h1>
            <p className='text-gray-500'>{TEXTS.MY_STORY_CONTENT}</p>
          </div>


          <div id="skills" className={`skill-content ${activeTab === 'skills' ? 'active' : ''}`}>
            <SkillSet category="Blockchain Development" skillData={blockchainSkills}></SkillSet>
            <SkillSet category="Data Science" skillData={dataScienceSkills}></SkillSet>
            <SkillSet category="FrontEnd" skillData={frontendSkills}></SkillSet>
            <SkillSet category="Backend" skillData={backendSkills}></SkillSet>
          </div>


          <div id="experience" className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
            <ExperienceSection experiences={experiences}></ExperienceSection>
          </div>
        </div>
      </div>


    </div>
  );
}