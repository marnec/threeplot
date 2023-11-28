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
import { Plot } from "../plot";
import { PlaneAxes, UnitVector } from "../axes";
import { VectorPlotConfiguration, VectorPlotConfigurationParams } from "./vectorplot.config";
import { LineConfig, LineStyle } from "./line.config";

export class VectorPlot extends Plot {
  private drawables: (ArrowHelper | Line)[];
  private config: VectorPlotConfigurationParams;

  constructor(private origin: Vector3, private target: Vector3, config?: VectorPlotConfiguration) {
    super();

    this.config = new VectorPlotConfigurationParams(config);

    this.drawables = [];

    this.drawables.push(this.createVector(origin, target));

    for (const p in PlaneAxes) {
      const plane = p as keyof typeof PlaneAxes;
      const conf = this.config[plane];
      if (conf?.projection) this.drawables.push(this.createProjection(plane, conf.projection));
      if (conf?.component) this.drawables.push(this.createComponent(plane, conf.component));
      if (conf?.projectionAngle) this.drawables.push(this.createAngleToProjection(plane, conf.projectionAngle));
    }
    if (this.config.angle) this.drawables.push(this.createAngleToTarget("y"));
  }

  private createVector(origin: Vector3, target: Vector3) {
    const length = Math.abs(origin.distanceTo(target));

    return new ArrowHelper(target.clone().normalize(), origin, length, this.config.color, length * 0.2, length * 0.1);
  }

  private createAngleToProjection<P extends keyof typeof PlaneAxes>(planeIdx: P, config: LineConfig) {
    const plane = PlaneAxes[planeIdx];
    const planeNormal = plane.normal;
    const projectedVector = this.target.clone().projectOnPlane(planeNormal);
    const radius = projectedVector.distanceTo(this.origin) * 0.5;

    let initialRotation = 0;
    let angleToProjection = projectedVector.angleTo(UnitVector.i);

    if (planeIdx === "xz") {
      initialRotation = -Math.PI / 2;
      angleToProjection = projectedVector.angleTo(UnitVector.k);
    }

    if (planeIdx === "yz") {
      initialRotation = Math.PI / 2;
      angleToProjection = projectedVector.angleTo(UnitVector.j);
    }

    const curve = new EllipseCurve(
      this.origin.x,
      this.origin.y,
      radius,
      radius,
      0,
      angleToProjection,
      false,
      initialRotation
    );

    const { type: linetype, style: linestyle } = config.line;
    const LineMaterialType = linetype === "dashed" ? LineDashedMaterial : LineBasicMaterial;
    const material = new LineMaterialType(linestyle);
    const geometry = new BufferGeometry().setFromPoints(curve.getPoints(50));

    const rotation = new Quaternion().setFromUnitVectors(UnitVector.k, plane.normal);

    geometry.applyQuaternion(rotation);

    return new Line(geometry, material);
  }

  private createAngleToTarget(axis: "x" | "y" | "z") {
    const radius = this.target.clone().distanceTo(this.origin);

    const projectedVector = this.target.clone().projectOnPlane(UnitVector.j);

    const curve = new EllipseCurve(
      this.origin.x,
      this.origin.y,
      radius,
      radius,
      0,
      this.target.angleTo(projectedVector),
      false,
      0
    );

    const material = new LineBasicMaterial(this.config.angle);
    const geometry = new BufferGeometry().setFromPoints(curve.getPoints(50));
    geometry.applyQuaternion(new Quaternion().setFromAxisAngle(UnitVector.j, -UnitVector.i.angleTo(projectedVector)));

    return new Line(geometry, material);
  }

  private createProjection<P extends keyof typeof PlaneAxes>(plane: P, config: LineConfig): Line {
    const { type: linetype, style: linestyle } = config.line;

    const LineMaterialType = linetype === "dashed" ? LineDashedMaterial : LineBasicMaterial;
    const lineMaterial = new LineMaterialType(linestyle);

    const planeNormal = PlaneAxes[plane].normal;

    const projectedVector = this.target.clone().projectOnPlane(planeNormal);

    const projectionGeometry = new BufferGeometry().setFromPoints([projectedVector, this.origin]);

    return new Line(projectionGeometry, lineMaterial).computeLineDistances();
  }

  private createComponent<P extends keyof typeof PlaneAxes>(plane: P, config: LineConfig): Line {
    const { type: linetype, style: linestyle } = config.line;
    const LineMaterialType = linetype === "dashed" ? LineDashedMaterial : LineBasicMaterial;
    const lineMaterial = new LineMaterialType(linestyle);

    const planeNormal = PlaneAxes[plane].normal;
    const projectedVector = this.target.clone().projectOnPlane(planeNormal);
    const connectionGeometry = new BufferGeometry().setFromPoints([projectedVector, this.target]);

    return new Line(connectionGeometry, lineMaterial).computeLineDistances();
  }

  public getFrameable(): Object3D<Object3DEventMap>[] {
    return this.drawables;
  }
}
