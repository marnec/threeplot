import { DoubleSide, Mesh, MeshLambertMaterial, Plane, PlaneGeometry, Vector3 } from "three";
import { Plot } from "../plot";

export class PlanePlot extends Plot {
  constructor(p1: Vector3, p2: Vector3, p3: Vector3) {
    super();

    const plane = new Plane();
    plane.setFromCoplanarPoints(p1, p2, p3);
    const size = 10;

    const max = p1.clone().max(p2).max(p3);
    const min = p1.clone().min(p2).min(p3);

    const avg = new Vector3().subVectors(max, min).divideScalar(2);

    console.log(max, min, avg);

    const geometry = new PlaneGeometry(size, size);
    const coplanaraPoint = new Vector3();

    plane.coplanarPoint(coplanaraPoint);

    const focalPoints = new Vector3().copy(coplanaraPoint).add(plane.normal);

    geometry.lookAt(focalPoints);

    geometry.translate(...coplanaraPoint.toArray());
    geometry.translate(avg.x, -avg.y, avg.z);

    const material = new MeshLambertMaterial({ color: 0xffff00, side: DoubleSide });
    const mesh = new Mesh(geometry, material);

    // mesh.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), plane.normal);
    this.drawables.push(mesh);
  }
}
