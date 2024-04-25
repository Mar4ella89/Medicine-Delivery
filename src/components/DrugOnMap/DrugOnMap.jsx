import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const DrugOnMap = ({ currentDrug }) => {
  const defaultCoorditates = {
    latitude: 50.442226451645666,
    longitude: 30.53763616537363,
  };

  const { latitude, longitude } = currentDrug
    ? currentDrug.coordinates
    : defaultCoorditates;

  console.log(latitude);

  return (
    <LoadScript googleMapsApiKey={'AIzaSyDKYZdu5xvm8s02742nhLWHdNVizpgEgsM'}>
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '300px' }}
        center={{ lat: latitude, lng: longitude }}
        zoom={5}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default DrugOnMap;
