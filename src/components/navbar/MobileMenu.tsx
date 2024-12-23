import { FC } from 'react';
import { X } from "lucide-react";
import { NavLinks } from './NavLinks';
import { WalletButton } from './WalletButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-jatt-darker/95 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <img 
          src="/lovable-uploads/720bfe14-7d72-4c31-ac28-ff74302131bb.png"
          alt="WZRD.tech Logo"
          className="h-24 w-auto object-contain mb-8 filter drop-shadow-[0_0_8px_rgba(255,68,68,0.6)]"
        />
        <NavLinks onClose={onClose} />
        <div className="mt-8">
          <WalletButton />
        </div>
      </div>
    </div>
  );
};