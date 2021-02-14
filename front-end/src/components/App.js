import Navbar from "./navbar/Navbar";
import Map from "./Map";
import { Input } from "@material-ui/core";
import Jobs from "./Jobs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="containers">

        <div className="map-container">
          <Map />
        </div>

        <div className="jobs-container">
          <Jobs />
        </div>

      </div>
    </div>
  );
}

export default App;
