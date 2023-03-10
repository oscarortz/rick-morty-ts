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
import { AuthProvider } from "./contexto/AuthContext";
import { PaginasPrivadas } from "./paginas/PaginasPrivadas";
import Login from "./paginas/Login";
import DetalleLocacion from "./paginas/DetalleLocacion";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LinksSuperiores />
        <Titulo />
        <BrowserRouter>
          <Navegacion />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PaginasPrivadas />}>
              <Route path="/episodios" element={<TodosLosEpisodios />} />
              <Route path="/locacion" element={<TodasLasLocaciones />} />
            </Route>
            <Route
              path="/detalleDelPersonaje/:id"
              element={<DetalleDelPersonaje />}
            />
            <Route
              path="/detalleEpisodios/:id"
              element={<DetalleEpisodios />}
            />
            <Route path="/detalleLocacion/:id" element={<DetalleLocacion />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
