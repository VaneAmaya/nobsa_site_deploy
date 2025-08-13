import { Carousel } from "react-bootstrap";
import { EventsMock } from "../../mocks/eventsMock";
import { Link } from "react-router-dom";
import { Gallery } from "../../mocks/gallery";
import { useEffect, useState } from "react";
import { Event } from "../../models/event";
import { Image } from "../../models/image";

export const EventsLand = () => {

  const [arrayEvent, setArryEvent ] = useState<Array<Event>>(EventsMock)
  const [arrayGalley, setArryGallery ] = useState<Array<Image>>(Gallery)
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta en el DOM
    window.scrollTo(0, 0); // Forzar el desplazamiento al inicio de la página
  }, []);
  return (
    <div
      className="d-flex justify-content-center text-light flex-column"
      style={{ animation: "3s fadeIn3" }}
    >
      <div className="mt-5 w-100 mb-3">
        <h1>Events to enjoy the stay</h1>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="mb-5">
        <Carousel>
          {arrayEvent.map((eventito) => (
            <Carousel.Item key={eventito.id} interval={1000}>
              <Link to={`/events/${eventito.name}`}>
                <img
                  src={eventito.image}
                  alt="no imagen"
                  width={"1000px"}
                  height={"575px"}
                />
              </Link>
              <Carousel.Caption>
                <h3>{eventito.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="row vh-100 p-5 mb-5">
        {arrayEvent.map((eventito) => (
          <Link
            key={eventito.id}
            className={`col-3 link mt-4 flex-fill`}
            to={`/events/${eventito.name}`}
          >
            <div
              className="h-100"
              style={{
                background: `linear-gradient(#00000030, #00000030), url(${eventito.imageCard})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="h-100 float-lg-start ms-3 mt-3">
                {eventito.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="flex-column-revers mb-0 rounded-top-5"
        style={{ background: "#3d7f9980" }}
      >
        <h1 className="mt-3 mb-3">Sponsors</h1>
        <div className="row justify-content-evenly">
          {arrayGalley.map(function (foto, i) {
            if (i >= 3 && i <= 10) {
              return (
                <div key={foto.id} className="col-3 m-4 link rounded-5" style={{backgroundColor: "#7AF0D680"}}>
                  <img className="m-3" src={foto.image} alt="no logo" width={250} height={150}/>
                </div>
              );
            }else{
              return(<></>)
            }
          })}
        </div>
      </div>
    </div>
  );
};
