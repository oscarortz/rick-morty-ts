import React from "react";
import { LinksSuperiores } from "./componentes/LinksSuperiores";
import "./App.css";
import { Titulo } from "./componentes/Titulo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegacion } from "./componentes/NavLink";
import { Home } from "./paginas/Home";
import { TodosLosEpisodios } from "./paginas/TodosLosEpisodios";
import { TodasLasLocaciones } from "./paginas/TodasLasLocaciones";
import { DetalleDelPersonaje } from "./paginas/DetalleDelPersonaje";
import { DetalleEpisodios } from "./paginas/DetalleEpisodios";

function App() {
  return (
    <div className="App">
      <LinksSuperiores />
      <Titulo />
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodios" element={<TodosLosEpisodios />} />
          <Route path="/locacion" element={<TodasLasLocaciones />} />
          <Route
            path="/detalleDelPersonaje/:id"
            element={<DetalleDelPersonaje />}
          />
          <Route path="/detalleEpisodios/:id" element={<DetalleEpisodios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
