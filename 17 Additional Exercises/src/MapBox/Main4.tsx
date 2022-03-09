//* Tutorial: https://docs.mapbox.com/help/getting-started
//- Api Key is not hosted on GitHub.com

import React from "react";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

import "./Main4.scss";

const MapBoxApiKey = process.env.REACT_APP_MapBox_API_KEY;
// console.log("MapBoxApiKey:", MapBoxApiKey);

mapboxgl.accessToken = MapBoxApiKey;

const Main4 = (): JSX.Element => {
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<HTMLDivElement>(null!);
  const [lng, setLng] = React.useState<number>(18.5);
  const [lat, setLat] = React.useState<number>(54.5);
  const [zoom, setZoom] = React.useState<number>(9);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Main4;
