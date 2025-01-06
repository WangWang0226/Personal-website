"use client";
import React, { useState, useEffect } from 'react';
import { TEXTS } from '../constants/texts';

export default function Services() {
  return (
    
    <div id="services" className="flex flex-col max-w-4xl mx-auto p-16">
      <h1 className='flex justify-center pt-8 text-secondary font-bold text-xl'>{TEXTS.SERVICES}</h1>
    </div>
  )
}