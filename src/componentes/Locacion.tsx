interface Props {
  locaciones: Array<{
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
  }>;
}

export const Locacion = ({ locaciones }: Props) => {
  return (
    <div>
      {locaciones.map((item) => (
        <div key={item.id}>
          <h4>{item.id}</h4>
          <p>nombre</p>
          <h4>{item.name}</h4>
          <p>creado</p>
          <h4>{item.created}</h4>
          <p>tipo</p>
          <h4>{item.type}</h4>
          <p>dimension</p>
          <h4>{item.dimension}</h4>
        </div>
      ))}
    </div>
  );
};
