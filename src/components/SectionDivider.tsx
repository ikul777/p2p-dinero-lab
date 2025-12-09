const SectionDivider = () => {
  return (
    <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden">
      {/* Gradient overlay from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
      
      {/* Center glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Decorative dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-primary/30"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
        <div className="w-1 h-1 rounded-full bg-primary/30"></div>
      </div>
      
      {/* Gradient overlay to bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;
