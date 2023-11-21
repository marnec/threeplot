import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";
import { Plot } from "./plot";

export class ScatterPlot extends Plot {
  points: Mesh[];

  constructor(points: Vector3[], pointRadius = 0.2) {
    super();

    this.points = points.map((v) => {
      const geometry = new SphereGeometry(pointRadius);
      const material = new MeshBasicMaterial({ color: 0x00ff00 });
      const obj = new Mesh(geometry, material);
      obj.position.set(v.x, v.y, v.z);
      return obj;
    });
  }

  getFrameable() {
    return this.points;
  }
}
