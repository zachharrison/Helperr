import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ["places"]
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}
const center = {
  lat: 49.2827,
  lng: 123.1207,
}
function Map() {
  // const {isLoaded, loadError} = useJsApiLoader({
  //   googleMapsApiKey: process.env.GOOGLE_API_KEY,
  //   libraries,
  // })
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAuSGv-W1u-gLPBNv52KCOvTNJihxtJguE",
    libraries
  })

  // if (loadError) return "Error loading maps"
  // if (!isLoaded) return "Loading Maps"
  return <div>
    {/* <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap> */}
    <h1>Testing</h1>
  </div>
}

export default Map