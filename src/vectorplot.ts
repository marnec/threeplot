import {
  ArrowHelper,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  LineCurve3,
  Mesh,
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
    const angle = this.createAngle("x");

    console.log(angle);
    this.drawables.push(vector);
    this.drawables.push(angle);
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
        0,  0,            // ax, aY
        10, 10,           // xRadius, yRadius
        0,  2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        0                 // aRotation
    );

    const material = new LineBasicMaterial( { color: 0x000000 } )
    const geometry = new BufferGeometry().setFromPoints( curve.getPoints(50) );
    return new Line(geometry, material);
  }

  private createProjection(vector: ArrowHelper, axis: "xy" | "xz" | "yz") {}

  public getFrameable(): Object3D<Object3DEventMap>[] {
    return this.drawables;
  }
}
