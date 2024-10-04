import React from "react";
import ProjetosCard from "./ProjetosCard";

const Projetos = () => {
  return (
    <div id="Projetos" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projetos</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjetosCard
          title="OceanGuard"
          main="Sistema de Monitoramento de Qualidade da Água visando sustentabilidade dos oceanos."
        />
        <ProjetosCard
          title="Eco Factory"
          main="Plataforma e-commerce voltada o comercialização de produtos sustentáveis."
        />
      </div>
    </div>
  );
};

export default Projetos;
