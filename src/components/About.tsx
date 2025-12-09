const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16 reveal-animation">
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Про нас</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-foreground">Хто ми і що </span>
              <span className="text-gradient">робимо</span>
            </h2>
          </div>
          
          {/* Placeholder content */}
          <div className="reveal-animation">
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
              <p className="text-muted-foreground text-sm sm:text-base">
                Контент зʼявиться незабаром...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;