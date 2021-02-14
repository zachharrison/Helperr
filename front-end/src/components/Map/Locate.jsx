import './map.css'
export default function Locate(props) {
  return (
    <button className="find-me"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            props.panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="my-location.jpg" alt="my location" />
    </button>
  );
}