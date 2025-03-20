
import React from 'react';

const lifestyleImages = [
  {
    src: "/lovable-uploads/49f196cc-7ef6-4c8d-9390-a3a2affb6ce8.png",
    alt: "Person sitting in a luxury car using a smartphone",
    caption: "Заробляй навіть за кермом"
  },
  {
    src: "/lovable-uploads/d6e8365e-1235-4586-9733-bde874b2d8fd.png",
    alt: "Luxury BMW car at night",
    caption: "Можливості, які відкриває P2P"
  },
  {
    src: "/lovable-uploads/b1f34697-5bdd-484e-9479-a6f7ba2eb281.png",
    alt: "Person holding cash in a car",
    caption: "Реальний прибуток вже зараз"
  },
  {
    src: "/lovable-uploads/ad13f5ac-2ce6-4e17-9f0a-f089abd3284d.png",
    alt: "Person in bathrobe enjoying a view in luxury resort",
    caption: "Життя, яке ти заслуговуєш"
  },
  {
    src: "/lovable-uploads/226ac4bd-92e1-4cc1-a355-4d2d9a3a39bc.png",
    alt: "Person looking at city view from high-rise building",
    caption: "Нові горизонти з Dinero Lab"
  }
];

const LifestyleShowcase = () => {
  return (
    <section className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background gradient */}
      <div className="absolute -top-[30%] left-[10%] w-[40%] h-[70%] bg-gradient-to-br from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
            Стиль життя
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Можливості, які відкриває P2P-арбітраж
          </h2>
          <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
          <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
            Приєднуйся до спільноти та досягай успіху з нами
          </p>
        </div>
        
        {/* Grid layout for lifestyle images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-animation">
          {lifestyleImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl glass-card ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                  index === 0 ? 'h-full min-h-[400px]' : 'h-64 md:h-80'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-white font-medium text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleShowcase;
