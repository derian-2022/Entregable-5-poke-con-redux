import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Pokedex from "./pages/Pokedex";
import PokeInfo from "./pages/PokeInfo";


// import { useState } from "react";
// import Pagination from "./components/Pagination";
// import PokesDisplay from "./components/PokeDisplay";



function App() {

  // const [actualPage, setActualPage] = useState(1);
  // const pokesPerPage = 10;


  // const indexOfLastPoke = actualPage * pokesPerPage;
  // const indexOfFirsPoke = indexOfLastPoke - pokesPerPage;
  // const currentPokes = pokes.slice(indexOfFirsPoke, indexOfLastPoke);


  // const paginate = (pageNumber) => {
  //   setActualPage(pageNumber)
  // };




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeInfo />} />
        </Route>
        
      </Routes>
{/* 
    <h1>Pagination</h1>
    <Pagination
      paginate={paginate}
      totalPokes={pokes.length}
      pokesPerPage={pokesPerPage}
      /> */}

      {/* <div>
        {currentPokes.map((poke, index) => (
         <PokesDisplay key={index} poke={poke} index={index} />
        ))}
      </div> */}

    </div>
  );
}

export default App;
