const Image = ({ caminho, width, height }) => {
  return caminho && <img src={caminho} width={width} height={height} />;
};

export default Image;
