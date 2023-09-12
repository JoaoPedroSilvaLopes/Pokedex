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
    <div className="container">
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Description
      </p>
      <p
        className="pokedexDescription"
        style={{ backgroundColor: typeColor(tipo[0]) }}
      >
        {descricao}
      </p>
      <div className="pokedexTypes">
        {tipo.map((value, index) => (
          <TextTypeInfo
            key={index}
            tipo={value}
            simbolos={simbolos[index]}
            width={"20%"}
            height={"auto"}
          />
        ))}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Data Pokédex
      </p>
      <div>
        <TextInfo descricaoDado={"Height"} dado={`${height / 10} m`} />
        <TextInfo descricaoDado={"Weight"} dado={`${weight / 10} Kg`} />
        <TextInfo descricaoDado={"Ability"} dado={ability[0]} />
        <TextInfo descricaoDado={"Hidden Ability"} dado={ability[1] ?? 'N/DA'} />
      </div>
    </div>
  );
};

export default ContentAbout;
