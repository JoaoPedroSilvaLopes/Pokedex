import { typeColor } from "../../../shared/utils";

import "./styles.css";

const CardHeader = ({
  numberPokedex,
  typesSymbols,
  sprites,
  types,
  specieName,
}) => {
  return (
    <div
      className="fotopokemon"
      style={{ backgroundColor: typeColor(types[0]) }}
    >
      <div className="infos">
        <p className="numeroPokedex">#{numberPokedex}</p>
        <p className="specie">{specieName}</p>
        <div>
          {typesSymbols.map((simbolo, index) => (
            <img key={index} src={simbolo} width="10%" height="auto" />
          ))}
        </div>
      </div>
      <img className="spritePokemon" src={sprites} />
    </div>
  );
};

export default CardHeader;
