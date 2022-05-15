import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";

import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Circle, Fill, Stroke } from "ol/style";

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

const OLMap = () => {
  const mapDiv = useRef();
  const popupRef = useRef();
  const popupCloseBtnRef = useRef();

  const [selectedFeature, setSelectedFeature] = useState();

  useEffect(() => {
    let map;

    if (mapDiv.current) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useGeographic();

      const overlay = new Overlay({
        element: popupRef.current,
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      });

      const points = data.map(
        (p) =>
          new Feature({
            value: p.value,
            type: "icon",
            geometry: new Point([p.longitude, p.latitude]),
          })
      );

      const vetctorSource = new VectorSource({
        features: [...points],
      });

      const vectorLayer = new VectorLayer({
        source: vetctorSource,
        style: function (feature) {
          const value = feature.get("value");

          return new Style({
            image: new Circle({
              radius: 12,
              fill: new Fill({ color: getColor(value) }),
              // stroke: new Stroke({
              //   color: getColor(value),
              //   width: 2,
              // }),
            }),
          });
        },
      });

      const handleClosePopup = () => {
        overlay.setPosition(undefined);
      };

      const select = new Select({
        source: vetctorSource,
        style: new Style({
          image: new Circle({
            radius: 12,
            fill: new Fill({ color: "black" }),
            stroke: new Stroke({
              color: "white",
              width: 2,
            }),
          }),
        }),
      });

      select.on("select", (event) => {
        const selectedFeature = event.selected[0];
        if (selectedFeature) {
          const coordinate = selectedFeature.getGeometry()?.getCoordinates();
          setSelectedFeature(selectedFeature?.get("value"));
          overlay.setPosition(coordinate);
        } else {
          handleClosePopup();
        }
      });

      popupCloseBtnRef.current.addEventListener("click", handleClosePopup);

      map = new Map({
        target: mapDiv.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: [35.5018, 33.8938],
          zoom: 10,
        }),
        overlays: [overlay],
        // interactions: [select],
      });

      map.addInteraction(select);
    }

    return () => {
      map.setTarget(null);
      map = null;
    };
  }, []);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
      <div ref={popupRef} className="ol-popup">
        <button ref={popupCloseBtnRef} className="ol-popup-closer"></button>
        <div id="popup-content">{selectedFeature}</div>
      </div>
    </>
  );
};

export default OLMap;
