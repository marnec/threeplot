import { Frame, ScatterPlot, getRandomPoints } from "../dist/index";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const points = getRandomPoints(200);
const scatterPlot = new ScatterPlot(points);

const frame = new Frame(canvas, 10);
frame.addPlot(scatterPlot);
