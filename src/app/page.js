// src/app/page.js

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
// Import komponen lain yang sudah kamu buat
// import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}