import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyD6_mdfB1eIiwqlKiE6gE0u8va9_D5cnB4"}
          style={{ height: "350px", width: "570px" }}
          zoom={12}
          center={{
            lat: 23.9901183,
            lng: -104.6175808
          }}
          markers={[{ lat: 23.9901183, lng: -104.6175808 }]}
        />
      </div>
    );
  }
}