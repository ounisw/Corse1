// Acces au donnnes de l'API
const Wheather = (props) => {
  return (
    <div className="wheather-container">
      <div className="wheather-city">{props.city}</div>
      <div className="wheather-temp">{props.temp}</div>
    </div>
  );
};

export default Wheather;
