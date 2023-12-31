import { expect, test } from "vitest";
import { Axes, Axis, NamedAxis } from "../../src/axes";

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

  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.x.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.y.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.z.name)).toBeInstanceOf(Axis);
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

  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.x.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.y.name)).toBeUndefined();
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.z.name)).toBeInstanceOf(Axis);
});

test("should create an instance of Axes with no options", () => {
  const lengthX = 10;
  const lengthY = 20;
  const lengthZ = 30;

  const axes = new Axes(lengthX, lengthY, lengthZ);

  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.x.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.y.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.z.name)).toBeInstanceOf(Axis);
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

  expect(axes.getDrawables().filter((d) => d instanceof Axis)).toHaveLength(0);
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

  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.x.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.y.name)).toBeInstanceOf(Axis);
  expect(axes.getDrawables().find((a) => (a as Axis).axisIdentifier === NamedAxis.z.name)).toBeInstanceOf(Axis);
});
