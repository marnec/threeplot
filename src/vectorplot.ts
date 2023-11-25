import {
  ArrowHelper,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Object3D,
  Object3DEventMap,
  Quaternion,
  Vector3,
} from "three";
import { Plot } from "./plot";
import { AxesPlane, UnitVector } from "./axes";

export class VectorPlot extends Plot {
  private drawables: (ArrowHelper | Line)[];

  constructor(private origin: Vector3, private target: Vector3) {
    super();

    this.drawables = [];

    this.drawables.push(this.createVector(origin, target));
    this.drawables.push(...this.createProjection("xy"));
    this.drawables.push(...this.createProjection("yz"));
    this.drawables.push(...this.createProjection("xz"));
    this.drawables.push(this.createAngleToProjection("xz"));
    this.drawables.push(this.createAngleToProjection("xy"));
    this.drawables.push(this.createAngleToProjection("yz"));
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

  private createAngleToProjection<P extends keyof typeof AxesPlane>(
    planeIdx: P
  ) {
    const plane = AxesPlane[planeIdx];
    const planeNormal = plane.normal;
    const projectedVector = this.target.clone().projectOnPlane(planeNormal);
    const radius = projectedVector.distanceTo(this.origin);

    let initialRotation = 0;
    if (planeIdx === "xz") initialRotation = -Math.PI / 2;
    if (planeIdx === "yz") initialRotation = Math.PI / 2;

    const curve = new EllipseCurve(
      this.origin.x,
      this.origin.y,
      radius,
      radius,
      0,
      Math.PI / 2,
      false,
      initialRotation
    );

    const material = new LineBasicMaterial({ color: 0x000000 });
    const geometry = new BufferGeometry().setFromPoints(curve.getPoints(50));

    const rotation = new Quaternion().setFromUnitVectors(
      UnitVector.k,
      plane.normal
    );

    geometry.applyQuaternion(rotation);

    return new Line(geometry, material);
  }

  private createProjection<P extends keyof typeof AxesPlane>(plane: P) {
    const lineMaterial = new LineDashedMaterial({
      color: 0x000000,
      linewidth: 1,
      scale: 1,
      dashSize: 0.25,
      gapSize: 0.1,
    });

    const planeNormal = AxesPlane[plane].normal;

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
