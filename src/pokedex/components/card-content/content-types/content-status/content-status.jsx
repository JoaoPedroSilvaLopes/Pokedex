import { typeColor, typeNames } from "../../../../../shared/utils";
import { Weakness, Status } from "../../../../../shared/components";

import "./styles.css";

const ContentStatus = ({ statsBase, tipo, fraquezas }) => {
  return (
    <div className="container">
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Base stats
      </p>
      <div className="statsContent">
        {statsBase.map((stat, index) => (
          <Status key={index} textStat={stat.name} stat={stat.value} />
        ))}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Normal Damage
      </p>
      <div className="weaknessContent">
        {fraquezas.includes(1.0) ? (
          fraquezas.map((fraqueza, index) => {
            return (
              fraqueza === 1.0 && (
                <Weakness
                  key={index}
                  typeName={[typeNames[index]]}
                  weaknessRatio={fraqueza}
                />
              )
            );
          })
        ) : (
          <div className="nullText">N/DA</div>
        )}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Resistance
      </p>
      <div className="weaknessContent">
        {fraquezas.filter((value) => value > 0.0 && value < 1.0).length > 0 ? (
          fraquezas.map((fraqueza, index) => {
            return fraqueza > 0.0 && fraqueza < 1.0 && (
              <Weakness
                key={index}
                typeName={[typeNames[index]]}
                weaknessRatio={fraqueza}
              />
            );
          })
        ) : (
          <div className="nullText">N/DA</div>
        )}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Weakness
      </p>
      <div className="weaknessContent">
        {fraquezas.filter((value) => value > 1.0).length > 0 ? (
          fraquezas.map((fraqueza, index) => {
            return (
              fraqueza > 1.0 && (
                <Weakness
                  key={index}
                  typeName={[typeNames[index]]}
                  weaknessRatio={fraqueza}
                />
              )
            );
          })
        ) : (
          <div className="nullText">N/DA</div>
        )}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Immunity
      </p>
      <div className="weaknessContent">
        {fraquezas.includes(0.0) ? (
          fraquezas.map((fraqueza, index) => {
            return (
              fraqueza === 0.0 && (
                <Weakness
                  key={index}
                  typeName={[typeNames[index]]}
                  weaknessRatio={fraqueza}
                />
              )
            );
          })
        ) : (
          <div className="nullText">N/DA</div>
        )}
      </div>
    </div>
  );
};

export default ContentStatus;
