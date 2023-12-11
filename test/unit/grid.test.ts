import { test, expect } from "vitest";
import { Axes } from "../../src/axes";
import { GridParams } from "../../src/axes.params";
import { GridHelper } from "three";

test("should create an instance of Axes with given lengths and options", () => {
  const axes = new Axes(10, 10, 10, undefined, undefined);

  expect(axes.getDrawables().filter((d) => d instanceof GridHelper)).toHaveLength(3);
});

test("should create an instance of Axes with given lengths and options", () => {
  const axes = new Axes(10, 10, 10, undefined, { xy: true, xz: true, yz: true });

  expect(axes.getDrawables().filter((d) => d instanceof GridHelper)).toHaveLength(3);
});

test("should create an instance of Axes with given lengths and options", () => {
  const axes = new Axes(10, 10, 10, undefined, { xy: true, xz: true, yz: false });

  expect(axes.getDrawables().filter((d) => d instanceof GridHelper)).toHaveLength(2);
});

test("should create an instance of Axes with given lengths and options", () => {
  const axes = new Axes(10, 10, 10, undefined, { xy: true, xz: false, yz: false });

  expect(axes.getDrawables().filter((d) => d instanceof GridHelper)).toHaveLength(1);
});

test("should create an instance of Axes with given lengths and options", () => {
  const axes = new Axes(10, 10, 10, undefined, { xy: false, xz: false, yz: false });

  expect(axes.getDrawables().filter((d) => d instanceof GridHelper)).toHaveLength(0);
});
