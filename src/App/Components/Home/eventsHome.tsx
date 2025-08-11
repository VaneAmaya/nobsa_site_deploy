import { Carousel } from "react-bootstrap";
import { EventsMock } from "../../mocks/eventsMock";
import { useState } from "react";
import { Event } from "../../models/event";
import { Link } from "react-router-dom";

export const EventsHome = () => {
  const [ArrayEvents, setArrayEvents] = useState<Array<Event>>(EventsMock);
  return (
    <>
      <div className="mt-5 w-100 mb-3 text-light">
        <h1>Events</h1>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="d-flex justify-content-evenly">
            <Link to={`/events/${ArrayEvents[0].name}`}>
              <img
                src={ArrayEvents[0].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
            <Link to={`/events/${ArrayEvents[1].name}`}>
              <img
                src={ArrayEvents[1].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
            <Link to={`/events/${ArrayEvents[2].name}`}>
              <img
                src={ArrayEvents[2].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="d-flex justify-content-evenly">
            <Link to={`/events/${ArrayEvents[3].name}`}>
              <img
                src={ArrayEvents[3].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
            <Link to={`/events/${ArrayEvents[4].name}`}>
              <img
                src={ArrayEvents[4].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
            <Link to={`/events/${ArrayEvents[5].name}`}>
              <img
                src={ArrayEvents[5].poster}
                alt="no poster"
                width={300}
                height={500}
              />
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="text-light mt-5">
        <span className="fs-3">Want to know more click &nbsp;</span>
        <Link
          className="btn fs-3 text-light btn-7AF0D680 border-3 rounded-4 mt-2 mb-4"
          to={"/events"}
        >
          Here!
        </Link>
      </div>
    </>
  );
};
