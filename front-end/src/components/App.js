import Navbar from "./navbar/Navbar";
/* import MapContainer from "./container/MapContainer";
import JobsContainer from "./container/JobsContainer"; */
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <div className="map-container">
          <Map />
        </div>
        <div className="jobs-container">
          <p>Testing!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
