
const promotions = [
  {
    title: "Spécial nouveau client",
    description: "Profitez de 15 % de réduction sur votre première séance de massage chez Safe Haven.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+un+nouveau+client+intéressé(e)+par+votre+offre",
    buttonText: "Je profite",
  },
  {
    title: "Forfait massage en couple",
    description: "Offrez-vous une expérience de massage relaxante avec un être cher et économisez 10 %.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+intéressé(e)+par+le+forfait+massage+en+couple",
    buttonText: "Je m'abonne",
  },
  {
    title: "Abonnement mensuel",
    description: "Économisez 15 % sur tous les services grâce à notre programme d’adhésion.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+intéressé(e)+par+l'abonnement+mensuel",
    buttonText: "En savoir plus",
  },
  {
    title: "Programme de fidélité",
    description: "Réservez 5 massages et obtenez le 6ème à moitié prix !",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+souhaite+m'inscrire+à+votre+programme+de+fidélité",
    buttonText: "Je reserve",
  },
];

function Promotions() {
  return (

    <section id="promotions" className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <h2 className="text-3xl font-bold text-center mb-12">Offres spéciales</h2> 
          <div className="grid md:grid-cols-2 gap-8"> 
            {promotions.map((promo, index) => (    
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <a
                  href={promo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition duration-200"
                > 
                  {promo.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  );
};

export default Promotions;