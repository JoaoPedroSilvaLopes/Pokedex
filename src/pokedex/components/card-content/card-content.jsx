import { useState } from "react";
import { ContentAbout, ContentStatus } from "./content-types";

import "./styles.css";

const CardContent = ({
  descricao,
  tipo,
  simbolos,
  height,
  weight,
  ability,
  statsBase,
  fraquezas,
  evolucao,
  sprites,
}) => {
  const [internContent, setInternContent] = useState(
    <ContentAbout
      descricao={descricao}
      tipo={tipo}
      simbolos={simbolos}
      height={height}
      weight={weight}
      ability={ability}
    />
  );

  const setAbout = () => {
    setInternContent(
      <ContentAbout
        descricao={descricao}
        tipo={tipo}
        simbolos={simbolos}
        height={height}
        weight={weight}
        ability={ability}
      />
    );
  };

  const setStats = () => {
    setInternContent(
      <ContentStatus statsBase={statsBase} tipo={tipo} fraquezas={fraquezas} />
    );
  };

  const setEvolution = () => {
    setInternContent(
      <ContentEvolution tipo={tipo} evolucao={evolucao} sprites={sprites} />
    );
  };

  return (
    <div className="mainContent">
      <div className="buttonContent">
        <button className="buttonOptions" onClick={() => setAbout()}>
          About
        </button>
        <button className="buttonOptions" onClick={() => setStats()}>
          Stats
        </button>
      </div>
      <div className="internContent">{internContent}</div>
    </div>
  );
};

export default CardContent;
