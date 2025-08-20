// src/components/Projects.js
import Image from 'next/image';

const projectData = [
  {
    imgSrc: "/assets/images/project1.png",
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform built with PHP and SQL.",
    tags: ["PHP", "SQL"],
    link: "/project1",
  },
  {
    imgSrc: "/assets/images/project2.png",
    title: "Prototipe Chating Web",
    description: "Desain UI/UX chatting web built with Figma.",
    tags: ["Figma", "CorelDraw"],
    link: "/project2",
  },
  {
    imgSrc: "/assets/images/project3.png",
    title: "Portfolio Website",
    description: "Personal portfolio website built with Tailwind CSS and JavaScript.",
    tags: ["Tailwind CSS", "JavaScript"],
    link: "/project3",
  },
  {
    imgSrc: "/assets/images/project4.png",
    title: "Shortened URL",
    description: "Shortened URL website built with Tailwind CSS and FullStack Next js.",
    tags: ["Tailwind CSS", "Next js"],
    link: "/project4",
  },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-retro-bg">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 font-retro">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-4 border-retro-text hover:transform hover:scale-105 transition duration-300 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                            <Image className="w-full p-2 h-56 object-cover rounded-xl" src={project.imgSrc} alt={project.title} width={500} height={300} />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-retro-green mb-2 font-retro">{project.title}</h3>
                                <p className="text-retro-text mb-4 font-retro">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-retro-yellow text-retro-text rounded-full text-sm font-retro border-2 border-retro-text">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="block mt-5 text-center bg-retro-red-orange text-white py-2 rounded-md hover:bg-retro-purple text-sm sm:text-sm font-retro border-2 border-retro-text" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}