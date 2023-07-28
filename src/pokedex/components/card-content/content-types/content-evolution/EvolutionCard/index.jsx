import React from "react";
import { Image } from "../../../../../../shared/components";
import { typeColor } from "../../../../../../shared/utils";

import "./styles.css";

const EvolutionCard = ({
  primeiroSprite,
  segundoSprite,
  SpritesDescricao,
  descricao,
  tipo,
}) => {
  return (
    <div className="evo">
      <Image caminho={primeiroSprite} width="30%" height="auto" />
      <div className="dadosEvolucao">
        <Image caminho={SpritesDescricao} width="30%" height="auto" />
        <p className="descricaoEvolucao" style={{ color: typeColor(tipo[0]) }}>
          {descricao}
        </p>
      </div>
      <Image caminho={segundoSprite} width="30%" height="auto" />
    </div>
  );
};

export default EvolutionCard;
