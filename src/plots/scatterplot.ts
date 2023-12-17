import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";
import { Plot } from "../plot";
import { ScatterPlotConfig } from "./scatterplot.config";
import { ScatterPlotParams } from "./scatterplot.params";

export class ScatterPlot extends Plot {
  config!: ScatterPlotConfig;

  constructor(points: Vector3[], params?: ScatterPlotParams) {
    super();

    this.config = new ScatterPlotConfig(points.length, params);

    this.drawables = points.map((v, i) => {
      const geometry = new SphereGeometry(this.config.markerSize[i]);
      const material = new MeshBasicMaterial({ color: this.config.markerColor[i] });
      const obj = new Mesh(geometry, material);
      obj.position.set(v.x, v.y, v.z);
      return obj;
    });
  }
}
