"use client";
import React, { useEffect, useRef, useState } from 'react';
import SkillSet from '../components/skillSet';
import ExperienceSection from '../components/experienceSection'
import { TEXTS } from '../constants/texts';

export default function About() {
  const [activeTab, setActiveTab] = useState('aboutme'); // 默认选中的标签

  const handleNavbarBtnClick = (e, targetId) => {
    e.preventDefault(); // 阻止默认行为
    setActiveTab(targetId); // 设置当前活动标签
  };

  const dataScienceSkills = [
    { name: 'Python Programming', level: 80, color: 'lightBlue' },
    { name: 'SQL / MySQL', level: 55, color: 'lightOrange' },
    { name: 'Data Analysis', level: 60, color: 'lightGreen' }
  ];

  const blockchainSkills = [
    { name: 'Solidity', level: 85, color: 'lightRed' },
    { name: 'Foundry / Hardhat', level: 80, color: 'lightOrange' },
    { name: 'Web3.js / Ethers', level: 50, color: 'lightPink' }
  ]

  const otherSkills = [
    { name: 'React', level: 60, color: 'primary' },
    { name: 'JavaScript', level: 50, color: 'lightPurple' },
    { name: 'Java', level: 50, color: 'lightBlue' },
    { name: 'Kotlin', level: 85, color: 'lightGreen' },
    { name: 'Android Development', level: 70, color: 'lightBrown' },
    { name: 'MongoDB', level: 25, color: 'lightRed' }
  ]

  const experiences = [
    { title: TEXTS.BLOCKCHAIN_ENGINEER, content: TEXTS.PELITH_JOB_DESC, time: TEXTS.PELITH_TIME, company: TEXTS.PELITH_TW },
    { title: TEXTS.ANDROID_ENGINEER, content: TEXTS.KK_JOB_DESC, time: TEXTS.KK_TIME, company: TEXTS.KKCOMPANY_TW },
    { title: TEXTS.ANDROID_ENGINEER, content: TEXTS.GOOD_IDEA_JOB_DESC, time: TEXTS.GOOD_IDEA_TIME, company: TEXTS.GOODIDEA_TW }

  ]

  return (
    <div id="about" className="flex flex-row max-w-6xl h-screen mx-auto">
      <div className="justify-center flex flex-1 pt-24" data-aos="fade-up">
        <div className="bg-profile01 rounded-3xl w-3/4 bg-center bg-cover"/>
      </div>

      <div className="flex flex-col flex-1 p-8 pt-32" data-aos="fade-left">
        <ul className="tabContainer">
          <li>
            <a
              href="#aboutme"
              onClick={(e) => handleNavbarBtnClick(e, 'aboutme')}
              className={activeTab === 'aboutme' ? 'tab-clicked' : 'tab'}
            >about me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleNavbarBtnClick(e, 'skills')}
              className={activeTab === 'skills' ? 'tab-clicked' : 'tab'}
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavbarBtnClick(e, 'experience')}
              className={activeTab === 'experience' ? 'tab-clicked' : 'tab'}
            >
              experience
            </a>
          </li>
        </ul>

        <div className="mt-8">
          <div id="aboutme" className={`tab-content ${activeTab === 'aboutme' ? 'active' : ''}`}>
            <h1 className='text-3xl font-bold text-black'>{TEXTS.MY_STORY}</h1>
            <p className='text-gray-500'>{TEXTS.MY_STORY_CONTENT}</p>
          </div>


          <div id="skills" className={`skill-content ${activeTab === 'skills' ? 'active' : ''}`}>
            <SkillSet category="Data Science" skillData={dataScienceSkills}></SkillSet>
            <SkillSet category="Blockchain Development" skillData={blockchainSkills}></SkillSet>
            <SkillSet category="Others" skillData={otherSkills}></SkillSet>
          </div>


          <div id="experience" className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
            <ExperienceSection experiences={experiences}></ExperienceSection>
          </div>
        </div>
      </div>


    </div>
  );
}