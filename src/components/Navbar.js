// src/components/Navbar.js

"use client"; // Wajib ditambahkan untuk menggunakan hooks seperti useState

import { useState } from 'react';

export default function Navbar() {
    // 1. Membuat state untuk melacak status menu (terbuka/tertutup)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navbar" className="fixed w-full bg-retro-bg shadow-lg z-50 border-b-4 border-retro-text">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-5">
                    <span className="text-2xl font-bold text-retro-text font-retro">Portofolio</span>
                    
                    {/* Tombol Hamburger untuk Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-retro-text focus:outline-none">
                            {/* Ikon hamburger atau 'X' tergantung state isOpen */}
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            )}
                        </button>
                    </div>

                    {/* Menu untuk Desktop */}
                    <div className="hidden md:flex space-x-8 font-retro text-lg">
                        <a href="#home" className="text-retro-text hover:text-retro-blue transition duration-300">Home</a>
                        <a href="#projects" className="text-retro-text hover:text-retro-blue transition duration-300">Projects</a>
                        <a href="#skills" className="text-retro-text hover:text-retro-blue transition duration-300">Skills</a>
                        <a href="#contact" className="text-retro-text hover:text-retro-blue transition duration-300">Contact</a>
                    </div>
                </div>

                {/* Dropdown Menu untuk Mobile */}
                {/* Kelas 'block' atau 'hidden' akan diterapkan berdasarkan state 'isOpen' */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
                    <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-center text-retro-text hover:bg-retro-yellow transition duration-300 rounded">Home</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-center text-retro-text hover:bg-retro-yellow transition duration-300 rounded">Projects</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 text-center text-retro-text hover:bg-retro-yellow transition duration-300 rounded">Skills</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-center text-retro-text hover:bg-retro-yellow transition duration-300 rounded">Contact</a>
                </div>
            </div>
        </nav>
    );
}