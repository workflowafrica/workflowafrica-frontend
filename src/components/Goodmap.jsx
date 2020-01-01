import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = props => (
  <Map
    google={props.google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: 47.444, lng: -122.176 }}
  />
);
const mapStyles = {
  width: "100%",
  height: "100%"
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxmbIA_PhEzXdls18lRq1fA_oGOSeN1ks"
})(GoogleMap);
