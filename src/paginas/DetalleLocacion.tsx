import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../contexto/AuthContext";

interface detalles {
  created: string;
  dimension: string;
  id: number;
  name: string;
  type: string;
}

const DetalleLocacion = () => {
  const [detalle, setDetalle] = useState<detalles>();
  const Context = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    getLocacionByID(`https://rickandmortyapi.com/api/location/${id}`);
  }, []);

  const getLocacionByID = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDetalle(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(detalle);
  return !Context?.auth ? (
    <div>
      <h2>"Logueate para ver el contenido"</h2>
      <Link to="/login">Login</Link>
    </div>
  ) : (
    <div>
      <p>Id</p>
      <h5>{detalle?.id}</h5>
      <p>Nombre:</p>
      <h5>{detalle?.name}</h5>
      <p>Dimension:</p>
      <h5>{detalle?.dimension}</h5>
      <p>Tipo:</p>
      <h5>{detalle?.type}</h5>
      <p>Fecha de creacion:</p>
      <h5>{detalle?.created}</h5>
    </div>
  );
};

export default DetalleLocacion;
