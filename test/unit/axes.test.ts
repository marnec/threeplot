import { test, expect } from "vitest";
import { Axes, Axis } from "../../src/axes";
import { GridHelper } from "three";

test("should create an instance of Axes with given lengths and options", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;
  const options = {
    x: { color: 0x00000, width: 2 },
    y: { color: 0x00000, width: 3 },
    z: { color: 0x00000, width: 4 },
  };

  const axes = new Axes(lengthX, lengthY, lengthZ, options);

  expect(axes.x).toBeInstanceOf(Axis);
  expect(axes.y).toBeInstanceOf(Axis);
  expect(axes.z).toBeInstanceOf(Axis);
  expect(axes.gridXZ).toBeInstanceOf(GridHelper);
  expect(axes.gridXY).toBeInstanceOf(GridHelper);
  expect(axes.gridYZ).toBeInstanceOf(GridHelper);
});

test("should create an instance of Axis for each non-false axis in options", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;
  const options = {
    x: { color: 0x00ff00, width: 2 },
    y: false,
    z: { color: 0xff0000, width: 4 },
  };

  const axes = new Axes(lengthX, lengthY, lengthZ, options);

  expect(axes.x).toBeInstanceOf(Axis);
  expect(axes.y).toBeUndefined();
  expect(axes.z).toBeInstanceOf(Axis);
});

test("should create an instance of GridHelper for each grid", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;
  const options = {
    x: { color: 0, width: 2 },
    y: { color: 0, width: 3 },
    z: { color: 0, width: 4 },
  };

  const axes = new Axes(lengthX, lengthY, lengthZ, options);

  expect(axes.gridXZ).toBeInstanceOf(GridHelper);
  expect(axes.gridXY).toBeInstanceOf(GridHelper);
  expect(axes.gridYZ).toBeInstanceOf(GridHelper);
});

test("should create an instance of Axes with no options", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;

  const axes = new Axes(lengthX, lengthY, lengthZ);

  expect(axes.x).toBeInstanceOf(Axis);
  expect(axes.y).toBeInstanceOf(Axis);
  expect(axes.z).toBeInstanceOf(Axis);
  expect(axes.gridXZ).toBeInstanceOf(GridHelper);
  expect(axes.gridXY).toBeInstanceOf(GridHelper);
  expect(axes.gridYZ).toBeInstanceOf(GridHelper);
});

test("should create an instance of Axes with false options", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;
  const options = {
    x: false,
    y: false,
    z: false,
  };

  const axes = new Axes(lengthX, lengthY, lengthZ, options);

  expect(axes.x).toBeUndefined();
  expect(axes.y).toBeUndefined();
  expect(axes.z).toBeUndefined();
  expect(axes.gridXZ).toBeInstanceOf(GridHelper);
  expect(axes.gridXY).toBeInstanceOf(GridHelper);
  expect(axes.gridYZ).toBeInstanceOf(GridHelper);
});

test("should create an instance of Axis with zero length", () => {
  const lengthX = 0;
  const lengthY = 0;
  const lengthZ = 0;
  const options = {
    x: { color: 0, width: 2 },
    y: { color: 0, width: 3 },
    z: { color: 0, width: 4 },
  };

  const axes = new Axes(lengthX, lengthY, lengthZ, options);

  expect(axes.x).toBeInstanceOf(Axis);
  expect(axes.y).toBeInstanceOf(Axis);
  expect(axes.z).toBeInstanceOf(Axis);
  expect(axes.gridXZ).toBeInstanceOf(GridHelper);
  expect(axes.gridXY).toBeInstanceOf(GridHelper);
  expect(axes.gridYZ).toBeInstanceOf(GridHelper);
});
