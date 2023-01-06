import { Personajes } from "../componentes/Personajes";
import { Autenticacion } from "../componentes/Autenticacion";

export const Home = () => {
  return (
    <div>
      <Autenticacion />
      <Personajes />
    </div>
  );
};
