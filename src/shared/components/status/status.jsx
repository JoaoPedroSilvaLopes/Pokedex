import "./styles.css";

const Status = ({ textStat, stat }) => {
  const progressInBar = (stat / 255).toFixed(2) * 100;

  return (
    <div className="containerStats">
      <p className="tipoStat">{textStat}</p>
      <div className="progressBar">
        <p className="statText">{stat}</p>
        <div className="progress" style={{ width: `${progressInBar}%` }}></div>
      </div>
    </div>
  );
};

export default Status;
