import { Vector3 } from "three";
import { Text } from "troika-three-text";

// TODO: I currently had to duplicate this interface in order to get autocompletion when using the lib
// I was using a dynamically generated type from my augmented Text but it wasn't being carried in the compiled lib
// I tried placing this interface in the text.d.ts but it wasn't being exported in this case neither. 
// This second option can probabily be achieved by explicitating types to be bundler but I currently don't know how
// this is a duplication hence inherently bad but the type is not changing since its third-party 
export interface LabelProperties {
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
  maxWidth?: number;
  outlineBlur?: number;
  outlineColor?: number;
  outlineOffsetX?: number;
  outlineOffsetY?: number;
  outlineOpacity?: number;
  outlineWidth?: number;
  overflowWrap?: "normal" | "break-word";
  strokeColor?: number;
  strokeOpacity?: number; // 0 - 1
  strokeWidth?: number;
  textAlign?: "left" | "right" | "center" | "justify";
  textIndent?: number;
  whiteSpace?: "normal" | "nowrap";
}

export class Label extends Text {
  constructor(position: Vector3, params: LabelProperties) {
    super();
    this.text = params.text;
    this.fontSize = params.fontSize || 1;
    this.position.x = position.x;
    this.position.y = position.y;
    this.position.z = position.z;
    this.anchorX = params.anchorX || "center";
    this.anchorY = params.anchorY || "middle";
    this.color = params.color || 0x000000;
  }
}
