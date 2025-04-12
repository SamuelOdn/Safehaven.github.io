
import pierres from '../img/pierres.png';
import dos from '../img/dos.jpeg';
import pied from '../img/pied.jpg';
import pistolet from '../img/pistolet.jpg';
import epilo from '../img/epilo.jpg';
import pedi from '../img/pedi.jpg';
import crane from '../img/crane.jpg';
import soins from '../img/soins.jpg';
import gomme from '../img/gomme.jpg';

const services = [
  {
    name: "Manucure & Pédicure",
    description: "Un soin complet pour vos mains et vos pieds. Profitez d’un moment de détente tout en prenant soin de votre beauté.",
    image: pedi,
  },
  {
    name: "Gommage corporel",
    description: "Un soin exfoliant qui élimine les cellules mortes et laisse votre peau douce et éclatante.",
    image: gomme,
  },
  {
    name: "Soins du corps",
    description: "Conçus pour nourrir, détendre et revitaliser votre peau. Une expérience bien-être sur mesure.",
    image: soins,
  },
  {
    name: "Épilation",
    description: "Un soin doux et efficace pour une peau lisse et soyeuse. Moins d’irritations, plus de confort.",
    image: epilo,
  },
  {
    name: "Massage aux pierres chaudes",
    description: "Chaleur des pierres volcaniques + techniques relaxantes = bien-être profond et durable.",
    image: pierres,
  },
  {
    name: "Massage du dos",
    description: "Soulagez les tensions musculaires et offrez-vous une véritable pause relaxante.",
    image: dos,
  },
  {
    name: "Massage crânien",
    description: "Libère les tensions du cuir chevelu et favorise la circulation. Une sensation de légèreté totale.",
    image: crane,
  },
  {
    name: "Massage au pistolet",
    description: "Des vibrations puissantes pour détendre et revitaliser vos muscles fatigués.",
    image: pistolet,
  },
  {
    name: "Massage des pieds et mains",
    description: "Stimule la circulation et procure un bien-être profond via les zones réflexes.",
    image: pied,
  },
];

const Services = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Nos Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;