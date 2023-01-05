import "../hojas-de-estilos/LinksSuperiores.css";

export function LinksSuperiores() {
  return (
    <div className="link-contenedor">
      <a href="/">
        <img
          className="link-icono"
          src="https://i.pinimg.com/564x/56/96/34/5696347ff2e75d4139491f9689a40169.jpg"
          alt="rick-morty"
        />
      </a>

      <a href="/">Docs</a>
      <a href="/">About</a>
      <button className="button-support">SUPPORT US</button>
    </div>
  );
}
