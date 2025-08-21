// src/components/Footer.js

export default function Footer() {
    return (
        <footer id="footer" className="bg-retro-yellow text-white py-12 font-retro border-t-4 border-retro-text">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-lg text-retro-text mb-8 md:mb-0 text-center md:text-left">
                        © 2025 Tegar Firmansyah. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-3xl">
                        <a href="https://github.com/Tegarfirmansyah1" className="text-retro-text hover:text-retro-blue transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tegar-firmansyah-081581244" className="text-retro-text hover:text-retro-blue transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/tegarfirmansyah_343" className="text-retro-text hover:text-retro-blue transition duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}