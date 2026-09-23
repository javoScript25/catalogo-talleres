import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  const [expandida, setExpandida] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  // clase según los datos
  let estado = "disponible";
  if (libres === 0) estado = "completo";
  else if (libres <= 3) estado = "pocos";

  // clases condicionales: se agregan o quitan
  const clases = [
    estilos.tarjeta,
    estilos[estado],
    expandida ? estilos.expandida : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={clases}>
      {/* elemento condicional: si no es nuevo, no se renderiza nada */}
      {nuevo && <span className={estilos.etiqueta}>Nuevo</span>}

      <h2>{titulo}</h2>
      <p className={estilos.categoria}>{categoria}</p>

      <p>
        {estado === "completo"
          ? "Completo"
          : `Cupos libres: ${libres} de ${cupo}`}
      </p>

      {/* unico style permitido en todo el proyecto: valor calculado */}
      <div className={estilos.barra}>
        <div
          className={estilos.relleno}
          style={{ width: `${porcentaje}%` }}
        />
      </div>

      <button onClick={() => setExpandida(!expandida)}>
        {expandida ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {expandida && <p className={estilos.descripcion}>{descripcion}</p>}
    </article>
  );
}