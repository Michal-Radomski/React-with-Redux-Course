//* Tutorial: https://docs.mapbox.com/help/getting-started
//- Api Key is not hosted on GitHub.com

import React from "react";

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import * as mapboxgl from "!mapbox-gl";

import "./MapBox.scss";

const MapBoxApiKey = process.env.REACT_APP_MapBox_API_KEY;
// console.log("MapBoxApiKey:", MapBoxApiKey);

mapboxgl.accessToken = MapBoxApiKey as string;

const MapBox = (): JSX.Element => {
  const mapContainer = React.useRef<HTMLElement | any>(null!);
  const map = React.useRef<mapboxgl.Map | null>(null!);
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

  React.useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(1));
      setLat(map.current.getCenter().lat.toFixed(1));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div style={{border: "2px solid #008f68", margin: "10px"}}>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapBox;
