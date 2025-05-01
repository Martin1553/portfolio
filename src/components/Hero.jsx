import React from "react";
import { Vortex } from "./aceternityui/components/Vortex";
import { TextAnimate } from "../components/magicui/components/text-animate";

export default function Hero() {
    return (
        <section className="min-h-[100svh] mx-auto  h-[30rem] overflow-hidden bg-black">
            <Vortex
                backgroundColor="black"
                className="flex flex-col items-center justify-center px-4 md:px-10 py-8 w-full h-full"
            >
                <h1 className="text-white text-3xl md:text-7xl font-extrabold text-center leading-tight">
                    <TextAnimate animation="blurInUp" by="word" once>Martín Di Paola</TextAnimate>
                </h1>

                <h3 className="text-white text-2xl md:text-5xl font-extrabold text-center leading-tight">
                    <TextAnimate animation="blurInUp" by="word" delay={0.2} once>FULL STACK SOFTWARE DEVELOPER</TextAnimate>
                </h3>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 animate-bounce">
                    <span className="text-white text-2xl">&#8595;</span>
                </div>
            </Vortex>
        </section>
    );
}

