import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const API_KEY =
  "AAPK7b5d90c80dfa41f0bcda0ecd1c2df337eqyVrIoVyvmiKq5Y5tm2yUvt4HdPQF8wJ0zHd40WUkFUdAjEq_V4rJc0GZLSfhN3";

const data = [
  { longitude: 35.5018, latitude: 33.8938, value: 20 },
  { longitude: 35.5441, latitude: 33.8338, value: 200 },
  { longitude: 35.3729, latitude: 33.5571, value: 1000 },
];

const getColor = (value) => {
  if (value < 200) return [0, 255, 0];
  if (value < 900) return [225, 255, 0];
  return [255, 0, 0];
};

const createPoint = (data) => {
  const point = {
    type: "point",
    longitude: data.longitude,
    latitude: data.latitude,
  };

  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: getColor(data.value),
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  const attributes = {
    name: "Air Quality",
    description: data.value.toString(),
  };

  return new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
    attributes: attributes,
    popupTemplate: {
      title: attributes.name,
      content: attributes.description,
    },
  });
};

function EsriMap() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      esriConfig.apiKey = API_KEY;

      const map = new Map({
        basemap: "arcgis-streets", // Basemap layer service
      });

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      data.forEach((p) => {
        const pointGraphic = createPoint(p);
        graphicsLayer.add(pointGraphic);
      });

      new MapView({
        map: map,
        container: mapDiv.current,
        center: [35.5018, 33.8938], // Longitude, latitude
        zoom: 8, // Zoom level
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default EsriMap;
