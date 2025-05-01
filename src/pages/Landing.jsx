import Header from "../components/Header"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import AboutMe from "../components/AboutMe"
import Proyects from "../components/Proyects"
import Contact from "../components/Contact"

const Landing = () => {
    return (
        <>
            <Header />
            <main className="scroll-smooth">
                <section id="inicio">
                    <Hero />
                </section>
                <section id="sobre-mi">
                    <AboutMe/>
                </section>
                <section id="habilidades">
                    <Skills/>
                </section>
                <section id="proyectos">
                    <Proyects/>
                </section>
                <section id="contacto">
                    <Contact/>
                </section>
            </main>
        </>
    )
}

export default Landing