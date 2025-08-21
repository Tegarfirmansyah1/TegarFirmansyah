// src/components/Projects.js
import Image from 'next/image';
import Link from 'next/link'; 
import { projectData } from '@/data/projectData';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-retro-bg scroll-mt-[68px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Ukuran font disesuaikan */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-retro">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-4 border-retro-text hover:transform hover:scale-105 transition duration-300 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                            <Image className="w-full p-2 h-48 md:h-56 object-cover rounded-xl" src={project.imgSrc} alt={project.title} width={500} height={300} />
                            {/* Padding dan ukuran font di dalam kartu disesuaikan */}
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold text-retro-green mb-2 font-retro">{project.title}</h3>
                                <p className="text-sm md:text-base text-retro-text mb-4 font-retro">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-retro-yellow text-retro-text rounded-full text-xs md:text-sm font-retro border-2 border-retro-text">{tag}</span>
                                    ))}
                                </div>
                                <Link href={`/project/${project.slug}`} className="block mt-5 text-center bg-retro-red-orange text-white py-2 rounded-md hover:bg-retro-blue text-sm font-retro border-2 border-retro-text">
                                    Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}