import IconCloud from "./magicui/components/icon-cloud";
import { TextAnimate } from "../components/magicui/components/text-animate";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "redux",
  "postgresql",
  "firebase",
  "git",
  "sequelize",
  "nodedotjs",
  "axios",
  "python"
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Texto a la izquierda */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-6">
            <TextAnimate animation="blurInUp" by="word" once>
              Mis Habilidades
            </TextAnimate>
          </h2>
          <span className="text-lg text-white mb-6">
            <TextAnimate animation="blurInUp" by="word" delay={0.2} once>
              Desarrollo aplicaciones web y móviles utilizando tecnologías como:
              </TextAnimate>
          </span>
          <ul className="list-disc list-inside text-white space-y-2">
            <TextAnimate animation="blurInUp" by="word" delay={0.3} once>JavasCript</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.4} once>React.js</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.5} once>Node.js</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.6} once>Tailwind CSS</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.7} once>PostgreSQL</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.8} once>Python</TextAnimate>
            <TextAnimate animation="blurInUp" by="word" delay={0.8} once>Sequelize</TextAnimate>
          </ul>
        </div>

        {/* Icon Cloud a la derecha */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>
    </section>
  );
}
