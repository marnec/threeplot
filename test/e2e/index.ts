import { Vector3 } from "three";
import { Frame, Greek, Label, PlanePlot, ScatterPlot, VectorPlot, getRandomPoints } from "../../dist/index";

const canvas1 = document.getElementById("canvas1") as HTMLCanvasElement;
const canvas2 = document.getElementById("canvas2") as HTMLCanvasElement;
const canvas3 = document.getElementById("canvas3") as HTMLCanvasElement;
const canvas4 = document.getElementById("canvas4") as HTMLCanvasElement;
const canvas5 = document.getElementById("canvas5") as HTMLCanvasElement;
const size = 10;

new Frame(
  canvas1,
  size,
  { x: false, y: { width: 0.025, label: { text: Greek.betaSymbol } } },
  { yz: false }
);

const frame2 = new Frame(canvas2, size);
const points = getRandomPoints(200);
const scatterPlot = new ScatterPlot(points, {
  markerColor: Array.from(Array(200).keys()).map((n) => n * 100000),
});
frame2.addPlot(scatterPlot);

const frame3 = new Frame(canvas3, size);
frame3.addLabel(
  new Label(new Vector3(3, 3, 3), { text: `${Greek.lowercaseAlpha}=1/2${Greek.lowercasePi}`, fontSize: 1 })
);

const frame4 = new Frame(canvas4, size, {}, { xy: false, xz: false, yz: false });
frame4.addPlot(
  new VectorPlot(new Vector3(0, 0, 0), new Vector3(7, 6.4, 4.6), {
    angle: { label: { text: Greek.uppercasePhi, anchorY: "top" } },
    label: { text: "v", anchorY: "bottom" },
    xy: {
      projection: { label: { text: "a", anchorY: "bottom", anchorX: "left" } },
      projectionAngle: { label: { text: Greek.lowercasePhi } },
      component: true,
    },
    xz: {
      projection: { label: { text: "b", anchorY: "bottom", anchorX: "center" } },
      projectionAngle: { label: { text: Greek.lowercaseBeta, anchorX: "right", anchorY: "bottom" } },
      component: false,
    },
  })
);


const frame5 = new Frame(canvas5, size);
const coplanarPoints = [new Vector3(1, 5, 1), new Vector3(9, 3, 10), new Vector3(1, 5, 10)] as const;
frame5.addPlot(new PlanePlot(...coplanarPoints, size*2));
frame5.addPlot(new ScatterPlot([...coplanarPoints]));
