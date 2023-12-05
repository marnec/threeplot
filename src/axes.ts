import { GridHelper, Vector3 } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { AxesParams, AxisParams } from "./axes.params";
import { AxesConfig, AxisConfig } from "./axes.config";

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

class Axis extends Line2 {
  config: AxisConfig;

  constructor(direction: Vector3, length: number, params: AxisParams, axisIdentifier: keyof typeof NamedAxis) {
    const points = [new Vector3(), direction.multiplyScalar(length)];

    const geometry = new LineGeometry();
    geometry.setPositions(points.flatMap((p) => p.toArray()));

    const { color, width } = new AxisConfig(params, axisIdentifier);
    const material = new LineMaterial({ color, linewidth: width });

    super(geometry, material);

    super.computeLineDistances();
  }
}

export class Axes {
  public x: Line2;
  public y: Line2;
  public z: Line2;
  public gridXZ: GridHelper;
  public gridXY: GridHelper;
  public gridYZ: GridHelper;
  private config: AxesConfig;

  constructor(private lengthX: number, private lengthY: number, private lengthZ: number, options?: AxesParams) {
    this.config = new AxesConfig(options);

    const { x, y, z } = this.config;

    if (x) this.x = new Axis(new Vector3(1, 0, 0), this.lengthX * 1.1, x, NamedAxis.x.name);
    if (y) this.y = new Axis(new Vector3(0, 1, 0), this.lengthY * 1.1, y, NamedAxis.y.name);
    if (z) this.z = new Axis(new Vector3(0, 0, 1), this.lengthZ * 1.1, z, NamedAxis.z.name);

    this.setGrids();
  }

  private setGrids() {
    this.gridXZ = new GridHelper(Math.max(this.lengthX, this.lengthZ));
    this.gridXZ.position.setX(this.lengthX / 2);
    this.gridXZ.position.setZ(this.lengthZ / 2);

    this.gridXY = new GridHelper(Math.max(this.lengthX, this.lengthY));
    this.gridXY.position.setX(this.lengthX / 2);
    this.gridXY.position.setY(this.lengthY / 2);
    this.gridXY.rotateOnAxis(new Vector3(1, 0, 0), Math.PI / 2);

    this.gridYZ = new GridHelper(Math.max(this.lengthY, this.lengthZ));
    this.gridYZ.position.setY(this.lengthY / 2);
    this.gridYZ.position.setZ(this.lengthZ / 2);
    this.gridYZ.rotateOnAxis(new Vector3(0, 0, 1), Math.PI / 2);
  }
}
