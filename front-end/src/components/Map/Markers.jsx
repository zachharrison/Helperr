import { Marker, InfoWindow } from "@react-google-maps/api";
import "./Map.css";

export default function Markers({ selected, setSelected, coord, jobMarkers }) {
  // console.log("Job Markers inside array", jobMarkers);
  return (
    <>
      {jobMarkers.map(
        (marker) => (
          // console.log("marker==>", marker),
          // console.log(marker.id),
          // console.log(marker.lat),
          // console.log(marker.lng),
          (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/wrench.svg",
                scaledSize: new window.google.maps.Size(20, 20),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(10, 10),
              }}
              onClick={() => {
                // console.log("MARKER CLICKED");
                setSelected(marker);
              }}
            />
          )
        )
      )}
      <Marker
        position={{ lat: coord.lat, lng: coord.lng }}
        onChange={() => {
          setSelected(coord);
        }}
      />
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>Job Title</h2>
          </div>
        </InfoWindow>
      ) : null}
    </>
  );
}
