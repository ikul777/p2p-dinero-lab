
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonialImages = [
  "/lovable-uploads/0f454836-1e24-4f21-83cb-65c872fb6aa7.png",
  "/lovable-uploads/c6b86e04-3252-4056-9815-619cae704a5c.png",
  "/lovable-uploads/65363d3f-4724-48ef-8920-947b2b722e15.png",
  "/lovable-uploads/cf8b8384-701c-491b-97e5-682e575a0369.png",
  "/lovable-uploads/26d2bf9f-029d-416b-9762-a2dd1007d399.png",
  "/lovable-uploads/9566adfe-ce94-47b5-9e3d-c4ac797dcf6d.png",
  "/lovable-uploads/ad13f5ac-2ce6-4e17-9f0a-f089abd3284d.png",
  "/lovable-uploads/226ac4bd-92e1-4cc1-a355-4d2d9a3a39bc.png",
  "/lovable-uploads/49f196cc-7ef6-4c8d-9390-a3a2affb6ce8.png",
  "/lovable-uploads/d6e8365e-1235-4586-9733-bde874b2d8fd.png",
  "/lovable-uploads/b1f34697-5bdd-484e-9479-a6f7ba2eb281.png"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
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
          
          {/* Testimonials carousel */}
          <div className="reveal-animation">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonialImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="glass-card overflow-hidden rounded-xl border border-gray-800 h-full">
                        <img 
                          src={image} 
                          alt={`Testimonial screenshot ${index + 1}`} 
                          className="w-full h-[300px] object-cover object-center"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8">
                <CarouselPrevious className="relative mr-2 left-0 translate-y-0 bg-dinero-dark hover:bg-dinero-red border-gray-700 hover:border-dinero-red" />
                <CarouselNext className="relative ml-2 right-0 translate-y-0 bg-dinero-dark hover:bg-dinero-red border-gray-700 hover:border-dinero-red" />
              </div>
            </Carousel>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 reveal-animation">
            <a 
              href="#join" 
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
