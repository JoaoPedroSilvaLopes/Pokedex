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
          <Status textStat={stat.name} stat={stat.value} />
        ))}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Normal Damage
      </p>
      <div className="weaknessContent">
        {fraquezas.map((fraqueza, index) => {
          return (
            fraqueza === 1.0 && (
              <Weakness
                key={index}
                typeName={[typeNames[index]]}
                weaknessRatio={fraqueza}
              />
            )
          );
        })}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Resistance
      </p>
      <div className="weaknessContent">
        {fraquezas.map((fraqueza, index) => {
          return (
            fraqueza < 1.0 &&
            fraqueza > 0.0 && (
              <Weakness
                key={index}
                typeName={[typeNames[index]]}
                weaknessRatio={fraqueza}
              />
            )
          );
        })}
      </div>
      <p className="title" style={{ color: typeColor(tipo[0]) }}>
        Weakness
      </p>
      <div className="weaknessContent">
        {fraquezas.map((fraqueza, index) => {
          return (
            fraqueza > 1.0 && (
              <Weakness
                key={index}
                typeName={[typeNames[index]]}
                weaknessRatio={fraqueza}
              />
            )
          );
        })}
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
