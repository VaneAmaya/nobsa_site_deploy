import { Link } from "react-router-dom";
import { DestinationsMock } from "../../mocks/destinationsMock";
import { useEffect, useState } from "react";
import { Destination } from "../../models/destination";

export const DestinationsLand = () => {

  const [arrayDestinations,setArrayDestinations ] = useState<Array<Destination>>(DestinationsMock)
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta en el DOM
    window.scrollTo(0, 0); // Forzar el desplazamiento al inicio de la página
  }, []);

  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ animation: "3s fadeIn3" }}
    >
      <div className="mt-5 w-100 mb-3 text-light">
        <h1>Destinations</h1>
        <p className="flex-wrap fs-4 w-50" style={{ marginLeft: "25%" }}>
          Search between our best destinations to visit and create the greatest
          memories
        </p>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="row vh-100 p-5 mb-5">
        {arrayDestinations.map((destinito) => (
          <Link
            key={destinito.id}
            className={"col-3 link mt-4 flex-fill"}
            to={`/destinations/${destinito.name}`}
          >
            <div
              className="h-100"
              style={{
                background: `linear-gradient(#00000020, #00000020), url(${destinito.imageCard})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="h-100 float-lg-start ms-3 mt-3">
                {destinito.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
