import React from 'react';

const PortfolioItem = ({ bgUrl, title, content, repoUrl }) => {
    const handleClick = () => {
        window.open(repoUrl, "_blank");
    };

    return (
        <div onClick={handleClick} className="portfolio-item cursor-pointer" data-aos="flip-left">
            <div className="portfolio-img rounded-3xl"  style={{ backgroundImage: `url(${bgUrl})` }}></div>
            <div className="portfolio-overlay rounded-3xl"></div>
            <div className='portfolio-text-container'>
                <h1 className='portfolio-text-title'>{title}</h1>
                <span className='portfolio-text-content'>{content}</span>
            </div>
        </div>
    );
};

export default PortfolioItem;