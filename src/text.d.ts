declare module "troika-three-text" {
  import { Mesh } from "three";



  export class Text extends Mesh {
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
}
