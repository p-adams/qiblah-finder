import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

const position = [35.5485, -121.9886];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Qiblah Finder 🕋</h3>
      </header>
      <main>
        <MapContainer
          center={position}
          zoom={1}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "525px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline
            positions={[
              [35.5485, -121.9886],
              [21.422487, 39.826206],
            ]}
          />
        </MapContainer>
      </main>
      <footer />
    </div>
  );
}

export default App;
