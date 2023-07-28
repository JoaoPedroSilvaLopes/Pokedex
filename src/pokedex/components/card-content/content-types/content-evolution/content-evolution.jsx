import { Image } from "../../../../../shared/components";
import { typeColor } from "../../../../../shared/utils";
import EvolutionCard from "./EvolutionCard";

import "./styles.css";

const ContentEvolution = ({ tipo, evolucao, sprites }) => {
  if (evolucao === undefined) {
    return (
      <div className="conteudoEvo">
        <p
          className="paragrafotituloevolucao"
          style={{ color: typeColor(tipo[0]) }}
        >
          Evoluções
        </p>
        <div className="evo">
          <div className="dadosEvolucao">
            <Image caminho={sprites[0]} width="30%" height="auto" />
            <p
              className="descricaoEvolucao"
              style={{ color: typeColor(tipo[0]) }}
            >
              Não possui evolução
            </p>
          </div>
        </div>
      </div>
    );
  }

  const arraySprites = evolucao[0].map((spriteEvolucao) => {
    return `../../../pictures/pokemonSprites/${("000" + spriteEvolucao).slice(
      -3
    )}.png`;
  });

  if (arraySprites.length === 4) {
    return (
      <div className="conteudoEvo">
        <p
          className="paragrafotituloevolucao"
          style={{ color: typeColor(tipo[0]) }}
        >
          Evoluções
        </p>

        {evolucao[1].map((evolucoes, index) => (
          <EvolutionCard
            primeiroSprite={arraySprites[0]}
            segundoSprite={arraySprites[index + 1]}
            SpritesDescricao={evolucao[2][index]}
            descricao={evolucoes}
            tipo={tipo}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="conteudoEvo">
      <p
        className="paragrafotituloevolucao"
        style={{ color: typeColor(tipo[0]) }}
      >
        Evoluções
      </p>
      {evolucao[1].map((evolucoes, index) => (
        <EvolutionCard
          primeiroSprite={arraySprites[index]}
          segundoSprite={arraySprites[index + 1]}
          SpritesDescricao={evolucao[2][index]}
          descricao={evolucoes}
          tipo={tipo}
        />
      ))}
    </div>
  );
};

export default ContentEvolution;
