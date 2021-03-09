function PlanetDetail(props) {
  return (
    <div>
      <h1>Planet Detail</h1>
      <p>Name: {props.location.state.name}</p>
      <p> Number of Moons : {props.location.state.moons}</p>
      <p> Color: {props.location.state.color}</p>
    </div>
  );
}
export default PlanetDetail;