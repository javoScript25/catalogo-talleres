import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import Boton from "./components/Boton/Boton";

export default function App() {
  const [tema, setTema] = useState("claro");
  const [vista, setVista] = useState("grilla");
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  // clases de bootstrap que cambian según el estado
  const claseColumna =
    vista === "grilla" ? "col-12 col-md-6 col-lg-4" : "col-12";
  const claseContenedor = compacto ? "py-2" : "py-5";
  const claseGrilla = compacto ? "g-2" : "g-4";

  return (
    <main className={`container ${claseContenedor}`}>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <h1>Catálogo de Talleres</h1>

        <div className="d-flex flex-wrap gap-2">
          <Boton
            variante="secundario"
            onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
          >
            {tema === "claro" ? "Tema oscuro" : "Tema claro"}
          </Boton>

          <Boton
            activo={vista === "grilla"}
            aria-pressed={vista === "grilla"}
            onClick={() => setVista("grilla")}
          >
            Grilla
          </Boton>

          <Boton
            activo={vista === "lista"}
            aria-pressed={vista === "lista"}
            onClick={() => setVista("lista")}
          >
            Lista
          </Boton>

          <Boton
            variante="secundario"
            activo={compacto}
            aria-pressed={compacto}
            onClick={() => setCompacto(!compacto)}
          >
            Modo compacto
          </Boton>
        </div>
      </div>

      <div className={`row ${claseGrilla}`}>
        {talleres.map((taller) => (
          <div key={taller.id} className={claseColumna}>
            <TarjetaTaller taller={taller} horizontal={vista === "lista"} />
          </div>
        ))}
      </div>
    </main>
  );
}