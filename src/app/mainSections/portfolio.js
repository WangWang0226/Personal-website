"use client";
import React, { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { TEXTS } from '../constants/texts';

export default function Portfolio() {

  const [activeTab, setActiveTab] = useState('blockchainRepo');

  const handleNavbarBtnClick = (e, targetId) => {
    e.preventDefault();
    setActiveTab(targetId);
  };

  return (
    <div id="portfolio" className="flex flex-col items-center max-w-4xl mx-auto p-16 min-h-screen">
      <h1 className='pt-8 text-secondary font-bold text-xl' data-aos="fade-up">{TEXTS.PORTFOLIO}</h1>
      <h1 className='pt-8 text-black font-bold text-3xl' data-aos="fade-up">{TEXTS.MY_RECENT_WORK}</h1>
      <ul className="pt-8 portfolio-category-title-container" data-aos="fade-up">
        <li>
          <a
            href="#blockchainRepo"
            onClick={(e) => handleNavbarBtnClick(e, 'blockchainRepo')}
            className={activeTab === 'blockchainRepo' ? 'portfolio-category-title-clicked' : 'portfolio-category-title'}
          >Blockchain Projects
          </a>
        </li>
        <li>
          <a
            href="#dataAnalysisRepo"
            onClick={(e) => handleNavbarBtnClick(e, 'dataAnalysisRepo')}
            className={activeTab === 'dataAnalysisRepo' ? 'portfolio-category-title-clicked' : 'portfolio-category-title'}
          >
            Data Analysis Projects
          </a>
        </li>
        <li>
          <a
            href="#mlRepo"
            onClick={(e) => handleNavbarBtnClick(e, 'mlRepo')}
            className={activeTab === 'mlRepo' ? 'portfolio-category-title-clicked' : 'portfolio-category-title'}
          >
            AI/ML Projects
          </a>
        </li>
      </ul>

      <div className={`portfolio-container ${activeTab === 'blockchainRepo' ? 'active' : ''}`}>
        <PortfolioItem
          bgUrl="/images/dual_investment.jpeg"
          title={TEXTS.DUAL_INVESTMENT}
          content={TEXTS.FULL_STACK_PROJECT}
          repoUrl={TEXTS.DUAL_INVESTMENT_REPO_URL}
        />

        <PortfolioItem
          bgUrl="/images/share_prawn.jpg"
          title={TEXTS.SHARE_PRAWN}
          content={TEXTS.BLOCKCHAIN_SMART_CONTRACT}
          repoUrl={TEXTS.SHARE_PRAWN_REPO_URL}
        />

        <PortfolioItem
          bgUrl="/images/airdrop.jpeg"
          title={TEXTS.TOKEN_AIRDROP}
          content={TEXTS.BLOCKCHAIN_SMART_CONTRACT}
          repoUrl={TEXTS.TOKEN_AIRDROP_REPO_URL}
        />

        <PortfolioItem
          bgUrl="/images/sqrtLiquidityICO.jpeg"
          title={TEXTS.SQRT_LIQUIDITY_ICO}
          content={TEXTS.BLOCKCHAIN_SMART_CONTRACT}
          repoUrl={TEXTS.SQRT_LIQUIDITY_ICO_REPO_URL}
        />

        <PortfolioItem
          bgUrl="/images/DamnVulnerableDeFi.jpeg"
          title={TEXTS.HACK_VULNERABLE_DEFI}
          content={TEXTS.BLOCKCHAIN_SECURITY}
          repoUrl={TEXTS.HACK_VULNERABLE_DEFI_REPO_URL}
        />

      </div>


      <div className={`portfolio-container ${activeTab === 'dataAnalysisRepo' ? 'active' : ''}`}>

        <PortfolioItem
          bgUrl="/images/reddit_sentiment_analysis.jpg"
          title={TEXTS.BTC_SENTIMENT_ANALYSIS}
          content={TEXTS.DATA_ANALYSIS}
          repoUrl={TEXTS.BTC_SENTIMENT_ANALYSIS_REPO_URL}
        />
      </div>

      <div className={`portfolio-container ${activeTab === 'mlRepo' ? 'active' : ''}`}>
      </div>
    </div>
  )
}