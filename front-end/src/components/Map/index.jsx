import mapStyles from "../../mapStyles";
import { useCallback, useRef, useState } from "react";
import "./Map.css";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "@reach/combobox/styles.css";

import Search from "./Search";
import Locate from "./Locate";
import Markers from "./Markers";
import Places from "../Places/Places";

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
  const [selected, setSelected] = useState();

  const onMapClick = useCallback((event) => {
    props.setPostCode("Testing");
    props.setJobView("FIND");
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`
    )
      .then((response) => response.json())
      .then(
        (data) => console.log(data.features[1].context[0].text)
        // setPostCode(data.features[1].context[0].text)
      )
      // .then((data) => setPostCode(data.features[1].context[0].text))
      // .then(() => props.setJobView("Testing"))
      .then(() => console.log(props.state));
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
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/*         <Search panTo={panTo} /> */}
        <Places panTo={panTo} />
        <Locate panTo={panTo} />
        <Markers
          markers={markers}
          setSelected={setSelected}
          selected={selected}
        />
      </GoogleMap>
    </div>
  );
}
