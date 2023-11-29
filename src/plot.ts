import { Object3D } from "three";
import { Label } from "./label";

export interface FramedObject {
  getDrawables(): Object3D[];
  getWritables(): Label[];
}

export abstract class Plot implements FramedObject {
  protected drawables: Object3D[];
  protected writables: Label[];

  public getDrawables(): Object3D[] {
    return this.drawables;
  }

  public getWritables(): Label[] {
    return this.writables;
  }

  constructor() {
    this.drawables = [];
    this.writables = [];
  }
}
