import { ArrowHelper, LineBasicMaterial, Object3D, Vector3 } from "three";

import { expect, test } from "vitest";
import { VectorPlot } from "../../src/plots/vectorplot";

test("should create a VectorPlot object with valid input parameters", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(1, 1, 1);
  const vectorPlot = new VectorPlot(origin, target);

  expect(vectorPlot).toBeInstanceOf(VectorPlot);
});

test("should return an array of Object3D when getFrameable is called", () => {
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

test("should create a vector arrow helper with correct parameters", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(1, 1, 1);
  const vectorPlot = new VectorPlot(origin, target);
  const arrowHelper = vectorPlot.getDrawables()[0] as ArrowHelper;

  expect(arrowHelper).toBeInstanceOf(ArrowHelper);
  expect(arrowHelper.position).toEqual(origin);
  expect(arrowHelper.line.material).toBeInstanceOf(LineBasicMaterial);
});

test("should create a VectorPlot object with identical origin and target", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(0, 0, 0);
  const vectorPlot = new VectorPlot(origin, target);

  expect(vectorPlot).toBeInstanceOf(VectorPlot);
  expect(vectorPlot.getDrawables().length).toBe(1);
});

test("should create a VectorPlot object with origin and target on different planes", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(1, 1, 0);
  const vectorPlot = new VectorPlot(origin, target);
  expect(vectorPlot.getDrawables().length).toBe(1);
});

test("should create a VectorPlot object with origin and target on the same plane", () => {
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

test("should create a VectorPlot object with target on the origin", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(0, 0, 0);
  const vectorPlot = new VectorPlot(origin, target);

  expect(vectorPlot.getDrawables().length).toBe(1);
});

test("should create a label for the main angle", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(0, 0, 0);
  const vectorPlot = new VectorPlot(origin, target, { angle: { label: { text: "a" } } });

  expect(vectorPlot.getWritables().length).toBe(1);
});

test("should create a label for the main vector", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(0, 0, 0);
  const vectorPlot = new VectorPlot(origin, target, { label: { text: "a" } });

  expect(vectorPlot.getWritables().length).toBe(1);
});

test("should create a label for each component", () => {
  const origin = new Vector3(0, 0, 0);
  const target = new Vector3(0, 0, 0);
  const vectorPlot = new VectorPlot(origin, target, {
    xy: {
      projection: { label: { text: "a" } },
      component: { label: { text: "a" } },
      projectionAngle: { label: { text: "a" } },
    },
    xz: {
      projection: { label: { text: "a" } },
      component: { label: { text: "a" } },
      projectionAngle: { label: { text: "a" } },
    },
    yz: {
      projection: { label: { text: "a" } },
      component: { label: { text: "a" } },
      projectionAngle: { label: { text: "a" } },
    },
  });

  expect(vectorPlot.getWritables().length).toBe(9);
});
