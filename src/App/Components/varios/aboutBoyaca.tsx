import { Link } from "react-router-dom";
import { Gallery } from "../../mocks/gallery";
import { useEffect } from "react";

export const AboutBoyaca = () => {
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta en el DOM
    window.scrollTo(0, 0); // Forzar el desplazamiento al inicio de la página
  }, []);
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "5%", animation: "3s fadeIn2" }}
      >
        <div
          className="w-100 ms-5 rounded-start-5 text-light"
          style={{
            background: "#3D7F99",
            boxShadow: "0px 0px 10px  #3D7F99",
          }}
        >
          <div className="float-lg-start p-3 m-auto" style={{marginLeft: "20%"}}>
            <img
              src={Gallery[0].image}
              alt="no imagen"
              className="rounded-5 position-absolute"
              width={"600px"}
            />
          </div>
          <div
            className="d-block rounded-start-5 float-end w-50 p-3"
            style={{ backgroundColor: "#7af0d64d", animation: "5s fade" }}
          >
            <h1 className="mt-5">A little piece of history</h1>
            <p className="m-5">
              One of the most pivotal moments in Colombian history occurred in
              Boyacá: the Battle of Boyacá on August 7, 1819. This battle marked
              a significant turning point in the country's struggle for
              independence from Spanish colonial rule. Led by the famed
              liberator, Simón Bolívar, the patriot forces engaged the royalist
              army in a decisive confrontation in the fields of Boyacá.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-3">Want to know more click &nbsp;</span>
              <Link
                className="btn fs-3 text-light btn-outline-success border-3 rounded-4"
                to={
                  "https://www.eltiempo.com/colombia/boyaca-conoce-las-caracteristicas-de-este-departamento-751044"
                }
              >
                Here!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "5%", animation: "3s fadeIn2" }}
      >
        <div
          className="w-100 me-5 rounded-end-5 text-light"
          style={{
            background: "#3D7F99",
            boxShadow: "0px 0px 10px  #3D7F99",
          }}
        >
          <div style={{marginLeft: "20%"}} >
            <img
              src={Gallery[1].image}
              alt="no imagen"
              className="rounded-5 position-absolute"
              width={"600px"}
            />
          </div>
          <div
            className="d-block rounded-end-5 float-start w-50 p-3"
            style={{ backgroundColor: "#7af0d64d", animation: "5s fade" }}
          >
            <h1 className="mt-5">Geographically speaking</h1>
            <p className="m-5">
              Boyacá is a department located in the central-eastern part of
              Colombia. It's situated within the Andean region of the country,
              characterized by its diverse landscapes that include mountains,
              valleys, and plateaus. Boyacá shares borders with several other
              departments, including Cundinamarca, Santander, Arauca, Casanare,
              and Norte de Santander. Its capital city is Tunja, which is
              approximately 150 kilometers northeast of Bogotá, the capital of
              Colombia.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-3">Want to know more click &nbsp;</span>
              <Link
                className="btn fs-3 text-light btn-outline-success border-3 rounded-4"
                to={"/Destinations"}
              >
                Here!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center mb-5"
        style={{ marginTop: "5%", animation: "3s fadeIn2" }}
      >
        <div
          className="w-100 ms-5 rounded-start-5 text-light"
          style={{
            background: "#3D7F99",
            boxShadow: "0px 0px 10px  #3D7F99",
          }}
        >
          <div className="float-lg-start p-4 m-auto" style={{marginLeft: "20%"}}>
            <img
              src={Gallery[2].image}
              alt="no imagen"
              className="rounded-5 position-absolute"
              width={"600px"}
            />
          </div>
          <div
            className="d-block rounded-start-5 float-end w-50 p-3"
            style={{ backgroundColor: "#7af0d64d", animation: "5s fade" }}
          >
            <h1 className="mt-5">Dining & Cousin</h1>
            <p className="m-5">
              The gastronomy of Boyacá is a rich and diverse tapestry
              of flavors, reflecting the region's varied topography,
              agricultural bounty, and cultural heritage. Nestled amidst the
              majestic Andes Mountains, Boyacá's cuisine is characterized by its
              hearty, wholesome dishes, often featuring locally grown produce
              and traditional cooking techniques.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-3">Want to know more click &nbsp;</span>
              <Link
                className="btn fs-3 text-light btn-outline-success border-3 rounded-4"
                to={"/dining&cuisine"}
              >
                Here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
