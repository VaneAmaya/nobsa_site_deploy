import { useState } from "react";
import { Destination } from "../../models/destination";
import { DestinationsMock } from "../../mocks/destinationsMock";
import { Link } from "react-router-dom";

export const DestinationsHome = () => {
  const [ArrayDestinations, setArrayDestinations] =
    useState<Array<Destination>>(DestinationsMock);
  return (
    <>
      <div className="mt-5 w-100 mb-3 text-light mb-5">
        <h1>Destinations</h1>
        <p className="flex-wrap fs-4 w-50" style={{ marginLeft: "25%" }}>
          Here are some of our destinations
        </p>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="d-flex justify-content-center flex-fill mb-5">
        <div className="row vh-100">
          <Link className="col-12 link mt-5 " to={`/destinations/${ArrayDestinations[9].name}`}>
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{
                background: `linear-gradient(#00000030, #00000030), url(${ArrayDestinations[9].image})`,
                backgroundSize: "1150px 450px",
              }}
            >
              <h1>{ArrayDestinations[9].name}</h1>
            </div>
          </Link>
          <Link className="col-12 link mt-5" to={`/destinations/${ArrayDestinations[7].name}`}>
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{
                background: `linear-gradient(#00000030, #00000030), url(${ArrayDestinations[7].image})`,
                backgroundSize: "1150px 450px",
                backgroundPositionY: "center"
              }}
            >
              <h1>{ArrayDestinations[7].name}</h1>
            </div>
          </Link>
          <Link className="col-12 link mt-5" to={`/destinations/${ArrayDestinations[3].name}`}>
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{
                background: `linear-gradient(#00000030, #00000030), url(${ArrayDestinations[3].image})`,
                backgroundSize: "1150px 450px",
                backgroundPositionY: "center"
              }}
            >
              <h1>{ArrayDestinations[3].name}</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className=" text-light">
        <span className="fs-3">Want to know more click &nbsp;</span>
        <Link
          className="btn fs-3 text-light btn-7AF0D680 border-3 rounded-4 mt-2 mb-4"
          to={"/destinations"}
        >
          Here!
        </Link>
      </div>
    </>
  );
};
