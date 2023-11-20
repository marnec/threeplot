import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";
import { Plot } from "./plot";

export class ScatterPlot extends Plot {
  constructor(width: number, height: number, depth: number) {
    super(width, height, depth);
  }

  public withData(data: Vector3[]): this {
    data
      .map((v) => {
        const g = new SphereGeometry(Math.max(this.width, this.height, this.depth) * 0.02);
        const m = new MeshBasicMaterial({ color: 0x00ff00 });
        const obj = new Mesh(g, m);
        obj.position.set(v.x, v.y, v.z);
        return obj;
      })
      .forEach((obj) => this.scene.add(obj));

    this.update();

    return this;
  }
}
