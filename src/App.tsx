import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Cabecera } from "./App/Components/varios/cabecera";
import { Footer } from "./App/Components/varios/footer";
import { Suspense } from "react";
import { Ruteo } from "./App/router/Ruteo";

const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3 mb-3">
      <button
        className="btn btn-outline-primary"
        type="button"
        disabled
      ></button>
      <span className="spinner-grow spinner-grow-sm text-bg-light" role="status"></span>
      Cargando ...
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Cabecera></Cabecera>
        <Suspense fallback={cargando}>
          <Ruteo></Ruteo>
        </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
