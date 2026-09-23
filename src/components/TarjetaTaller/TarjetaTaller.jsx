import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos } = taller;
  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  return (
    <article className={estilos.tarjeta}>
      <h2>{titulo}</h2>
      <p>{categoria}</p>
      <p>Cupos libres: {libres} de {cupo}</p>
    </article>
  );
}