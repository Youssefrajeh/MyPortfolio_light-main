import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-slate-900/80 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105">
                        <a href="#home" className="flex items-center gap-3 group">
                            <span className="text-xl font-bold text-white tracking-wide transition-all duration-300 hover:text-primary group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]">
                                Youssef Rajeh
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:tracking-wider hover:scale-110 transform relative group hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] hover:bg-primary/10"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mr-4 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-3 rounded-md text-white bg-slate-800 border-2 border-white hover:text-primary hover:bg-slate-700 hover:scale-110 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:border-primary focus:outline-none relative z-50 transition-all duration-300 transform"
                        >
                            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
