import { expect, test } from "vitest";
import { Axes, NamedAxis } from "../../src/axes";
import { AxesConfig, AxisConfig, defaultAxisConfig } from "../../src/axes.config";

test("should create an instance of AxesConfig with default values when no parameters are provided", () => {
  const axesConfig = new AxesConfig();

  expect(axesConfig.x).toEqual(defaultAxisConfig[NamedAxis.x.name]);
  expect(axesConfig.y).toEqual(defaultAxisConfig[NamedAxis.y.name]);
  expect(axesConfig.z).toEqual(defaultAxisConfig[NamedAxis.z.name]);
});

test("axis configuration should be undefined if axis param is set to false", () => {
  const axesConfig = new AxesConfig({ x: false });

  expect(axesConfig.x).toBeUndefined();
  expect(axesConfig.y).toEqual(defaultAxisConfig[NamedAxis.y.name]);
  expect(axesConfig.z).toEqual(defaultAxisConfig[NamedAxis.z.name]);
});

// Should create an instance of AxesConfig with custom values when valid parameters are passed
test("should create an instance of AxesConfig with custom values when valid parameters are passed", () => {
  const params = {
    x: {
      color: 0x123456,
      width: 0.02,
      label: { text: "custom x" },
    },
    y: {
      color: 0x654321,
      width: 0.03,
      label: { text: "custom y" },
    },
    z: {
      color: 0xabcdef,
      width: 0.04,
      label: { text: "custom z" },
    },
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toEqual(new AxisConfig(params.x, NamedAxis.x.name));
  expect(axesConfig.y).toEqual(new AxisConfig(params.y, NamedAxis.y.name));
  expect(axesConfig.z).toEqual(new AxisConfig(params.z, NamedAxis.z.name));
});

test("should create an instance of AxesConfig with only some axes configured when some parameters are passed", () => {
  const params = {
    x: {
      color: 0x123456,
      width: 0.02,
      label: { text: "custom x" },
    },
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toEqual(new AxisConfig(params.x, NamedAxis.x.name));
  expect(axesConfig.y).toEqual(defaultAxisConfig[NamedAxis.y.name]);
  expect(axesConfig.z).toEqual(defaultAxisConfig[NamedAxis.z.name]);
});

test("should create an instance of AxesConfig with default values when parameters are passed as undefined", () => {
  const params = {
    x: undefined,
    y: undefined,
    z: undefined,
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toEqual(new AxisConfig(defaultAxisConfig.x, NamedAxis.x.name));
  expect(axesConfig.y).toEqual(new AxisConfig(defaultAxisConfig.y, NamedAxis.y.name));
  expect(axesConfig.z).toEqual(new AxisConfig(defaultAxisConfig.z, NamedAxis.z.name));
});

test("should create an instance of AxisConfig with default values when no parameters are passed", () => {
  const axisConfig = new AxisConfig({}, "x");
  expect(axisConfig.label).toEqual({ text: "x" });
  expect(axisConfig.color).toBe(0xff0000);
  expect(axisConfig.width).toBe(0.01);
});

test("should create an instance of AxisConfig with provided width, color and label parameters", () => {
  const params = {
    width: 0.02,
    color: 0x123456,
    label: {
      text: "custom label",
      fontSize: 12,
      color: 0xffffff,
    },
  };
  const axisConfig = new AxisConfig(params, "x");
  expect(axisConfig.label).toEqual(params.label);
  expect(axisConfig.color).toBe(params.color);
  expect(axisConfig.width).toBe(params.width);
});

test("should create an instance of AxisConfig with provided width and color parameters", () => {
  const params = {
    width: 0.02,
    color: 0x123456,
  };
  const axisConfig = new AxisConfig(params, "x");
  expect(axisConfig.label).toBe(defaultAxisConfig.x.label);
  expect(axisConfig.color).toBe(params.color);
  expect(axisConfig.width).toBe(params.width);
});

test("should create an instance of AxisConfig with 0 if falsey '0' value is passed on a numeric parameter", () => {
  const params = {
    label: { text: "Custom Label" },
    color: 0,
    width: 0,
  };
  const axisConfig = new AxisConfig(params, "x");
  expect(axisConfig.label).toEqual(params.label);
  expect(axisConfig.color).toBe(0x000000);
  expect(axisConfig.width).toBe(params.width);
});

test('should create an instance of AxisConfig with the correct label, color and width when valid parameters are passed with undefined label', () => {
  const params = {
    label: undefined,
    color: 0x00ff00,
    width: 0.02,
  };
  const axisConfig = new AxisConfig(params, "x");
  expect(axisConfig.label).toEqual({ text: 'x' });
  expect(axisConfig.color).toBe(params.color);
  expect(axisConfig.width).toBe(params.width);
});
