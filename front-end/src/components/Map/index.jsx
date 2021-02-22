import mapStyles from "../../mapStyles";
import { useCallback, useRef, useState, useEffect } from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Locate from "./Locate";
import Markers from "./Markers";
import Search from "./Search";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 49.26800377076573,
  lng: -123.10571490809717,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries = ["places"];

export default function Map(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(16);
    }
  }, []);

  useEffect(() => {
    const lat = props.coord.lat;
    const lng = props.coord.lng;
    panTo({ lat, lng });
  }, [props.coord]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="google-map">
      <div className="map-title">Job Map</div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <div className="rowplz">
          <Search panTo={panTo} />
          <Locate panTo={panTo} />
        </div>
        <Markers
          state={props.state}
          markers={markers}
          setSelected={props.setSelected}
          selected={props.selected}
          coord={props.coord}
          jobMarkers={props.jobMarkers}
        />
      </GoogleMap>
    </div>
  );
}
