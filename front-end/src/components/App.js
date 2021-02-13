import Navbar from "./navbar/Navbar";
import MapContainer from "./container/MapContainer";
import JobsContainer from "./container/JobsContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <MapContainer />
        <JobsContainer />
      </div>
    </div>
  );
}

export default App;
