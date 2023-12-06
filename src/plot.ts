import { Object3D } from "three";
import { Label } from "./label";

export interface Frameable {
  getDrawables(): Object3D[];
  getWritables(): Label[];
}

export abstract class Framed implements Frameable {
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

export abstract class Plot extends Framed {}
