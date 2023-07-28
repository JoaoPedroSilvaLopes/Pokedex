import "./styles.css";

const TextInfo = ({ descricaoDado, dado }) => {
  return (
    <div className="dataInfo">
      <p className="dataType">{descricaoDado}</p>
      <p className="dataText">{dado}</p>
    </div>
  );
};

export default TextInfo;
