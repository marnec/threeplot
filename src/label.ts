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

// class FallbackLabel implements FramedObject {
//   drawable: Mesh;

//   constructor(private position: Vector3, private text: string, private size = 1, private color = 0x000000) {
//     const geometry = new TextGeometry(this.text, {
//       font: new Font(fontJson),
//       size: this.size,
//       height: 0.01,
//       curveSegments: 25,
//       bevelEnabled: false,
//     });

//     const material = new MeshBasicMaterial({ color: this.color });

//     this.drawable = new Mesh(geometry, material);
//     this.drawable.position.set(...this.position.toArray());
//   }

//   getDrawables(): Mesh[] {
//     return [this.drawable];
//   }
// }
