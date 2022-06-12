import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Polygon from "@arcgis/core/geometry/Polygon";

const karantinaPolygonCoords = [
  [35.52495699311039, 33.8993894469416],
  [35.53711711153977, 33.89710465698708],
  [35.53899942311941, 33.90162280168057],
  [35.53908350952664, 33.90227418579323],
  [35.53913956713148, 33.90278598410479],
  [35.53933576874837, 33.90346062263943],
  [35.54034480563524, 33.90441441283781],
  [35.539251682341124, 33.90562408261809],
  [35.53841081826874, 33.90548450621178],
  [35.53849490467597, 33.90494946120384],
  [35.53661697491429, 33.90501924987359],
  [35.536504859704635, 33.90494946120384],
  [35.53549582281776, 33.90501924987359],
  [35.53546779401535, 33.90522861553999],
  [35.53546779401535, 33.905251878360076],
  [35.53291717299574, 33.90534492957694],
  [35.52946963029892, 33.903832834718116],
  [35.52823636299274, 33.904065466442106],
  [35.52812424778308, 33.904088729579584],
  [35.52843256460964, 33.90399567699157],
  [35.52822234859154, 33.904065466442084],
  [35.5281382621843, 33.904088729579584],
  [35.528040161375856, 33.904100361145936],
  [35.52782994535776, 33.904100361145936],
  [35.52759170053724, 33.90405383487097],
  [35.52743754212397, 33.9039724138287],
  [35.52746557092638, 33.9039724138287],
  [35.527283383710696, 33.90386772951719],
  [35.52719929730346, 33.90375141346478],
  [35.52717126850105, 33.90372815023524],
  [35.52712922529743, 33.90333267436204],
  [35.52630237562624, 33.90287903801316],
  [35.52512864102058, 33.90110807849839],
  [35.525224982700045, 33.900428384024536],
  [35.52476735972256, 33.89968871035232],
  [35.52495699311039, 33.8993894469416],
];
const API_KEY =
  "AAPK7b5d90c80dfa41f0bcda0ecd1c2df337eqyVrIoVyvmiKq5Y5tm2yUvt4HdPQF8wJ0zHd40WUkFUdAjEq_V4rJc0GZLSfhN3";

const data = [
  { longitude: 35.52935238499353, latitude: 33.90265280208343, value: 20 },
  { longitude: 35.53390141140973, latitude: 33.90008818442558, value: 200 },
  { longitude: 35.52904052562536, latitude: 33.8997410307765, value: 1000 },
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

      const polygon = new Polygon({
        rings: karantinaPolygonCoords,
      });

      const karantinaGraphic = new Graphic({
        geometry: polygon,
        symbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: [51, 51, 204, 0.4],
          style: "solid",
          outline: {
            color: "white",
            width: 1,
          },
        },
        visible: true,
      });

      graphicsLayer.add(karantinaGraphic);

      new MapView({
        map: map,
        container: mapDiv.current,
        zoom: 16, // Zoom level
        center: [35.5324457886258, 33.90175539527376], // Longitude, latitude
        constraints: {
          minZoom: 15,
          geometry: polygon,
        },
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default EsriMap;
