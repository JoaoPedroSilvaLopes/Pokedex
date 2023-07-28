import { TextInfo, TextTypeInfo } from "../../../../../shared/components";
import { typeColor } from "../../../../../shared/utils";

import "./styles.css";

const ContentAbout = ({
  descricao,
  tipo,
  simbolos,
  height,
  weight,
  ability,
}) => {
  return (
    <div className="conteudoAbout">
      <p
        className="pokedexDescription"
        style={{ backgroundColor: typeColor(tipo[0]) }}
      >
        {descricao}
      </p>
      <div className="pokedexTypes">
        {tipo.map((value, index) => (
          <TextTypeInfo
            tipo={value}
            simbolos={simbolos[index]}
            width={"20%"}
            height={"auto"}
          />
        ))}
      </div>
      <p
        className="title"
        style={{ color: typeColor(tipo[0]) }}
      >
        Data Pokédex
      </p>
      <TextInfo descricaoDado={"Height"} dado={`${height / 10} m`} />
      <TextInfo descricaoDado={"Weight"} dado={`${weight / 10} Kg`} />
      <TextInfo descricaoDado={"Ability"} dado={ability[0]} />
      <TextInfo descricaoDado={"Hidden Ability"} dado={ability[1]} />
    </div>
  );
};

export default ContentAbout;
