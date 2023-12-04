import { GridHelper, Vector3 } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { AxesParams } from "./axes.params";
import { AxesConfig } from "./axes.config";

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
  constructor(direction: Vector3, length: number, color: number, linewidth = 0.01) {
    const points = [new Vector3(), direction.multiplyScalar(length)];

    const geometry = new LineGeometry();
    geometry.setPositions(points.flatMap((p) => p.toArray()));

    const material = new LineMaterial({ color, linewidth });

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

    this.x = new Axis(new Vector3(1, 0, 0), this.lengthX * 1.1, 0xff0000);
    this.y = new Axis(new Vector3(0, 1, 0), this.lengthY * 1.1, 0x00ff00);
    this.z = new Axis(new Vector3(0, 0, 1), this.lengthZ * 1.1, 0x0000ff);

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
