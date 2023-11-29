import { PlaneAxes, UnitVector } from "../../src/axes";
import { LineConfig } from "../../src/plots/line.config";
import { VectorPlot } from "../../src/plots/vectorplot";
import {
  ArrowHelper,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Object3D,
  Quaternion,
  Vector3,
} from "three";
import { VectorPlotConfiguration } from "../../src/plots/vectorplot.config";

describe("VectorPlot", () => {
  it("should create a VectorPlot object with valid input parameters", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(1, 1, 1);
    const vectorPlot = new VectorPlot(origin, target);

    expect(vectorPlot).toBeInstanceOf(VectorPlot);
  });

  it("should return an array of Object3D when getFrameable is called", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(1, 1, 1);
    const vectorPlot = new VectorPlot(origin, target);
    const frameable = vectorPlot.getDrawables();

    expect(frameable).toBeInstanceOf(Array);
    expect(frameable.length).toBeGreaterThan(0);
    frameable.forEach((obj) => {
      expect(obj).toBeInstanceOf(Object3D);
    });
  });

  it("should create a vector arrow helper with correct parameters", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(1, 1, 1);
    const vectorPlot = new VectorPlot(origin, target);
    const arrowHelper = vectorPlot.getDrawables()[0] as ArrowHelper;

    expect(arrowHelper).toBeInstanceOf(ArrowHelper);
    expect(arrowHelper.position).toEqual(origin);
    expect(arrowHelper.line.material).toBeInstanceOf(LineBasicMaterial);
  });

  it("should create a VectorPlot object with identical origin and target", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(0, 0, 0);
    const vectorPlot = new VectorPlot(origin, target);

    expect(vectorPlot).toBeInstanceOf(VectorPlot);
    expect(vectorPlot.getDrawables().length).toBe(1);
  });

  it("should create a VectorPlot object with origin and target on different planes", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(1, 1, 0);
    const vectorPlot = new VectorPlot(origin, target);
    expect(vectorPlot.getDrawables().length).toBe(1);
  });

  it("should create a VectorPlot object with origin and target on the same plane", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(1, 1, 0);

    const config = {
      xy: {
        projection: true,
        component: true,
        projectionAngle: true,
      },
    };

    const vectorPlot = new VectorPlot(origin, target, config);

    expect(vectorPlot.getDrawables().length).toBe(4);
  });

  it("should create a VectorPlot object with target on the origin", () => {
    const origin = new Vector3(0, 0, 0);
    const target = new Vector3(0, 0, 0);
    const vectorPlot = new VectorPlot(origin, target);

    expect(vectorPlot.getDrawables().length).toBe(1);
  });
});


