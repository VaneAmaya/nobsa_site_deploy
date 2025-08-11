import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Mapa = (props:any) => {
  const position:any = props.position
  const nombre: any = props.nombre
  return (
    <div className="d-flex justify-content-center" style={{ height: "400px"}}>
     <MapContainer center={position} zoom={13} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>{nombre}</Popup>
    </Marker>
  </MapContainer>
    </div>
  );
};


