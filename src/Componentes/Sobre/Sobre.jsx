import React from "react";
import { IoArrowForward } from "react-icons/io5";
const Sobre = () => {
  return (
    <div
      id="Sobre"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Sobre</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
          <img className=" md:h-80 rounded-full" src='src\assets\xp.png' alt="Sobre img" />

          <ul>
            <div className="flex gap-10 py-7">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Engenheiro de Software
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Voltado para o desenvolvimento de sistemas robustos e escaláveis, o curso de Engenharia de Software abordou técnicas avançadas de arquitetura de software, modelagem de dados e metodologias ágeis, preparando o profissional para lidar com desafios complexos no desenvolvimento de aplicações inovadoras.


                </p>
              </span>
            </div>
            <div className="flex gap-10 py-7">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Tecnólogo em Automação
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Com foc o em sistemas automatizados e controle de processos industriais, o curso proporcionou uma sólida base em eletrônica, instrumentação e programação de controladores lógicos programáveis (CLP), capacitando o profissional a desenvolver e otimizar processos produtivos automatizados.
                </p>
              </span>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
