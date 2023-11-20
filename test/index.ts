import { Vector3 } from "three";
import { ScatterPlot } from "../dist/index";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

new ScatterPlot(10, 10, 10).showOn(canvas).withData([new Vector3(1, 1, 1)]);
