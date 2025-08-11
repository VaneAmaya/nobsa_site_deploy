import { Link } from "react-router-dom"
import { Gallery } from "../../mocks/gallery";
import { Image } from "../../models/image";
import { useState } from "react";

export const AboutBoyacaHome = () => {
    const [ArregloImages, setArregloImages] = useState<Array<Image>>(Gallery);
    return( <div
        className="d-flex justify-content-center align-items-center mb-4"
        style={{ marginTop: "5%", animation: "3s fadeIn2" }}
      >
        <div className="w-100 ms-5 rounded-start-5 text-light">
          <div className="float-lg-start" style={{ marginTop: "1%", marginLeft: "5%" }}>
            <img
              src={ArregloImages[24].image}
              alt="no imagen"
              className="rounded-5 "
              width={"500px"}
            />
          </div>
          <div
            className="d-block rounded-start-5 float-end p-3"
            style={{
              backgroundColor: "#3D7F99",
              animation: "5s fade",
              width: "55%",
            }}
          >
            <h1 className="mt-5">This is Boyacá</h1>
            <p className="m-5">
            Boyacá, Colombia, is a region nestled in the Andes Mountains, characterized by its breathtaking landscapes and rich cultural heritage. Its capital, Tunja, is a colonial city boasting charming cobblestone streets and colorful buildings. The area is renowned for its significant historical role in Colombia's independence, evident in museums and monuments scattered across the region.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-3">Want to know more click &nbsp;</span>
              <Link
                className="btn fs-3 text-light btn-7AF0D680 border-3 rounded-4"
                to={"/aboutBoyaca"}
              >
                Here!
              </Link>
            </div>
          </div>
        </div>
      </div>)
}