// src/components/ThemeProvider.js
"use client";

import { useState, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('retro'); // Tema default adalah retro

    // Efek ini dijalankan saat komponen pertama kali dimuat di client
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'retro';
        setTheme(storedTheme);
    }, []);

    // Efek ini dijalankan setiap kali state 'theme' berubah
    useEffect(() => {
        // Menetapkan tema ke body dan menyimpannya di localStorage
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}