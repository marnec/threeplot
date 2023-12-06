import { GridHelper, Vector3 } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { AxesConfig, AxisConfig } from "./axes.config";
import { AxesParams, AxisParams } from "./axes.params";
import { Framed } from "./plot";
import { Label, LabelProperties } from "./label";

export const UnitVector = {
  i: new Vector3(1, 0, 0),
  j: new Vector3(0, 1, 0),
  k: new Vector3(0, 0, 1),
} as const;

export const PlaneAxes = {
  xy: { normal: UnitVector.k, unit: { x: UnitVector.i, y: UnitVector.j } },
  xz: { normal: UnitVector.j, unit: { x: UnitVector.i, z: UnitVector.k } },
  yz: { normal: UnitVector.i, unit: { y: UnitVector.j, z: UnitVector.k } },
} as const;

export const NamedAxis = {
  x: { name: "x", unit: UnitVector.i },
  y: { name: "y", unit: UnitVector.j },
  z: { name: "z", unit: UnitVector.k },
} as const;

export class Axis extends Line2 {
  config: AxisConfig;

  constructor(direction: Vector3, private length: number, params: AxisParams, public axisIdentifier: keyof typeof NamedAxis) {
    const points = [new Vector3(), direction.clone().multiplyScalar(length)];

    const geometry = new LineGeometry();
    geometry.setPositions(points.flatMap((p) => p.toArray()));

    const { color, width } = new AxisConfig(params, axisIdentifier);
    const material = new LineMaterial({ color, linewidth: width });

    super(geometry, material);

    super.computeLineDistances();
  }

  getLabel(params: LabelProperties) {
    return new Label(
      NamedAxis[this.axisIdentifier].unit.clone().multiplyScalar(this.length + (params.fontSize || 1)),
      params
    );
  }
}

export class Axes extends Framed {
  public gridXZ: GridHelper;
  public gridXY: GridHelper;
  public gridYZ: GridHelper;
  private config: AxesConfig;

  constructor(private lengthX: number, private lengthY: number, private lengthZ: number, options?: AxesParams) {
    super();

    this.config = new AxesConfig(options);

    const { x, y, z } = this.config;

    if (x) {
      const xAxis = new Axis(NamedAxis.x.unit, lengthX * 1.1, x, NamedAxis.x.name);
      this.drawables.push(xAxis);
      if (x.label) this.writables.push(xAxis.getLabel(x.label));
    }
    if (y) {
      const yAxis = new Axis(NamedAxis.y.unit, lengthY * 1.1, y, NamedAxis.y.name);
      this.drawables.push(yAxis);
      if (y.label) this.writables.push(yAxis.getLabel(y.label));
    }
    if (z) {
      const zAxis = new Axis(NamedAxis.z.unit, lengthZ * 1.1, z, NamedAxis.z.name);
      this.drawables.push(zAxis);
      if (z.label) this.writables.push(zAxis.getLabel(z.label));
    }

    this.setGrids();
  }

  private setGrids() {
    this.gridXZ = new GridHelper(Math.max(this.lengthX, this.lengthZ));
    this.gridXZ.position.setX(this.lengthX / 2);
    this.gridXZ.position.setZ(this.lengthZ / 2);

    this.gridXY = new GridHelper(Math.max(this.lengthX, this.lengthY));
    this.gridXY.position.setX(this.lengthX / 2);
    this.gridXY.position.setY(this.lengthY / 2);
    this.gridXY.rotateOnAxis(NamedAxis.x.unit, Math.PI / 2);

    this.gridYZ = new GridHelper(Math.max(this.lengthY, this.lengthZ));
    this.gridYZ.position.setY(this.lengthY / 2);
    this.gridYZ.position.setZ(this.lengthZ / 2);
    this.gridYZ.rotateOnAxis(NamedAxis.z.unit, Math.PI / 2);
  }
}
