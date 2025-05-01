import React from "react";
import { BackgroundBeamsWithCollision } from "../components/aceternityui/components/BackgroundBeamsWithCollision";
import { useForm, ValidationError } from "@formspree/react";
import { TextAnimate } from "./magicui/components/text-animate";

export default function Contact() {
  const [state, handleSubmit] = useForm("movdjnnl");

  if (state.succeeded) {
    return (
      <BackgroundBeamsWithCollision>
        <div className="px-4 py-16 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">¡Gracias por tu mensaje!</h2>
        </div>
      </BackgroundBeamsWithCollision>
    );
  }

  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full px-4 py-16 flex justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg w-full max-w-5xl p-6 md:p-10 text-white">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Texto a la izquierda (en mobile, arriba) */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <TextAnimate animation="blurInUp" by="word" delay={0.2} once>
                  ¿Querés trabajar conmigo?
                </TextAnimate>
              </h2>
              <span className="text-base md:text-lg leading-relaxed">
                <TextAnimate animation="blurInUp" by="word" delay={0.2} once>
                  Completá el formulario y me pondré en contacto con vos lo antes posible.
                  Ya sea para un proyecto web, una app móvil o simplemente para charlar ideas.
                </TextAnimate>
              </span>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="+54 9 261..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="tu@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Escribí tu mensaje acá..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-purple-700 hover:bg-purple-800 transition-colors text-white py-2 rounded font-semibold disabled:opacity-50"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
