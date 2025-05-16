import PP from '../img/PP.jpg';

const testimonials = [
  {
    name: "Samuel ODUNLAMI",
    text: "L'expérience la plus relaxante que j'ai jamais eue. Lauris est une véritable professionnelle en la matière!",
    role: "Client régulier",
    image: PP,
  },
  {
    name: "Michael AGBO",
    text: "Safe Haven est devenu mon lieu de prédilection pour soulager le stress. Je le recommande vivement !",
    role: "Client fidèle",
    image: PP,
  },
  {
    name: "Emma AGOSSOU",
    text: "L'attention portée aux détails et le niveau de soins sont exceptionnels. Un véritable sanctuaire.",
    role: "Nouveau client",
    image: PP,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={testimonial.image} // Placeholder image, replace with actual image if available
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 mx-auto" />
            <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
            <div>
              <p className="text-gray-500 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-end text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Testimonials;