
import { TEXTS } from '../constants/texts';

export default function TransitionBanner() {
  return (
    <div className='transition-banner bg-profile02 relative'>
      <div className='bg-secondary bg-opacity-80 w-full h-full absolute top-0 left-0'></div>
      <h1 className="text-white font-bold text-2xl z-10">{TEXTS.MOTTO}</h1>
    </div>
  );
}

