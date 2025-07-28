const Header = () => {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center md:px-8">
                {/* Logo and Brand Name */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="WWS Energy"
                        className="h-6 sm:h-8 md:h-12 lg:h-16 w-auto"
                    />
                </div>

                {/* Navigation Menu (Hidden on small devices) */}
                <nav className="hidden md:flex space-x-6 text-blue-900 text-sm md:text-base font-medium">
                    <a href="#home" className="hover:text-blue-700 transition duration-200">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-700 transition duration-200">
                        About
                    </a>
                    <a href="#contact" className="hover:text-blue-700 transition duration-200">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button aria-label="Open menu">
                        <svg
                            className="h-6 w-6 text-blue-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
