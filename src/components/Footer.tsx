import { MapPin, Phone, Mail } from 'lucide-react';
import logoshrc from './../img/logoshrc.png';

function Footer() {
    return (
        <div>
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
                                <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@safehaven.com</p>
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
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Entrer votre email"
                                    className="px-4 py-2 rounded-l-md w-full text-gray-900"
                                />
                                <button className="bg-rose-600 px-4 py-2 rounded-r-md hover:bg-rose-700">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">

                        <p>© 2025 Safe Haven. Tous droit réservé | <a href=""> by SamAgency</a></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer