import { typeSymbol } from "../../utils";

import "./styles.css";

const Weakness = ({ typeName, weaknessRatio }) => {
  return (
    <div className="weaknessInfo">
      <img className="weaknessSymbol" src={typeSymbol(typeName)} />
      <p className="weaknessText">{Number(weaknessRatio).toFixed(2)}x</p>
    </div>
  );
};

export default Weakness;
