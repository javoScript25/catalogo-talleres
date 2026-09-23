import { useState } from "react";
import Boton from "../Boton/Boton";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller, horizontal = false }) {
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
    horizontal ? estilos.horizontal : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={clases}>
      {nuevo && <span className={estilos.etiqueta}>Nuevo</span>}

      <h2>{titulo}</h2>
      <p className={estilos.categoria}>{categoria}</p>

      <p>
        {estado === "completo"
          ? "Completo"
          : `Cupos libres: ${libres} de ${cupo}`}
      </p>

      <div className={estilos.barra}>
        <div
          className={estilos.relleno}
          style={{ width: `${porcentaje}%` }}
        />
      </div>

      <Boton
        variante="secundario"
        activo={expandida}
        aria-expanded={expandida}
        onClick={() => setExpandida(!expandida)}
      >
        {expandida ? "Ocultar detalles" : "Ver detalles"}
      </Boton>

      {expandida && <p className={estilos.descripcion}>{descripcion}</p>}
    </article>
  );
}