import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";

export default function App() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  return (
    <main className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Catálogo de Talleres</h1>
        <button onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}>
          {tema === "claro" ? "Tema oscuro" : "Tema claro"}
        </button>
      </div>
      <div className="row g-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <TarjetaTaller taller={taller} />
          </div>
        ))}
      </div>
    </main>
  );
}