import { Link } from "react-router-dom";
import { GalleryHome } from "./galleryHome";
import { AboutBoyacaHome } from "./aboutBoyacaHome";
import { EventsHome } from "./eventsHome";
import { DestinationsHome } from "./destinationsHome";

export const Home = () => {
  
  return (
    <div className="d-flex justify-content-center flex-column">
      <div
        className="container col-8 justify-content-center title text-light"
        style={{ marginTop: "10%", animation: "3s fadeIn" }}
      >
        <h1>
          Visit this beautiful place with many of secrets and stories to tell.
        </h1>
        <p className="mt-3">
          Many of the historical places that Colombia have are here. So what are
          you waiting, visit us.
        </p>
        <Link
          className="btn btn-7AF0D680 text-light border-3 rounded-4 p-3 fs-4"
          to={"/aboutBoyaca"}
        >
          Start the Journey
        </Link>
      </div>
      <GalleryHome></GalleryHome>
      <AboutBoyacaHome></AboutBoyacaHome>
      <EventsHome></EventsHome>
      <DestinationsHome></DestinationsHome>
    </div>
  );
};
