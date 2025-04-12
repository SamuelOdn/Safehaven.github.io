import SO from '../img/SO.jpg';
import EA from '../img/EA.jpg';
import MA from '../img/MA.png';

const testimonials = [
  {
    name: "Samuel ODUNLAMI",
    text: "L'expérience la plus relaxante que j'ai jamais eue. Lauris est une véritable professionnelle en la matière!",
    role: "Client régulier",
    image: SO,
  },
  {
    name: "Michael AGBO",
    text: "Safe Haven est devenu mon lieu de prédilection pour soulager le stress. Je le recommande vivement !",
    role: "Client fidèle",
    image: MA,
  },
  {
    name: "Emma AGOSSOU",
    text: "L'attention portée aux détails et le niveau de soins sont exceptionnels. Un véritable sanctuaire.",
    role: "Nouveau client",
    image: EA,
  },
];

const Testimonials = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Témoignages</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;