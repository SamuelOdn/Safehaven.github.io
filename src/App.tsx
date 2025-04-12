// import { useState, useEffect, useRef } from 'react';
// import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
// import logoshrc from './img/logoshrc.png';
// import { Routes, Route, BrowserRouter, Link, useNavigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Promotions from './pages/Promotions';
// import Testimonials from './pages/Testimonials';
// import Blog1 from './pages/Blog1';
// function App() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     //const navigate = useNavigate();



//     const mobileMenuRef = useRef<HTMLDivElement>(null);


//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };



//     useEffect(() => {
//         const handleScroll = () => {
//             if (isMenuOpen) {
//                 closeMenu();
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [isMenuOpen]);


//     return (

//         <BrowserRouter>
//             <div className="min-h-screen bg-neutral-50">
//                 {/* Navigation */}
//                 <nav className="bg-white shadow-sm fixed w-full z-50">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex justify-between h-16">
//                             <div className="flex items-center">
//                                 <img src={logoshrc} className="h-10 w-10" />
//                             </div>

//                             {/* Mobile menu button */}
//                             <div className="flex items-center md:hidden">
//                                 <button
//                                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                     className="text-gray-500 hover:text-gray-600"
//                                 >
//                                     {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                                 </button>
//                             </div>

//                             {/* Desktop menu */}
//                             <div className="hidden md:flex md:items-center md:space-x-8">
//                                 <Link to="/services" className="text-gray-600 hover:text-rose-600">Nos Services</Link>
//                                 <Link to="/promotions" className="text-gray-600 hover:text-rose-600">Promotions</Link>
//                                 <Link to="/testimonials" className="text-gray-600 hover:text-rose-600">Témoignages</Link>
//                                 <Link to="/blog" className="text-gray-600 hover:text-rose-600">Blog</Link>
//                                 <Link to="/book" className="text-gray-600 hover:text-rose-600">Prendre un RDV</Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mobile menu */}
//                     {isMenuOpen && (
//                         <div ref={mobileMenuRef} className="md:hidden bg-white border-t">
//                             <div className="px-2 pt-2 pb-3 space-y-1">
//                                 <Link to="/services" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Nos Services</Link>
//                                 <Link to="/promotions" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Promotions</Link>
//                                 <Link to="/testimonials" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Témoignages</Link>
//                                 <Link to="/blog" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Blog</Link>
//                                 <Link to="/book" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Prendre un RDV</Link>
//                             </div>
//                         </div>
//                     )}
//                 </nav>
//                 <div className='pt-16'>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/services" element={<Services />} />
//                         <Route path="/promotions" element={<Promotions />} />
//                         <Route path="/testimonials" element={<Testimonials />} />
//                         <Route path="/blog1" element={<Blog1 />} />
//                     </Routes>
//                 </div>
//                 {/* Footer */}
//                 <footer className="bg-gray-900 text-white py-12">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="grid md:grid-cols-4 gap-8">
//                             <div>
//                                 <div className="flex items-center mb-4">
//                                     <img src={logoshrc} className="h-20 w-20" />

//                                 </div>
//                                 <p className="text-gray-400">Votre sanctuaire pour le bien-être et de détente.</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold mb-4">Contact</h3>
//                                 <div className="space-y-2">
//                                     <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" />Godomey, Cotonou (Bénin)</p>
//                                     <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +229 96337000</p>
//                                     <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@safehaven.com</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold mb-4">Horaires</h3>
//                                 <div className="space-y-2">
//                                     <p>Lundi - Vendredi: 9h - 20h</p>
//                                     <p>Samedi: 10h - 18h</p>
//                                     <p>Dimanche: 10h - 16h</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//                                 <p className="text-gray-400 mb-4">Abonnez-vous pour recevoir des offres spéciales et des conseils.</p>
//                                 <div className="flex">
//                                     <input
//                                         type="email"
//                                         placeholder="Entrer votre email"
//                                         className="px-4 py-2 rounded-l-md w-full text-gray-900"
//                                     />
//                                     <button className="bg-rose-600 px-4 py-2 rounded-r-md hover:bg-rose-700">
//                                         S'inscrire
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">

//                             <p>© 2025 Safe Haven. Tous droit réservé | <a href=""> by SamAgency</a></p>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </BrowserRouter>
//     );
// }
// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogArticle from "./pages/BlogArticle";


function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="min-h-screen bg-neutral-50">
                {/* Navigation */}


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<BlogArticle />} />
                </Routes>
                {/* Footer */}

            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;