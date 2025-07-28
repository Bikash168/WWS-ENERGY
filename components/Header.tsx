'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sections = ['home', 'about', 'think', 'who', 'contact'];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Scroll tracking
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;

                    if (scrollPosition >= top - 60 && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'What we do' },
        { id: 'think', label: 'What we think' },
        { id: 'who', label: 'Who we are' },
        { id: 'contact', label: 'Contact Us' },
    ];

    return (
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center md:px-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="WWS Energy"
                        className="h-6 sm:h-8 md:h-12 lg:h-16 w-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-blue-900 text-sm md:text-base font-medium">
                    {navLinks.map((link) => (
                        <Link href={`#${link.id}`} key={link.id}>
                            <span
                                className={`cursor-pointer hover:text-blue-700 transition ${activeSection === link.id ? 'font-bold underline underline-offset-4' : ''
                                    }`}
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? (
                            <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-4 text-blue-900 text-base">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link href={`#${link.id}`}>
                                    <span
                                        className="block hover:text-blue-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
