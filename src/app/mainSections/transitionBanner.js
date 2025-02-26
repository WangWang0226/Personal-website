
import { TEXTS } from '../constants/texts';

export default function TransitionBanner() {
  return (
    <div className='transition-banner bg-bg-banner relative'>
      <div className='bg-black bg-opacity-20 w-full h-full absolute top-0 left-0'></div>
      <h1 className="banner-text">{TEXTS.MOTTO}</h1>
    </div>
  );
}

