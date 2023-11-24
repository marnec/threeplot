import {
  ArrowHelper,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Object3D,
  Object3DEventMap,
  Vector3,
} from "three";
import { Plot } from "./plot";

export class VectorPlot extends Plot {
  private drawables: (ArrowHelper | Line)[];

  constructor(private origin: Vector3, private target: Vector3) {
    super();

    this.drawables = [];

    const vector = this.createVector(origin, target);
    const projection = this.createProjection("xy");
    const angle = this.createAngle("x");

    this.drawables.push(vector);
    this.drawables.push(...projection);
    this.drawables.push(...this.createProjection("yz"));
    this.drawables.push(...this.createProjection("xz"));
    // this.drawables.push(angle);
  }

  private createVector(origin: Vector3, target: Vector3) {
    const length = Math.abs(origin.distanceTo(target));

    return new ArrowHelper(
      target.clone().normalize(),
      origin,
      length,
      0x000000,
      length * 0.2,
      length * 0.1
    );
  }

  private createAngle(axis: "x" | "y" | "z") {
    const curve = new EllipseCurve(
      0,
      0, // ax, aY
      10,
      10, // xRadius, yRadius
      0,
      2 * Math.PI, // aStartAngle, aEndAngle
      false, // aClockwise
      0 // aRotation
    );

    const material = new LineBasicMaterial({ color: 0x000000 });
    const geometry = new BufferGeometry().setFromPoints(curve.getPoints(50));
    return new Line(geometry, material);
  }

  private createProjection(plane: "xy" | "xz" | "yz") {
    const lineMaterial = new LineDashedMaterial({
      color: 0x000000,
      linewidth: 1,
      scale: 1,
      dashSize: 0.25,
      gapSize: 0.1,
    });

    const planeNormal = new Vector3(
      plane === "yz" ? 1 : 0,
      plane === "xz" ? 1 : 0,
      plane === "xy" ? 1 : 0
    );

    const projectedVector = this.target.clone().projectOnPlane(planeNormal);

    const projectionGeometry = new BufferGeometry().setFromPoints([
      projectedVector,
      this.origin,
    ]);

    const connectionGeometry = new BufferGeometry().setFromPoints([
      projectedVector,
      this.target,
    ]);

    return [
      new Line(projectionGeometry, lineMaterial).computeLineDistances(),
      new Line(connectionGeometry, lineMaterial).computeLineDistances(),
    ];
  }

  public getFrameable(): Object3D<Object3DEventMap>[] {
    return this.drawables;
  }
}
