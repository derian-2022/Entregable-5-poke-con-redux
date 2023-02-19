import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeInfo = () => {

  const { id } = useParams();

  const [hasError, setHasError] = useState(false);
  const [poke, setPoke] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPoke(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [id]);

  if (hasError) {
    return <h1>X The Pokemon with name "{id}"" not found X</h1>;
  } else {
    return (
      <div>
        <img
          src={poke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <h1>{poke?.name}</h1>
      </div>
    );
  }
};

export default PokeInfo;
