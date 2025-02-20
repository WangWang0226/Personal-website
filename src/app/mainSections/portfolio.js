"use client";
import React, { useState, useMemo, useCallback } from "react";
import PortfolioItem from "../components/portfolioItem.js";
import { TEXTS } from "../constants/texts";
import classNames from "classnames";

const portfolioData = {
  blockchainRepo: [
    {
      bgUrl: "/images/demo-dual-invest.gif",
      title: TEXTS.DUAL_INVESTMENT,
      content: TEXTS.DUAL_INVESTMENT_SKILLS,
      repoUrl: TEXTS.DUAL_INVESTMENT_REPO_URL,
    },
    {
      bgUrl: "/images/share_prawn.jpg",
      title: TEXTS.SHARE_PRAWN,
      content: TEXTS.SHARE_PRAWN_SKILLS,
      repoUrl: TEXTS.SHARE_PRAWN_REPO_URL,
    },
    {
      bgUrl: "/images/airdrop.jpeg",
      title: TEXTS.TOKEN_AIRDROP,
      content: TEXTS.TOKEN_AIRDROP_SKILLS,
      repoUrl: TEXTS.TOKEN_AIRDROP_REPO_URL,
    },
    {
      bgUrl: "/images/sqrtLiquidityICO.jpeg",
      title: TEXTS.SQRT_LIQUIDITY_ICO,
      content: TEXTS.SQRT_LIQUIDITY_ICO_SKILLS,
      repoUrl: TEXTS.SQRT_LIQUIDITY_ICO_REPO_URL,
    },
    {
      bgUrl: "/images/DamnVulnerableDeFi.jpeg",
      title: TEXTS.HACK_VULNERABLE_DEFI,
      content: TEXTS.HACK_VULNERABLE_DEFI_SKILLS,
      repoUrl: TEXTS.HACK_VULNERABLE_DEFI_REPO_URL,
    },
  ],
  dataAnalysisRepo: [
    {
      bgUrl: "/images/reddit_sentiment_analysis.jpg",
      title: TEXTS.BTC_SENTIMENT_ANALYSIS,
      content: TEXTS.BTC_SENTIMENT_ANALYSIS_SKILLS,
      repoUrl: TEXTS.BTC_SENTIMENT_ANALYSIS_REPO_URL,
    },
  ],
  mlRepo: [
    {
      bgUrl: "/images/demo-talent-match.gif",
      title: TEXTS.TALENT_MATCH,
      content: TEXTS.TALENT_MATCH_SKILLS,
      repoUrl: TEXTS.TALENT_MATCH_REPO_URL,
    },
    {
      bgUrl: "/images/demo-coffeemaker.gif",
      title: TEXTS.COFFEE_MAKER,
      content: TEXTS.COFFEE_MAKER_SKILLS,
      repoUrl: TEXTS.COFFEE_MAKER_REPO_URL,
    },
  ],
};

const PortfolioCategories = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: "mlRepo", label: "AI/ML" },
    { id: "blockchainRepo", label: "Blockchain" },
    { id: "dataAnalysisRepo", label: "Data Analytics" },
  ];

  return (
    <ul className="pt-8 flex gap-8" data-aos="fade-up">
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
  const [activeTab, setActiveTab] = useState("mlRepo");

  const activeProjects = useMemo(() => portfolioData[activeTab], [activeTab]);

  return (
    <div
      id="portfolio"
      className="portfolio-container"
    >
      <h1 className="page-heading" data-aos="fade-in">
        {TEXTS.PORTFOLIO}
      </h1>

      <PortfolioCategories activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="portfolio-sub-container">
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
