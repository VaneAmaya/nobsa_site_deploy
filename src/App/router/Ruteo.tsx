import { lazy, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Error } from "../Components/varios/error";
import { Home } from "../Components/Home/home";
import { AboutBoyaca } from "../Components/varios/aboutBoyaca";
import { DiningCousine } from "../Components/food & restaurants/diningCuisine";
import { EventsLand } from "../Components/Eventos/eventsLand";
import { GalleryLand } from "../Components/gallery/galleryLand";
import { DestinationsLand } from "../Components/destinations/destinationsLand";
import { FoodLand } from "../Components/food & restaurants/foodLand";
import { RestaurantLand } from "../Components/food & restaurants/restaurantLand";
import { EventoLand } from "../Components/Eventos/eventoLand";
import { DestinationLand } from "../Components/destinations/destinationLand";

const LazyHome = lazy(() =>
  import("../Components/Home/home").then(() => ({
    default: Home,
  }))
);
const LazyAbout = lazy(() =>
  import("../Components/varios/aboutBoyaca").then(() => ({
    default: AboutBoyaca,
  }))
);
const LazyDiningCuisine = lazy(() =>
  import("../Components/food & restaurants/diningCuisine").then(() => ({
    default: DiningCousine,
  }))
);
const LazyEvent = lazy(() =>
  import("../Components/Eventos/eventsLand").then(() => ({
    default: EventsLand,
  }))
);
const LazyGallery = lazy(() =>
  import("../Components/gallery/galleryLand").then(() => ({
    default: GalleryLand,
  }))
);
const LazyDestinations = lazy(() =>
  import("../Components/destinations/destinationsLand").then(() => ({
    default: DestinationsLand,
  }))
);
const LazyComida = lazy(() =>
import("../Components/food & restaurants/foodLand").then(() => ({
  default: FoodLand,
}))
);
const LazyRestaurante = lazy(() =>
import("../Components/food & restaurants/restaurantLand").then(() => ({
  default: RestaurantLand,
}))
);
const LazyEvento = lazy(() =>
import("../Components/Eventos/eventoLand").then(() => ({
  default: EventoLand,
}))
);
const LazyDestino = lazy(() =>
  import("../Components/destinations/destinationLand").then(() => ({
    default: DestinationLand,
  }))
);
const LazyError = lazy(() =>
  import("../Components/varios/error").then(() => ({
    default: Error,
  }))
);

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyHome />}></Route>
      <Route path="/aboutBoyaca" element={<LazyAbout />}></Route>
      <Route path="/events" element={<LazyEvent />}></Route>
      <Route path="/events/:eventito" element={<LazyEvento />}></Route>
      <Route path="/dining&cuisine" element={<LazyDiningCuisine />}></Route>
      <Route path="/dining&cuisine/comidas/:comida" element={<LazyComida />}></Route>
      <Route path="/dining&cuisine/restaurantes/:rest" element={<LazyRestaurante />}></Route>
      <Route path="/gallery" element={<LazyGallery />}></Route>
      <Route path="/destinations" element={<LazyDestinations />}></Route>
      <Route path="/destinations/:destino" element={<LazyDestino />}></Route>
      <Route path="*" element={<LazyError />}></Route>
    </Routes>
  );
};
