
const testimonialImages = [
  "/lovable-uploads/0f454836-1e24-4f21-83cb-65c872fb6aa7.png",
  "/lovable-uploads/c6b86e04-3252-4056-9815-619cae704a5c.png",
  "/lovable-uploads/65363d3f-4724-48ef-8920-947b2b722e15.png",
  "/lovable-uploads/cf8b8384-701c-491b-97e5-682e575a0369.png",
  "/lovable-uploads/26d2bf9f-029d-416b-9762-a2dd1007d399.png",
  "/lovable-uploads/9566adfe-ce94-47b5-9e3d-c4ac797dcf6d.png"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Відгуки
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Реальні кейси клієнтів
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Перевірені результати від учасників нашого ком'юніті
            </p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-animation">
            {testimonialImages.map((image, index) => (
              <div key={index} className="glass-card overflow-hidden rounded-xl border border-gray-800 hover:border-dinero-red/50 transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={image} 
                  alt={`Testimonial screenshot ${index + 1}`} 
                  className="w-full h-auto object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 reveal-animation">
            <a 
              href="https://t.me/+fsuDNjshEhplMGMy" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-dinero-light bg-dinero-red hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium text-lg button-glow"
            >
              Більше кейсів
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
