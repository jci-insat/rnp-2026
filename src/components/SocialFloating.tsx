import { Facebook, Instagram } from "lucide-react";

const SocialFloating = () => {
  return (
    <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      <a
        href="https://www.facebook.com/1RNP2026/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/1RNP2026/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialFloating;
