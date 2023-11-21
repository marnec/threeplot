import { ArrowHelper, Color, GridHelper, Vector3 } from "three";

class Axis extends ArrowHelper {
  constructor(direction: Vector3, length: number) {
    super(direction, new Vector3(0, 0, 0), length);
  }
}

export class Axes {
  public x: Axis;
  public y: Axis;
  public z: Axis;
  public gridXZ: GridHelper;
  public gridXY: GridHelper;
  public gridYZ: GridHelper;

  constructor(
    private lengthX: number,
    private lengthY: number,
    private lengthZ: number
  ) {
    this.x = new Axis(new Vector3(1, 0, 0), this.lengthX * 1.1);
    this.y = new Axis(new Vector3(0, 1, 0), this.lengthY * 1.1);
    this.z = new Axis(new Vector3(0, 0, 1), this.lengthZ * 1.1);

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
