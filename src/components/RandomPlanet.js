import axios from "axios";

import { useState, useEffect } from "react";

function RandomPlanet(props) {
  const [randomPlanet, setRandomPlanet] = useState([]);

  const getRandomPlanets = async () => {
    const baseURL = ` https://wdi-nyc-planets-api.herokuapp.com/planets/random`;
    const response = await axios.get(baseURL);
    console.log(response);
    setRandomPlanet(response.data.planet);
  };
  useEffect(() => {
    getRandomPlanets();
  }, []);

  return (
    <div>
      <h1>Random Planets</h1>
      <p> Name: {randomPlanet.name}</p>
      <p> Color of the Planet: {randomPlanet.color}</p>
      <p> Number of Moons: {randomPlanet.num_moons}</p>
      <button className="random" onClick={getRandomPlanets}>
        Random Planet{" "}
      </button>
    </div>
  );
}

export default RandomPlanet;