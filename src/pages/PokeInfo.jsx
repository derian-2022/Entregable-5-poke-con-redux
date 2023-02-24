import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/pokeInfo.css";
import Header from "../components/shared/Header";

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
    return (
      <div className="pokeInfo__err">
            
          <div>
            <div>
            <h1 className="pokeInfo__tex">
                ''"{id}"" wround ❌ not found ❌ </h1> 
            </div>
                
            <img
              className="pokeInfo__err-img"
              src="/pikachu-gif-6-unscreen.gif"
              alt=""
            />
          </div>
      </div>
    );
  } else {
    return (
      <div className="pokeInfo">
        <Header />
        
        <div className="pokeInfo__contenedor">
          <div className="pokeInfo__card-info">
            <div className={`pokeInfo__color bg-${poke?.types[0].type.name}`}>
              <img
              className="pokeInfo__avatar"
              src={poke?.sprites.other["official-artwork"].front_default}
              alt=""
              />
            </div>
            
                  <h1 className="pokeInfo__number">#{poke?.id} </h1>
                  
              <div className="pokeInfo__name">
                <hr />
                  <h1 className={`pokeInfo__name color-${poke?.types[0].type.name}`}>
                  {poke?.name}
                  </h1>
                <hr />
              </div>

              <div className="pokeInfo__measures-height-weight">
                <div className="pokeInfo__height-weight">
                  <h2>height</h2>
                  <h1>{poke?.height}</h1>
                </div>

                <div className="pokeInfo__height-weight">
                  <h2>weight</h2>
                  <h1>{poke?.weight}</h1>
                </div>
              </div>
          

              <div className="pokeInfo__type-abilities">
                <div className="pokeInfo__main-abilities">
                    <div className="pokeInfo__titleH">
                      <h1>Types</h1>
                    </div>
                    <ul className="pokeInfo__type">
                      <li className="type">{poke?.types[0].type.name}</li>
                      
                      {/* <li className="type">{poke?.types[1].type.name}</li> */}
                    </ul>
                </div>


                <div className="pokeInfo__type-abilities">
                    <div className="pokeInfo__titleS">
                      <h1>Skills</h1>
                    </div>
                    <ul className="pokeInfo__ability">
                      <li className="ability">{poke?.abilities[0].ability.name} </li>
                      <li className="ability">{poke?.abilities[1].ability.name}</li>
                    </ul>
                </div>
              </div>

              <div className="pokeInfo__stats">
                <div className="pokeInfo__tittle-st">
                  <h1 className="tittle-stats"> Stats</h1>
                  <hr />
                </div>

                <div className="pokeInfo__stat">
                  <div className="text_stat">
                    <span>Hp</span>
                    <span>{poke?.stats[0].base_stat}</span> 
                  </div>
                  <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                  </div> 
                </div>

                <div className="pokeInfo__stat">
                  <div className="text_stat">
                    <span>Stroke</span>
                    <span>{poke?.stats[1].base_stat}</span> 
                  </div>
                  <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                  </div> 
                </div>

                <div className="pokeInfo__stat">
                  <div className="text_stat">
                    <span>Defending</span>
                    <span>{poke?.stats[2].base_stat}</span> 
                  </div>
                  <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                  </div> 
                </div>

                <div className="pokeInfo__stat">
                  <div className="text_stat">
                    <span>Speed</span>
                    <span>{poke?.stats[3].base_stat}</span> 
                  </div>
                  <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                  </div> 
                </div>
              </div>
          </div>
          
          
          <div className="pokeInfo__movement">
            <div className="container__title">
                <h1 className="pokeInfo__title">Movements</h1>
                <hr />
            </div>
              <ul className="pokeInfo__moveMent">
                  <li className="moveMent">{poke?.moves[0].move.name}</li>
                  <li className="moveMent">{poke?.moves[1].move.name}</li>
                  <li className="moveMent">{poke?.moves[3].move.name}</li>
                  <li className="moveMent">{poke?.moves[3].move.name}</li>
                  <li className="moveMent">{poke?.moves[4].move.name}</li>
                  <li className="moveMent">{poke?.moves[5].move.name}</li>
                  <li className="moveMent">{poke?.moves[6].move.name}</li>
                  <li className="moveMent">{poke?.moves[7].move.name}</li>
                  <li className="moveMent">{poke?.moves[8].move.name}</li>
                  <li className="moveMent">{poke?.moves[9].move.name}</li>
                  <li className="moveMent">{poke?.moves[10].move.name}</li>
                  <li className="moveMent">{poke?.moves[11].move.name}</li>
                  <li className="moveMent">{poke?.moves[12].move.name}</li>
                  <li className="moveMent">{poke?.moves[13].move.name}</li>
                  <li className="moveMent">{poke?.moves[14].move.name}</li>
                  <li className="moveMent">{poke?.moves[15].move.name}</li>
                  <li className="moveMent">{poke?.moves[16].move.name}</li>
                  <li className="moveMent">{poke?.moves[17].move.name}</li>
                  <li className="moveMent">{poke?.moves[18].move.name}</li>
                  <li className="moveMent">{poke?.moves[19].move.name}</li>
                  <li className="moveMent">{poke?.moves[20].move.name}</li>
                  <li className="moveMent">{poke?.moves[21].move.name}</li>
                  <li className="moveMent">{poke?.moves[22].move.name}</li>
                  <li className="moveMent">{poke?.moves[23].move.name}</li>
                  <li className="moveMent">{poke?.moves[24].move.name}</li>
              </ul>
          </div>
        </div>
      </div>
      
    );
  }
};

export default PokeInfo;
