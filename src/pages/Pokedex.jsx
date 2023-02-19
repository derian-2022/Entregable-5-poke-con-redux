import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokeCard from "../components/Pokedex/PokeCard";
import "./styles/pokedex.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
import SelecTypes from "../components/Pokedex/SelecTypes";


const Pokedex = () => {
  const { nameTrainer } = useSelector((state) => state);

  const [pokemons, setPokemons] = useState();
  const [selecValue, setSelecValue] = useState('allpokemons')

  useEffect(() => {
    if(selecValue === 'allpokemons') {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    axios
      .get(url)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
    } else {
      axios.get(selecValue)
      .then(res => {
        const results = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results})
      })
      .catch(err => console.log(err))
    }
  }, [selecValue]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.pokemon.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
    e.target.pokemon.value = "";
  };

  return (
    <div className="pokedex">
        <Header />
      <h1 className="pokedex__title">
        <span className="pokedex__title-name">Hi {nameTrainer}</span>, here
        find your favorite pokemon.
      </h1>
      <form onSubmit={handleSubmit}>
        <input id="pokemon" type="text" />
        <button>Search</button>
      </form>
        <SelecTypes setSelecValue={setSelecValue} />
      <div className="pokedex__container-pokemon">
        {pokemons?.results.map((pokemon) => (
          <PokeCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
