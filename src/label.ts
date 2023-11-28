import { Color, Mesh, MeshBasicMaterial, Object3D, Object3DEventMap, Vector3 } from "three";
import { FramedObject } from "./plot";
import { Text } from "troika-three-text";
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import fontJson from "./fonts/helvetiker_regular.typeface.json";

export interface LabelParameters {
  text: string;

  color?: number;
  fontSize?: number;
  anchorX?: number | "left" | "center" | "right";
  anchorY?: number | "top" | "top-baseline" | "top-cap" | "top-ex" | "middle" | "bottom-baseline" | "bottom";
  clipRect?: [number, number, number, number];
  curveRadius?: number;
  depthOffset?: number;
  fillOpacity?: number; // 0 - 1,
  font?: string; // url to .ttf, .otf, .woff
  fontStyle?: "normal" | "italic";
  fontWeight?: "normal" | "bold";
  glyphGeometryDetail?: number;
  letterSpacing?: number;
  lineHeight?: "normal" | number;
  material?: MeshBasicMaterial;
  maxWidth?: number;
  outlineBlur?: number;
  outlineColor?: number | Color;
  outlineOffsetX?: number;
  outlineOffsetY?: number;
  outlineOpacity?: number;
  outlineWidth?: number;
  overflowWrap?: "normal" | "break-word";
  strokeColor?: number | Color;
  strokeOpacity?: number; // 0 - 1
  strokeWidth?: number;
  textAlign?: "left" | "right" | "center" | "justify";
  textIndent?: number;
  whiteSpace?: "normal" | "nowrap";
}

export class Label implements FramedObject {
  text: Text;

  constructor(position: Vector3, params: LabelParameters) {
    this.text = new Text();
    this.text.text = params.text;
    this.text.fontSize = params.fontSize || 1;
    this.text.position.x = position.x;
    this.text.position.y = position.y;
    this.text.position.z = position.z;
    this.text.anchorX = params.anchorX || "center";
    this.text.anchorY = params.anchorY || "middle";
    this.text.color = params.color || 0x000000;
  }

  getFrameable(): Object3D<Object3DEventMap>[] {
    this.text.sync();
    return [this.text];
  }
}

class FallbackLabel implements FramedObject {
  drawable: Mesh;

  constructor(private position: Vector3, private text: string, private size = 1, private color = 0x000000) {
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
