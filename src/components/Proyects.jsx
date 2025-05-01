"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/aceternityui/components/3d-card";
import { TextAnimate } from "./magicui/components/text-animate";
import dogsApp from "../assets/images/dogs-app.png";
import hentech from "../assets/images/hentech.png";
import crm from '../assets/images/crm.png'

export default function Proyects() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <h3 className="text-white text-3xl md:text-7xl font-extrabold text-center leading-tight">
        <TextAnimate animation="blurInUp" by="word" delay={0.2} once>Proyectos</TextAnimate>
      </h3>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              CRM - ICS
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Node.js - React.js - Tailwind CSS - Axios - Material UI - JavaScript - Bcrypt.js - Redux - PostgreSQL - HTML5
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={crm}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-wrap gap-2 justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href="https://crm-infinity-code-wsv5.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Demo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              E-commerce - Hentech
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Node.js - React.js - CSS3 - JavaScript - Redux - PostgreSQL - HTML5
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={hentech}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-wrap gap-2 justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href="https://deployment-ruddy.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Demo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              SPA - Dogs App
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Node.js - React.js - CSS3 - JavaScript - Redux - PostgreSQL - HTML5
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={dogsApp}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href="https://dogs-app-ten-omega.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Demo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
