"use client";
import React, { useState, useEffect } from 'react';
import { TEXTS } from '../constants/texts';

export default function Services() {

  const servicesData = [
    {
      title: TEXTS.TITLE_3,
      content: TEXTS.CONTENT_3,
    },
    {
      title: TEXTS.TITLE_2,
      content: TEXTS.CONTENT_2,
    },
    {
      title: TEXTS.TITLE_1,
      content: TEXTS.CONTENT_1,
    },
  ]

  const ServiceItem = ({ title, content }) => {
    return (
      <div className='service-item'>
        <h1> {title} </h1>
        <h2> {content} </h2>
      </div>
    )
  }

  return (

    <div id="services" className="services-container">
      <h1 className='page-heading' data-aos="fade-in">{TEXTS.SERVICES}</h1>
      <div className='service-sub-container' data-aos="fade-up">
        {servicesData.map(({ title, content }) => (
          <ServiceItem title={title} content={content} />
        ))
        }
        </div>

      
    </div>
  )
}