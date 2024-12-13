"use client";
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';
import LinkButton from './linkButton';


export default function Home() {

  const handleResumeClick = () => {
    window.open('/doc/resume.pdf', '_blank'); 
  };

  return (
    <div id="home" className="flex flex-col h-screen bg-fixed bg-center bg-cover bg-bg_photo">
      <div className="flex flex-grow items-center justify-start">
        <div className="transform translate-x-[15vw] translate-y-[-5vw] text-start"> 
            <div className="flex flex-row mb-2"> 
              <LinkButton 
                href="https://www.linkedin.com/in/lichengwang/" 
                icon={<FaLinkedin className="mr-2" />} 
                text="LinkedIn" 
              />
              <LinkButton 
                href="https://github.com/WangWang0226" 
                icon={<FaGithub className="mr-2" />} 
                text="Github" 
              />
              <LinkButton 
                href="https://medium.com/@eeha8834" 
                icon={<FaMediumM className="mr-2" />} 
                text="Medium" 
              />
            </div>
            <h1 className="text-4xl font-bold mb-6">I'm Licheng Wang</h1>
            <h2 className="text-3xl font-bold mb-6">A Blockchain Developer |</h2>
            <h2 className="text-3xl font-bold mb-6">Data Science Student </h2>
            <button className="button-primary">Talk with my AI agent</button>
            <button
              onClick={handleResumeClick}
              className="button-second-primary mx-4">View my Resume
            </button>
            
        </div>
      </div>
    </div>
);
}

