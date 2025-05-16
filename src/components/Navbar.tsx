import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import logoshrc from './../img/logoshrc.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();


    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleAnchorClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
    };

    const navigationtTo = (id: string) => {
        if (isMenuOpen) {
            closeMenu();
        }
        setTimeout(() => {
            handleAnchorClick(id)
        }, 100);

    }

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);
    return (
        <div>
            <nav className="bg-white shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center" onClick={()=> navigate("/")} >
                            <img src={logoshrc} className="h-10 w-10" />
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 hover:text-gray-600"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {/* <a href="/#services" className="text-gray-600 hover:text-rose-600">Nos Services</a>
                            <a href="/#promotions" className="text-gray-600 hover:text-rose-600">Promotions</a>
                            <a href="/#testimonials" className="text-gray-600 hover:text-rose-600">Témoignages</a>
                            <a href="/#blog" className="text-gray-600 hover:text-rose-600">Blog</a>
                            <a href="/#book" className="text-gray-600 hover:text-rose-600">Prendre un RDV</a> */}

                            <Link
                                to="/"
                                onClick={() => navigationtTo('services')}
                                className="text-gray-600 hover:text-rose-600 cursor-pointer">Nos Services</Link>
                            <Link to="/" onClick={() => navigationtTo('promotions')} className="text-gray-600 hover:text-rose-600">Promotions</Link>
                            <Link to="/" onClick={() => navigationtTo('testimonials')} className="text-gray-600 hover:text-rose-600">Témoignages</Link>
                            <Link to="/" onClick={() => navigationtTo('blog')} className="text-gray-600 hover:text-rose-600">Blog</Link>
                            <Link to="/" onClick={() => navigationtTo('book')} className="text-gray-600 hover:text-rose-600">Prendre un RDV</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div ref={mobileMenuRef} className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* <a href="/#services" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Nos Services</a>
                            <a href="/#promotions" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Promotions</a>
                            <a href="/#testimonials" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Témoignages</a>
                            <a href="/#blog" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Blog</a>
                            <a href="/#book" onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:text-rose-600">Prendre un RDV</a> */}

                            <Link to="/"
                                onClick={() => navigationtTo('services')}
                                className=" block px-3 py-2 text-gray-600 hover:text-rose-600">Nos Services</Link>
                            <Link to="/" onClick={() => navigationtTo('promotions')} className=" block px-3 py-2 text-gray-600 hover:text-rose-600">Promotions</Link>
                            <Link to="/" onClick={() => navigationtTo('testimonials')} className=" block px-3 py-2 text-gray-600 hover:text-rose-600">Témoignages</Link>
                            <Link to="/" onClick={() => navigationtTo('blog')} className=" block px-3 py-2 text-gray-600 hover:text-rose-600">Blog</Link>
                            <Link to="/" onClick={() => navigationtTo('book')} className=" block px-3 py-2 text-gray-600 hover:text-rose-600">Prendre un RDV</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar