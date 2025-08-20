// src/components/Navbar.js
export default function Navbar() {
    return (
        <nav id="navbar" className="fixed w-full bg-retro-bg shadow-lg z-50 border-b-4 border-retro-text">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-5">
                    <span className="text-2xl font-bold text-retro-purple font-retro">Tegar Firmansyah</span>
                    <div className="hidden md:flex space-x-8 font-retro text-lg">
                        <a href="#home" className="text-retro-text hover:text-retro-purple transition duration-300">Home</a>
                        <a href="#projects" className="text-retro-text hover:text-retro-purple transition duration-300">Projects</a>
                        <a href="#skills" className="text-retro-text hover:text-retro-purple transition duration-300">Skills</a>
                        <a href="#contact" className="text-retro-text hover:text-retro-purple transition duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}