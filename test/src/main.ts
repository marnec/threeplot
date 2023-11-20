import * as THREE from "three";
import { ScatterPlot } from "threeplot";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas");

console.log(canvas)

if (!canvas) {
  throw new Error("Insert a canvas element in html");
}

new ScatterPlot(10, 10, 10)
  .showOn(canvas)
  .withData([new THREE.Vector3(1, 1, 1)]);
