import "./Map.css";
export default function Locate(props) {
  return (
    <button
      className="find-me"
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
      <img src="./compass-regular.svg" alt="my location" />
      {/* remove outline of button and increase icon size */}
    </button>
  );
}
