import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { FaPython } from "react-icons/fa";
const Experiencia = () => {
  return (
    <div id="Experiencia" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experiência</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#0277BD" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiArduino color="rgb(0, 255, 255)" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">Técnico em Automação , Mic</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2022 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Atuação com IoT</li>
                <li>- Técnico Pleno</li>
              </ul>
            </span>
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
