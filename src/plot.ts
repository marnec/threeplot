import { Object3D } from "three";

export interface FramedObject {
  getFrameable(): Object3D[];
}

export abstract class Plot implements FramedObject {
  abstract getFrameable(): Object3D[];
}
