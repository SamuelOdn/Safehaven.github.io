import IMG4 from '../img/IMG4.jpg';
import IMG31 from '../img/IMG31.png';
import IMG33 from '../img/IMG33.png';

export type BlogArticleProps = {
  img?: string;
  title: string;
  content?: string;
  contentP2?: string;
  contentP3?: string;
  index: number;
};

export const blogs: BlogArticleProps[] = [
  {
    index: 1,
    img: IMG33,
    title: "Avantages du massage régulier",
    content: "Le massage régulier offre de nombreux avantages pour la santé physique et mentale. En plus de détendre les muscles tendus et de soulager les douleurs, il peut également améliorer la circulation sanguine, réduire le stress et l'anxiété, et favoriser un meilleur sommeil.",
    contentP2: "Intégrer des séances de massage régulières dans votre routine de bien-être peut contribuer significativement à une meilleure qualité de vie. Que vous optiez pour un massage suédois, un massage profond des tissus ou une autre technique, les bienfaits cumulatifs sont indéniables.",
    contentP3: "Considérez le massage non seulement comme un luxe occasionnel, mais comme un investissement dans votre santé à long terme."
  },
  {
    index: 2,
    img: IMG31,
    title: "Techniques de soulagement du stress",
    content: "Le stress est une partie inévitable de la vie, mais il existe de nombreuses techniques efficaces pour le gérer et améliorer votre bien-être. Parmi celles-ci, la méditation de pleine conscience est une pratique puissante qui vous permet de vous concentrer sur le moment présent et de réduire les pensées anxieuses.",
    contentP2: "Les exercices de respiration profonde sont également très utiles pour calmer le système nerveux. Quelques minutes de respiration lente et profonde peuvent faire une différence significative dans votre niveau de stress. N'oubliez pas l'importance de l'activité physique régulière. L'exercice libère des endorphines, qui ont un effet positif sur l'humeur et aident à réduire le stress accumulé.",
    contentP3: "Enfin, le yoga et le tai-chi sont d'excellentes pratiques pour allier mouvement et méditation, favorisant ainsi la relaxation et la clarté d'esprit."
  },
  {
    index: 3,
    img: IMG4,
    title: "Conseils pour prendre soin de soi",
    content: "Prendre soin de soi est essentiel pour maintenir une bonne santé physique et mentale. Cela implique d'accorder de l'importance à vos besoins et de pratiquer des activités qui vous nourrissent et vous revitalisent.",
    contentP2: "Assurez-vous d'avoir un sommeil de qualité suffisant. Un repos adéquat est crucial pour la récupération et le bon fonctionnement de votre corps et de votre esprit. Une alimentation équilibrée, riche en fruits, légumes et nutriments essentiels, contribue également à votre bien-être général.",
    contentP3: "N'oubliez pas de vous accorder du temps pour vous détendre et pratiquer des activités que vous aimez, que ce soit la lecture, la méditation ou simplement passer du temps en nature. Enfin, n'hésitez pas à demander de l'aide ou à consulter un professionnel si vous ressentez le besoin de parler de vos émotions ou de vos préoccupations."
  },
];
