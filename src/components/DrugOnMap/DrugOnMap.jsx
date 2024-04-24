import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const DrugOnMap = ({ pharmacyData }) => {
  console.log(pharmacyData);
  console.log(pharmacyData.coordinates);
  // const { latitude, longitude } = pharmacyData.coordinates;
  const { coordinates } = pharmacyData;
  console.log(coordinates);

  return (
    <LoadScript
      googleMapsApiKey={'AIzaSyDKYZdu5xvm8s02742nhLWHdNVizpgEgsM'}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '300px' }}
        center={{ lat: 1, lng: 1 }}
        zoom={15}
      >
        <Marker position={{ lat: 2, lng: 2 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default DrugOnMap;
