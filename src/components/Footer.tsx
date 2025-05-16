import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoshrc from './../img/logoshrc.png';

function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sgajwla', // remplace par ton vrai SERVICE ID
        'template_bxwwy68', // remplace par ton TEMPLATE ID
        form.current!,
        'vmpUD0gddbO_OLT9C' // remplace par ta PUBLIC KEY
      )
      .then(() => {
        setStatus('sent');
        form.current?.reset(); // ✅ Efface le champ email

        // ✅ Cache le message après 3 secondes
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      })
      .catch(() => {
        setStatus('error');

        // ✅ Cache le message d'erreur après 3 secondes
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoshrc} className="h-20 w-20" />
            </div>
            <p className="text-gray-400">Votre sanctuaire pour le bien-être et de détente.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" />Godomey, Cotonou (Bénin)</p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +229 96337000</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@safehaveninstitut.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2">
              <p>Lundi - Vendredi: 9h - 20h</p>
              <p>Samedi: 10h - 18h</p>
              <p>Dimanche: 10h - 16h</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Abonnez-vous pour recevoir des offres spéciales et des conseils.</p>
            <form ref={form} onSubmit={sendEmail} className="flex w-full">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Entrer votre email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-rose-600 px-4 py-2 rounded-r-md hover:bg-rose-700 text-white"
              >
                S'inscrire
              </button>
            </form>

            {/* ✅ Affichage conditionnel des messages */}
            {status === 'sent' && (
              <p className="text-green-500 mt-2">Merci ! Votre inscription a bien été envoyée.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 mt-2">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Safe Haven. Tous droits réservés | <a href="">by Soles</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
