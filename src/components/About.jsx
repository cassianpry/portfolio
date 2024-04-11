import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-black-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Possuo especialização em desenvolvimento Front-End, com proficiência em
        React, Next.js e TypeScript.
        <p>
          Tenho experiência comprovada em organização e otimização de tarefas,
          com habilidade para definir prioridades de forma eficaz, sem
          comprometer a qualidade ou a eficiência das demais tarefas.
        </p>
        <p>
          Demonstro responsabilidade ao lidar com assuntos críticos, assumindo
          erros quando ocorrem e compartilhando os acertos para promover um
          ambiente de aprendizado contínuo. Meu foco está sempre no bem-estar da
          equipe.
        </p>
        <p>
          Tenho experiência na aplicação de conceitos de CRM (fidelização),
          sempre buscando a melhor maneira de resolver problemas apresentados
          pelos clientes. Acredito na importância de fornecer orientação aos
          membros da equipe sempre que possível, promovendo um ambiente de
          trabalho colaborativo.
        </p>
        <p>
          Pratico a cultura de feedback com os membros da equipe, visando a
          melhoria contínua do ambiente de trabalho e a promoção de um clima
          organizacional positivo.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
