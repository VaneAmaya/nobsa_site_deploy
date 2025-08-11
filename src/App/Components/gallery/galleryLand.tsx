import { useEffect, useState } from "react";
import { Gallery } from "../../mocks/gallery";
import { Image } from "../../models/image";
import { ModalImagen } from "./modalImage";

export const GalleryLand = () => {
  const [ArregloImages, setArregloImages] = useState<Array<Image>>(Gallery);
  const [showModal, setShowModal] = useState(false);
  const [objImage, setobjImage] = useState<Image>(new Image(0, ""));
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta en el DOM
    window.scrollTo(0, 0); // Forzar el desplazamiento al inicio de la página
  }, []);
  return (
    <div className="vw-100">
      <div
        className="d-flex justify-content-center flex-column"
        style={{ animation: "3s fadeIn3" }}
      >
        <div className="mt-5 w-100 mb-3 text-light">
          <h1>Gallery</h1>
          <p className="flex-wrap fs-4 w-50" style={{ marginLeft: "25%" }}>
            View our beautiful landscapes and the little towns that we have in
            this particle region of Colombia
          </p>
          <div className="linea rounded-5 mt-3 ">s</div>
        </div>
        <div className="row vh-100 m-3">
          {ArregloImages.map(function (foto, i) {
            if (i >= 11 && i <= 21) {
              return (
                <div
                  key={foto.id}
                  className={`col-3 link mt-4  ${
                    i >= 15 && i <= 17
                      ? "ms-3 me-3 flex-fill justify-content-evenly"
                      : ""
                  }`}
                >
                  <a
                    href=""
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                      setobjImage(foto);
                    }}
                  >
                    <div
                      className="h-100"
                      style={{
                        background: `url(${foto.image})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </a>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
        <div className="row vh-100 m-3">
          {ArregloImages.map(function (foto, i) {
            if (i >= 21) {
              return (
                <div
                  key={foto.id}
                  className={`col-3 link mt-2 ${
                    i >= 21 && i <= 23
                      ? "ms-3 me-3 flex-fill justify-content-evenly"
                      : ""
                  }`}
                >
                  <a
                    href=""
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                      setobjImage(foto);
                    }}
                  >
                    <div
                      className="h-100"
                      style={{
                        background: `url(${foto.image})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </a>
                </div>
              );
            } else {
              return <></>;
            }
          })}
          <ModalImagen
            show={showModal}
            onHide={() => {
              setShowModal(false);
            }}
            image={objImage}
          />
        </div>
      </div>
    </div> 
  );
};
