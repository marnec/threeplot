import { Vector3 } from "three";
import { Frame, Greek, Label, ScatterPlot, VectorPlot, getRandomPoints } from "../../dist/index";

const canvas1 = document.getElementById("canvas1") as HTMLCanvasElement;
const canvas2 = document.getElementById("canvas2") as HTMLCanvasElement;
const canvas3 = document.getElementById("canvas3") as HTMLCanvasElement;

const points = getRandomPoints(200);
const scatterPlot = new ScatterPlot(points);

const frame1 = new Frame(canvas1, 10);
frame1.addPlot(scatterPlot);

const frame2 = new Frame(canvas2, 10);
frame2.addLabel(
  new Label(new Vector3(3, 3, 3), { text: `${Greek.lowercaseAlpha}=1/2${Greek.lowercasePi}`, fontSize: 1 })
);

const frame3 = new Frame(canvas3, 10);
frame3.addPlot(
  new VectorPlot(new Vector3(0, 0, 0), new Vector3(2.3, 3.2, 4.1), {
    angle: true,
    xy: { projection: { line: { type: "dashed", style: { color: 0x000000 } }, label: { text: "a" } } },
  })
);
