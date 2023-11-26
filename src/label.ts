import {
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Object3DEventMap,
  Vector3,
} from "three";
import { FramedObject } from "./plot";
import { Text } from "troika-three-text";
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import fontJson from "./fonts/helvetiker_regular.typeface.json";

export class Label implements FramedObject {
  text: Text;

  constructor(position: Vector3, text: string, size = 0.2, color = 0x000000) {
    this.text = new Text();
    this.text.text = text;
    this.text.position.x = position.x;
    this.text.position.y = position.y;
    this.text.position.z = position.z;
    this.text.anchorX = "center";
    this.text.anchorY = "middle";
    this.text.fontSize = size;
    this.text.color = color;
  }

  getFrameable(): Object3D<Object3DEventMap>[] {
    this.text.sync();
    return [this.text];
  }
}

export class FallbackLabel implements FramedObject {
  drawable: Mesh;

  constructor(
    private position: Vector3,
    private text: string,
    private size = 1,
    private color = 0x000000
  ) {
    const geometry = new TextGeometry(this.text, {
      font: new Font(fontJson),
      size: this.size,
      height: 0.01,
      curveSegments: 25,
      bevelEnabled: false,
    });

    const material = new MeshBasicMaterial({ color: this.color });

    this.drawable = new Mesh(geometry, material);
    this.drawable.position.set(...this.position.toArray());
  }

  getFrameable(): Mesh[] {
    return [this.drawable];
  }
}
