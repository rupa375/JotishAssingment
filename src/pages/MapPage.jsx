import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapPage() {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>Delhi</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapPage;