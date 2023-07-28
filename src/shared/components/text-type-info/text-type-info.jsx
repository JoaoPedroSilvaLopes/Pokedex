import { Image } from "../image";
import { typeColor, typeName } from "../../utils";

import "./styles.css";

const TextTypeInfo = ({ tipo, simbolos, width, height }) => {
  return (
    <div className="textoTipo" style={{ backgroundColor: typeColor(tipo) }}>
      <Image caminho={simbolos} width={width} height={height} />
      <p className="paragrafoTipo">
        <strong>{typeName(tipo)}</strong>
      </p>
    </div>
  );
};

export default TextTypeInfo;
