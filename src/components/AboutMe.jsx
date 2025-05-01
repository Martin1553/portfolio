"use client"
import React from 'react';
import { TextAnimate } from "../components/magicui/components/text-animate";

const AboutMe = () => {

  return (
    <section id="about" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-black">
      {/* CodeBlock */}
      <div className="hidden lg:flex w-full md:w-1/2 justify-center">
        <iframe
          src="https://lottie.host/embed/e6aac5bb-81a6-4672-a5b9-4b845e7bc881/VbfKI04Qi1.lottie"
          style={{
            width: '100%',  // Esto hace que ocupe todo el ancho disponible en el contenedor
            height: '400px', // Ajusta la altura a tu preferencia
          }}
        ></iframe>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 flex flex-col items-start max-w-2xl">
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
          <TextAnimate animation="blurInUp" by="word" once>
            ¿Quién soy?
          </TextAnimate>
        </h3>
        <span className="text-white text-base md:text-lg mb-6 leading-relaxed">
          <TextAnimate animation="blurInUp" by="word" delay={0.2} once>
            ¡Hola! Soy Martín Di Paola, Desarrollador de Software y Técnico en Comercio Internacional y Aduanas. Actualmente vivo en Mendoza, Argentina.
          </TextAnimate>
        </span>
        <span className="text-white text-base md:text-lg mb-6 leading-relaxed">
          <TextAnimate animation="blurInUp" by="word" delay={0.4} once>
            Me apasiona la tecnología, el desarrollo de aplicaciones y el aprendizaje constante. También disfruto de los videojuegos, el cine, y la lectura de libros de misterio, hobbies que potencian mi creatividad y mi enfoque a la hora de encarar nuevos proyectos.
          </TextAnimate>
        </span>
        <span className="text-white text-base md:text-lg leading-relaxed">
          <TextAnimate animation="blurInUp" by="word" delay={0.8} once>
            Actualmente estoy perfeccionando mis habilidades en Python y trabajando en proyectos personales que desafían mi creatividad.
          </TextAnimate>
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
