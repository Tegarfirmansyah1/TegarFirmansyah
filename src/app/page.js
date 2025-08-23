
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <><Head>
      <meta name="google-site-verification" content="google-site-verification=R3GN-BsplYV8MCbilcu5gQF3tnpdQyyKJdVSnnIcdWU" />
    </Head><div>
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div></>
  );
}