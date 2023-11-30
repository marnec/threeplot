import { Vector3 } from "three";
import { Text } from "troika-three-text";

export type LabelParameters = Partial<Text> & Required<Pick<Text, "text">>;

export class Label extends Text {
  constructor(position: Vector3, params: LabelParameters) {
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


