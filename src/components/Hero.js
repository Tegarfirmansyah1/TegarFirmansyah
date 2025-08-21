// src/components/Hero.js
import Script from 'next/script';
import ThemeSwitcher from './ThemeSwitcher';

export default function Hero() {
    return (
<<<<<<< HEAD
        <section id="home" className="min-h-screen bg-primary flex items-center justify-center scroll-mt-[88px]">
=======
        <section id="home" className="min-h-screen bg-retro-yellow flex items-center justify-center scroll-mt-[88px]">
>>>>>>> ba5c59676793329e322612015678781b451001f5
            <div className="max-w-4xl mx-auto px-4 py-20 items-center justify-center text-center text-white">
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-10 font-retro text-text">Hello, Im Tegar Firmansyah!</h1>
                <p className="text-base md:text-xl opacity-90 mb-8 font-retro text-text">Im a passionate web developer creating beautiful and functional websites.</p>
                <a href="#projects">
<<<<<<< HEAD
                    <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-retro border-2 border-text shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
=======
                    <button className="bg-retro-red-orange text-retro-bg px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-retro border-2 border-retro-text shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
>>>>>>> ba5c59676793329e322612015678781b451001f5
                        View My Work
                    </button>
                </a>
            </div>
        </section>
    );
}