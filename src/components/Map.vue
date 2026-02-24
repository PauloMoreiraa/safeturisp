<template>
  <section class="map-section" aria-label="Map of Tourist Spots and Risk Areas in São Paulo">
    <h2 class="map-title">SafeTuriSP</h2>
    <div id="viewDiv" class="map-view" role="region" aria-label="Interactive map"></div>
  </section>
</template>

<script>
import points from "../assets/pontos.json";
import riskAreas from "../assets/areas_risco.json";

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import Graphic from "@arcgis/core/Graphic.js";
import esriConfig from "@arcgis/core/config.js";

// Widgets
import Legend from "@arcgis/core/widgets/Legend.js";
import Search from "@arcgis/core/widgets/Search.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";

// Force English locale
esriConfig.locale = "en";

export default {
  name: "Map",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map({ basemap: "streets-navigation-vector" });

      const view = new MapView({
        container: "viewDiv",
        map,
        center: [-46.633, -23.5505],
        zoom: 12,
        constraints: { snapToZoom: false }
      });

      // -----------------------------
      // Tourist Points Layer
      // -----------------------------
      const pointsLayer = new FeatureLayer({
        objectIdField: "ObjectID",
        fields: [
          { name: "ObjectID", type: "oid" },
          { name: "Name", type: "string" },
          { name: "Desc", type: "string" }
        ],
        geometryType: "point",
        source: points.map((pt, i) => ({
          geometry: { type: "point", longitude: pt.coords[0], latitude: pt.coords[1] },
          attributes: { ObjectID: i + 1, Name: pt.name, Desc: pt.description }
        })),
        renderer: {
          type: "simple",
          symbol: { type: "simple-marker", color: "#2F6FDB", size: "14px", outline: { color: "#fff", width: 2 } }
        },
        popupTemplate: { title: "{Name}", content: "{Desc}" },
        title: "Tourist Points"
      });

      map.add(pointsLayer);

      // -----------------------------
      // Risk Areas Layer
      // -----------------------------
      const riskLayer = new FeatureLayer({
        objectIdField: "ObjectID",
        fields: [
          { name: "ObjectID", type: "oid" },
          { name: "Name", type: "string" },
          { name: "RiskType", type: "string" }
        ],
        geometryType: "polygon",
        source: riskAreas.areas_risco_sp.map((area, i) => ({
          geometry: new Polygon({ rings: [ [...area.poligono_simplificado, area.poligono_simplificado[0]] ] }),
          attributes: { ObjectID: i + 1, Name: area.regiao, RiskType: area.tipo_risco }
        })),
        renderer: {
          type: "simple",
          symbol: { type: "simple-fill", color: "rgba(255,0,0,0.3)", outline: { color: "red", width: 2 } }
        },
        popupTemplate: { title: "{Name}", content: "{RiskType}" },
        title: "Risk Areas"
      });

      map.add(riskLayer);

      // -----------------------------
      // Widgets
      // -----------------------------
      const legend = new Legend({ view });
      view.ui.add(legend, "bottom-left");

      const searchWidget = new Search({
        view,
        searchPlaceholder: "Search points or regions..."
      });
      view.ui.add(searchWidget, { position: "top-right", index: 0 });

      const layerList = new LayerList({ view });
      view.ui.add(layerList, { position: "top-left" });
    }
  }
};
</script>

<style scoped>
.map-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  margin: 1rem auto;
  max-width: 1200px;
  transition: all 0.3s ease-in-out;
}

.map-section:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.map-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333333;
}

.map-view {
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.map-view:hover {
  transform: scale(1.01);
}

@media (max-width: 1024px) { .map-view { height: 500px; } }
@media (max-width: 768px) { 
  .map-section { padding: 1rem; }
  .map-view { height: 400px; }
  .map-title { font-size: 1.5rem; }
}
@media (max-width: 480px) { 
  .map-view { height: 300px; }
  .map-title { font-size: 1.3rem; }
}
</style>