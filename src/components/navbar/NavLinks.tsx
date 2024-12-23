import { FC } from 'react';

interface NavLinksProps {
  onClose?: () => void;
}

export const NavLinks: FC<NavLinksProps> = ({ onClose }) => {
  const handleStakeClick = () => {
    window.open('https://www.pump.fun', '_blank');
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose?.();
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose?.();
    }
  };

  return (
    <>
      <button 
        onClick={scrollToHome}
        className="px-6 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
      >
        Home
      </button>
      <button 
        onClick={scrollToRoadmap}
        className="px-6 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
      >
        Roadmap
      </button>
      <button 
        onClick={handleStakeClick}
        className="px-6 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
      >
        Stake WZRD.tech
      </button>
    </>
  );
};