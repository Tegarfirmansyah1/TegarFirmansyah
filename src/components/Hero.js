import Script from 'next/script';
import ThemeSwitcher from './ThemeSwitcher';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-primary flex items-center justify-center scroll-mt-[88px]">
            <div className="max-w-4xl mx-auto px-4 py-20 items-center justify-center text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-10 font-retro text-text">Hello, Im Tegar Firmansyah!</h1>
                <p className="text-base md:text-xl opacity-90 mb-8 font-retro text-text">Im a passionate web developer creating beautiful and functional websites.</p>
                <a href="#projects">
                    <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-retro border-2 border-text shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                        View My Work
                    </button>
                </a>
            </div>
        </section>
    );
}