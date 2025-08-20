// src/components/Hero.js
import Script from 'next/script';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-gradient-to-r from-retro-pink to-retro-purple flex items-center justify-center pt-20">
            <div className="max-w-6xl mx-auto px-4 py-20 text-center text-white">
                {/* LinkedIn Badge - Kita akan tambahkan Script di layout */}
                <div className="badge-base LI-profile-badge flex items-center justify-center" data-locale="in_ID" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="tegar-firmansyah-081581244" data-version="v1">
                    <a className="badge-base__link LI-simple-link" href="https://id.linkedin.com/in/tegar-firmansyah-081581244?trk=profile-badge"></a>
                </div>
                
                <h1 className="text-5xl font-bold mb-8 mt-10 font-retro">Hello, Im Tegar Firmansyah!</h1>
                <p className="text-xl opacity-90 mb-8 font-retro">Im a passionate web developer creating beautiful and functional websites.</p>
                <a href="#projects">
                    <button className="bg-retro-yellow text-retro-text px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 font-retro border-2 border-retro-text shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                        View My Work
                    </button>
                </a>
            </div>
            {/* Script untuk LinkedIn Badge */}
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></Script>
        </section>
    );
}