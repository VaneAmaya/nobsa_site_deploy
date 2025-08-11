import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../models/image";
import { Gallery } from "../../mocks/gallery";

export const GalleryHome = () => {
  const [ArregloImages, setArregloImages] = useState<Array<Image>>(Gallery);
  return (
    <>
      <div className="mt-5 w-100 mb-3 text-light">
        <h1>Gallery</h1>
        <p className="flex-wrap fs-4 w-50" style={{ marginLeft: "25%" }}>
          Search between our best destinations to visit and create the greatest
          memories
        </p>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="m-4">
        <Carousel>
          {ArregloImages.map(function (foto, i) {
            if (i >= 11 && i <= 14) {
              return (
                <Carousel.Item key={foto.id} interval={2000}>
                  <Link to={"/gallery"}>
                    <img
                      src={foto.image}
                      alt="no imagen"
                      width={800}
                      height={550}
                    />
                  </Link>
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
      </div>
    </>
  );
};
