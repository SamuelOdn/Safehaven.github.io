
const promotions = [
  {
    title: "Spécial nouveau client",
    description: "Profitez de 15 % de réduction sur votre première séance de massage chez Safe Haven.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+un+nouveau+client+intéressé(e)+par+votre+offre",
  },
  {
    title: "Forfait massage en couple",
    description: "Offrez-vous une expérience de massage relaxante avec un être cher et économisez 10 %.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+intéressé(e)+par+le+forfait+massage+en+couple",
  },
  {
    title: "Abonnement mensuel",
    description: "Économisez 15 % sur tous les services grâce à notre programme d’adhésion.",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+suis+intéressé(e)+par+l'abonnement+mensuel",
  },
  {
    title: "Programme de fidélité",
    description: "Réservez 5 massages et obtenez le 6ème à moitié prix !",
    link: "https://wa.me/+22996337000?text=Bonjour,+Je+souhaite+m'inscrire+à+votre+programme+de+fidélité",
  },
];

const Promotions = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Offres Spéciales</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
            <p className="text-gray-600 mb-4">{promo.description}</p>
            <a
              href={promo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700"
            >
              Je veux en profiter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;