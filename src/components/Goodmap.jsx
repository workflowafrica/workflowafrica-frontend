import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GoogleMap = props => (
  <div className="map">
    {" "}
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      {" "}
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
    /
  </div>
);
const mapStyles = {
  height: "500px",
  width: "100%"
};

export default GoogleApiWrapper({
  apiKey: "Token Here"
})(GoogleMap);
