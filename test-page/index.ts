import { Vector3 } from "three";
import { Frame, ScatterPlot, VectorPlot, getRandomPoints } from "../dist/index";

const canvas1 = document.getElementById("canvas1") as HTMLCanvasElement;
const canvas2 = document.getElementById("canvas2") as HTMLCanvasElement;

const points = getRandomPoints(200);
const scatterPlot = new ScatterPlot(points);

const frame1 = new Frame(canvas1, 10);
frame1.addPlot(scatterPlot);

const frame2 = new Frame(canvas2, 10);
frame2.addPlot(new VectorPlot(new Vector3(0, 0, 0), new Vector3(2.5, 2.5, 2.5)))