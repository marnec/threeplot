import { cluster } from "radash";
import {
  ArrowHelper,
  Box3,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Quaternion,
  Vector3,
} from "three";
import { Text } from "troika-three-text";
import { PlaneAxes, UnitVector } from "../axes";
import { Label, LabelProperties } from "../label";
import { Plot } from "../plot";
import { LineStyle } from "./line.config";
import { VectorPlotConfiguration, VectorPlotConfigurationParams } from "./vectorplot.config";

export class VectorPlot extends Plot {
  private config: VectorPlotConfigurationParams;

  constructor(private origin: Vector3, private target: Vector3, config?: VectorPlotConfiguration) {
    super();

    this.config = new VectorPlotConfigurationParams(config);

    this.drawables.push(this.createVector(origin, target));

    for (const p in PlaneAxes) {
      const plane = p as keyof typeof PlaneAxes;
      const conf = this.config[plane];

      if (conf?.projection) {
        const projection = this.createProjection(plane, conf.projection.line);
        if (conf.projection.label) {
          this.writables.push(this.createLineLabel(projection, conf.projection.label));
        }
        this.drawables.push(projection);
      }

      if (conf?.component) {
        const component = this.createComponent(plane, conf.component.line);
        if (conf.component.label) {
          this.writables.push(this.createLineLabel(component, conf.component.label));
        }
        this.drawables.push(component);
      }

      if (conf?.projectionAngle) {
        const angleToProjection = this.createAngleToProjection(plane, conf.projectionAngle.line);
        this.drawables.push(angleToProjection);
      }
    }
    if (this.config.angle) this.drawables.push(this.createAngleToTarget("y"));
  }

  private createVector(origin: Vector3, target: Vector3) {
    const length = Math.abs(origin.distanceTo(target));

    return new ArrowHelper(target.clone().normalize(), origin, length, this.config.color, length * 0.2, length * 0.1);
  }

  private createAngleToProjection<P extends keyof typeof PlaneAxes>(planeIdx: P, config: LineStyle) {
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

    const { type: linetype, style: linestyle } = config;
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

  private createProjection<P extends keyof typeof PlaneAxes>(plane: P, config: LineStyle): Line {
    const { type: linetype, style: linestyle } = config;

    const LineMaterialType = linetype === "dashed" ? LineDashedMaterial : LineBasicMaterial;

    const lineMaterial = new LineMaterialType(linestyle);

    const planeNormal = PlaneAxes[plane].normal;

    const projectedVector = this.target.clone().projectOnPlane(planeNormal);

    const projectionGeometry = new BufferGeometry().setFromPoints([projectedVector, this.origin]);

    return new Line(projectionGeometry, lineMaterial).computeLineDistances();
  }

  private createLineLabel(projection: Line, config: LabelProperties): Text {
    projection.geometry.computeBoundingBox();

    const bbox = projection.geometry.boundingBox as Box3;

    return new Label(bbox.max, { ...config });
  }

  private createComponent<P extends keyof typeof PlaneAxes>(plane: P, config: LineStyle): Line {
    const { type: linetype, style: linestyle } = config;
    const LineMaterialType = linetype === "dashed" ? LineDashedMaterial : LineBasicMaterial;
    const lineMaterial = new LineMaterialType(linestyle);

    const planeNormal = PlaneAxes[plane].normal;
    const projectedVector = this.target.clone().projectOnPlane(planeNormal);
    const connectionGeometry = new BufferGeometry().setFromPoints([projectedVector, this.target]);

    return new Line(connectionGeometry, lineMaterial).computeLineDistances();
  }
}
