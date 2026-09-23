import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";

export default function App() {
  return (
    <main className="container py-5">
      <h1>Catálogo de Talleres</h1>
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