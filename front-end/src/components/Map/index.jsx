import mapStyles from "../../mapStyles";
import { useCallback, useRef, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

import Locate from "./Locate";
import Search from "./Search";
import Markers from "./Markers";

const mapContainerStyle = {
  width: "85%",
  height: "75%",
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

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(); 
  // state should be as high up in chain as possible, pass it down by props if its only a few levels

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="google-map">
      <Search panTo={panTo} />
      <Locate panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Markers
          markers={markers}
          setSelected={setSelected}
          selected={selected}
        />
      </GoogleMap>
    </div>
  );
}

export default Map;
