"use client";
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';
import LinkButton from '../components/linkButton';
import { TEXTS } from '../constants/texts';

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK
const GITHUB = process.env.NEXT_PUBLIC_GITHUB_LINK
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN_LINK
const MEDIUM = process.env.NEXT_PUBLIC_MEDIUM_LINK
const TALK_TO_AI = process.env.NEXT_PUBLIC_AI_TWIN_LINK

export default function Home() {

  const handleResumeClick = () => {
    window.open(RESUME_LINK, '_blank');
  };
  const handleTalkToAiClick = () => {
    window.open(TALK_TO_AI, '_blank');
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-profile00">

      <div className="home-text-container">
        <div className="flex flex-row mb-2 ">
          <LinkButton
            href={LINKEDIN}
            icon={<FaLinkedin className="mr-2" />}
            text="LinkedIn"
          />
          <LinkButton
            href={GITHUB}
            icon={<FaGithub className="mr-2" />}
            text="Github"
          />
          <LinkButton
            href={MEDIUM}
            icon={<FaMediumM className="mr-2" />}
            text="Medium"
          />
        </div>
        <p className="text-5xl font-bold mb-6">{TEXTS.TITLE}</p>
        <h2 className="text-2xl font-bold mb-3">{TEXTS.BIO_1}</h2>
        <h2 className="text-2xl font-bold mb-10">{TEXTS.BIO_2}</h2>
        <div className='flex flex-row'>
          <button
            onClick={handleTalkToAiClick}
            className="button-primary">{TEXTS.TALK_TO_AI}
          </button>
          <button
            onClick={handleResumeClick}
            className="button-second-primary mx-4">{TEXTS.VIEW_RESUME}
          </button>
        </div>


      </div>
    </div>
  );
}

