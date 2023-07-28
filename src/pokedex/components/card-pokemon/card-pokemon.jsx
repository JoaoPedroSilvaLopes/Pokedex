import { CardHeader } from "../card-header";
import { CardContent } from "../card-content";

import "./styles.css";

const CardPokemon = ({
  numeroPokedex,
  simbolos,
  sprites,
  tipo,
  especie,
  descricao,
  statsBase,
  evolucao,
  fraquezas,
  height,
  weight,
  ability,
}) => {
  return (
    numeroPokedex !== "000" && (
      <div className="paginaPokedex">
        <CardHeader
          numberPokedex={numeroPokedex}
          typesSymbols={simbolos}
          sprites={sprites}
          types={tipo}
          specieName={especie}
          statsBase={statsBase}
        />
        <CardContent
          descricao={descricao}
          tipo={tipo}
          simbolos={simbolos}
          height={height}
          weight={weight}
          ability={ability}
          statsBase={statsBase}
          fraquezas={fraquezas}
          evolucao={evolucao}
          sprites={sprites}
        />
      </div>
    )
  );
};

export default CardPokemon;
