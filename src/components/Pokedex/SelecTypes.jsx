import axios from "axios";
import React, { useEffect, useState } from "react";

const SelecTypes = ({ setSelecValue }) => {

  const [types, setTypes] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type";
    axios
      .get(url)
      .then((res) => setTypes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = e => {
    setSelecValue(e.target.value)
  }

  return (
    <select onChange={handleChange}>
        <option value="allpokemons">All Pokemons</option>
      {
        types?.results.map(type => (
            <option key={type.url}value={type.url}>{type.name}</option>
        ))
      }
    </select>
  );
};

export default SelecTypes;
