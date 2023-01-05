import { Link } from "react-router-dom";
import styled from "styled-components";
import "../hojas-de-estilos/Card-personaje.css";
interface Props {
  personajes: Array<{
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    episode: Array<string>;
    location: {
      name: string;
      url: string;
    };
  }>;
}

const Personaje = ({ personajes }: Props) => {
  return (
    <div>
      {personajes.map((personaje) => {
        return (
          <div key={personaje.id} className="card-personaje">
            <Link to={`/detalleDelPersonaje/${personaje.id}`}>
              <img src={personaje.image} alt={personaje.name} />
            </Link>
            <div>
              <h3>{personaje.name}</h3>
              <div className="status-contenedor">
                {personaje.status === "Alive" ? <Alive /> : <Dead />}
                <h5>
                  {personaje.status}-{personaje.species}
                </h5>
              </div>
              <p>Last know location</p>
              <h5>{personaje.location.name}</h5>
              <h5>{personaje.gender}</h5>

              <Link
                to={`/detalleEpisodios/${personaje.episode.map((item: string) =>
                  item.slice(40, 43).concat(",")
                )}`}
              >
                <p> Episodios donde aparece</p>
              </Link>
              <h6>
                {personaje.episode.map((item: string) =>
                  item.slice(40, 43).concat(" ")
                )}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Personaje;

const Alive = styled.div`
  background-color: green;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 5px;
`;

const Dead = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 5px;
`;
