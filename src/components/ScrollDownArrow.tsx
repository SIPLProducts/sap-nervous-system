import { ChevronDown } from 'lucide-react';

interface ScrollDownArrowProps {
  targetId: string;
}

const ScrollDownArrow = ({ targetId }: ScrollDownArrowProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20"
      aria-label={`Scroll to ${targetId}`}
    >
      <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
        Scroll
      </span>
      <div className="relative w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-colors flex justify-center">
        <div className="absolute top-2 w-1 h-2 bg-primary rounded-full animate-bounce" />
      </div>
      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary animate-bounce transition-colors" style={{ animationDelay: '0.1s' }} />
    </button>
  );
};

export default ScrollDownArrow;
