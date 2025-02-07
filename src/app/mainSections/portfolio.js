"use client";
import React, { useState, useMemo, useCallback } from "react";
import PortfolioItem from "../components/portfolioItem.js";
import { TEXTS } from "../constants/texts";
import classNames from "classnames";

const portfolioData = {
  blockchainRepo: [
    {
      bgUrl: "/images/dual_investment.jpeg",
      title: TEXTS.DUAL_INVESTMENT,
      content: TEXTS.FULL_STACK_PROJECT,
      repoUrl: TEXTS.DUAL_INVESTMENT_REPO_URL,
    },
    {
      bgUrl: "/images/share_prawn.jpg",
      title: TEXTS.SHARE_PRAWN,
      content: TEXTS.BLOCKCHAIN_SMART_CONTRACT,
      repoUrl: TEXTS.SHARE_PRAWN_REPO_URL,
    },
    {
      bgUrl: "/images/airdrop.jpeg",
      title: TEXTS.TOKEN_AIRDROP,
      content: TEXTS.BLOCKCHAIN_SMART_CONTRACT,
      repoUrl: TEXTS.TOKEN_AIRDROP_REPO_URL,
    },
    {
      bgUrl: "/images/sqrtLiquidityICO.jpeg",
      title: TEXTS.SQRT_LIQUIDITY_ICO,
      content: TEXTS.BLOCKCHAIN_SMART_CONTRACT,
      repoUrl: TEXTS.SQRT_LIQUIDITY_ICO_REPO_URL,
    },
    {
      bgUrl: "/images/DamnVulnerableDeFi.jpeg",
      title: TEXTS.HACK_VULNERABLE_DEFI,
      content: TEXTS.BLOCKCHAIN_SECURITY,
      repoUrl: TEXTS.HACK_VULNERABLE_DEFI_REPO_URL,
    },
  ],
  dataAnalysisRepo: [
    {
      bgUrl: "/images/reddit_sentiment_analysis.jpg",
      title: TEXTS.BTC_SENTIMENT_ANALYSIS,
      content: TEXTS.DATA_ANALYSIS,
      repoUrl: TEXTS.BTC_SENTIMENT_ANALYSIS_REPO_URL,
    },
  ],
  mlRepo: [],
};

const PortfolioCategories = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: "blockchainRepo", label: "Blockchain Projects" },
    { id: "dataAnalysisRepo", label: "Data Analysis Projects" },
    { id: "mlRepo", label: "AI/ML Projects" },
  ];

  return (
    <ul className="pt-8 flex gap-4" data-aos="fade-up">
      {categories.map(({ id, label }) => (
        <li className="cursor-pointer">
          <a
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(id);
            }}
            className={classNames(
              "portfolio-category-title",
              activeTab === id && "portfolio-category-title-clicked"
            )}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("blockchainRepo");

  const activeProjects = useMemo(() => portfolioData[activeTab], [activeTab]);

  return (
    <div
      id="portfolio"
      className="flex flex-col items-center max-w-4xl mx-auto p-16 min-h-screen"
    >
      <h1 className="page-heading" data-aos="fade-in">
        {TEXTS.PORTFOLIO}
      </h1>

      <PortfolioCategories activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="portfolio-container">
        {activeProjects.length > 0 ? (
          activeProjects.map(({ bgUrl, title, content, repoUrl }) => (
            <PortfolioItem
              bgUrl={bgUrl}
              title={title}
              content={content}
              repoUrl={repoUrl}
            />
          ))
        ) : (
          <p className="text-gray-500 pt-8">No projects available in this category.</p>
        )}
      </div>
    </div>
  );
}
