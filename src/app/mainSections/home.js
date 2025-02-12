"use client";
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';
import LinkButton from '../components/linkButton';
import { TEXTS } from '../constants/texts';

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK

export default function Home() {

  const handleResumeClick = () => {
    window.open(RESUME_LINK, '_blank'); 
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-profile00">

      <div className="home-text-container">
        <div className="flex flex-row mb-2 ">
          <LinkButton
            href={TEXTS.LINKEDIN_LINK}
            icon={<FaLinkedin className="mr-2" />}
            text="LinkedIn"
          />
          <LinkButton
            href={TEXTS.GITHUB_LINK}
            icon={<FaGithub className="mr-2" />}
            text="Github"
          />
          <LinkButton
            href={TEXTS.GITHUB_LINK}
            icon={<FaMediumM className="mr-2" />}
            text="Medium"
          />
        </div>
        <p className="text-5xl font-bold mb-6">{TEXTS.TITLE}</p>
        <h2 className="text-2xl font-bold mb-3">{TEXTS.BIO_1}</h2>
        <h2 className="text-2xl font-bold mb-10">{TEXTS.BIO_2}</h2>
        <div className='flex flex-row'>
          <button className="button-primary">{TEXTS.TALK_TO_AI}</button>
          <button
            onClick={handleResumeClick}
            className="button-second-primary mx-4">{TEXTS.VIEW_RESUME}
          </button>
        </div>


      </div>
    </div>
  );
}

