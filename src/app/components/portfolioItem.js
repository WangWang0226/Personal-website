// src/app/mainSections/PortfolioItem.js
import React from 'react';

const PortfolioItem = ({ bgUrl, title, content, repoUrl }) => {
    return (
        <div className="portfolio-item">
            <div className="portfolio-img rounded-3xl" style={{ backgroundImage: `url(${bgUrl})` }}></div>
            <div className="portfolio-overlay rounded-3xl"></div>
            <div className='portfolio-text-container'>
                <h1 className='portfolio-text-title'>
                    <a href={repoUrl}
                        target="_blank">{title}
                    </a>
                </h1>
                <span className='portfolio-text-content'>{content}</span>
            </div>
        </div>
    );
};

export default PortfolioItem;