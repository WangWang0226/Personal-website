"use client";
import React, { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { TEXTS } from '../constants/texts';

export default function Portfolio() {
  return (
    
    <div id="portfolio" className="flex flex-col max-w-4xl mx-auto p-16">
      <h1 className='flex justify-center pt-8 text-secondary font-bold text-xl'>{TEXTS.PORTFOLIO}</h1>
      <h1 className='flex justify-center p-8 text-black font-bold text-3xl'>{TEXTS.MY_RECENT_WORK}</h1>
      <div className="portfolio-container">

        <PortfolioItem
          bgUrl="/images/reddit_sentiment_analysis.jpg"
          title={TEXTS.BTC_SENTIMENT_ANALYSIS}
          content={TEXTS.DATA_ANALYSIS}
          repoUrl={TEXTS.BTC_SENTIMENT_ANALYSIS_REPO_URL}
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
    </div>
  )
}