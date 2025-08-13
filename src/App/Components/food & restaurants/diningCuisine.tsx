import { ComidasMock } from "../../mocks/comidasMock";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { restaurantsMock } from "../../mocks/restaurantMock";
import { useEffect, useState } from "react";
import { Restaurant } from "../../models/restaurant";
import { Food } from "../../models/food";



export const DiningCousine = () => {
  const [arryRestaurant, setArryRestaurant] = useState<Array<Restaurant>>(restaurantsMock)
  const [arryFood, setArryFood] = useState<Array<Food>>(ComidasMock)
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta en el DOM
    window.scrollTo(0, 0); // Forzar el desplazamiento al inicio de la página
  }, []);
  return (
    <div
      className="d-flex justify-content-center text-light flex-column"
      style={{ animation: "3s fadeIn3" }}
    >
      <div className="mt-5 w-100">
        <h1> Conoce nuestra gastronomía y gastronomía</h1>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="row vh-100 p-5">
        {arryFood.map((comidita, i) => (
          <Link
            key={comidita.id}
            className={`col-3 link mt-4  ${
              i >= 4 && i <= 6
                ? "ms-3 me-3 flex-fill justify-content-evenly"
                : ""
            }`}
            to={`/dining&cuisine/comidas/${comidita.name}`}
          >
            <div
              className="h-100"
              style={{
                background: `linear-gradient(#00000030, #00000030), url(${comidita.imageCard})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="h-100 float-lg-start ms-3 mt-3">
                {comidita.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5 w-100">
        <h1>Disfruta el sabor de nuestra cocina aquí</h1>
        <div className="linea rounded-5 mt-3 ">s</div>
      </div>
      <div className="mt-3 mb-5">
        <Carousel>
          {arryRestaurant.map((restaurant) => (
            <Carousel.Item key={restaurant.id} interval={2000}>
              <Link to={`/dining&cuisine/restaurantes/${restaurant.name}`}>
                <img src={restaurant.imageCard} alt="no" width={"750px"} height={"500px"} />
              </Link>
              <Carousel.Caption>
                <h3>{restaurant.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
