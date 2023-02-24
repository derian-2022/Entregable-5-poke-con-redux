import React from "react";
import { setNameTrainer } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.name.value.trim()));
    e.target.name.value = "";
    navigate("/pokedex");
  };

  return (
    <div className="home">
      <div className="poke__home-img" >
        <img src="/image 11.png" alt="" />
      </div>
      <div>
        <h2 className="poke__home-title">Hi Traner</h2>
        <p className="poke__home-paragraph">
          To start this Pokedex, give me your name
        </p>
      </div>
      <form className="poke__home-form" onSubmit={handleSubmit}>
        <input className="poke__home-inp" id="name" type="text" />
        <button className="poke__home-btn">Start</button>
      </form>

      <footer className="footer">
        <div><img src="/public/home_imagen.png" alt="" /></div>
      </footer>
    </div>
  );
};

export default Home;
