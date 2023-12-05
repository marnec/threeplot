import { expect, test } from "vitest";
import { AxesConfig, AxisConfig } from "../../src/axes.config";

// Should create an instance of AxesConfig with default values when no parameters are provided
test("should create an instance of AxesConfig with default values when no parameters are provided", () => {
  const axesConfig = new AxesConfig();

  expect(axesConfig.x).toBeUndefined();
  expect(axesConfig.y).toBeUndefined();
  expect(axesConfig.z).toBeUndefined();
});

// Should create an instance of AxesConfig with provided parameters for x, y, and z axes
test("should create an instance of AxesConfig with provided parameters for x, y, and z axes", () => {
  const params = {
    x: { label: true, color: 0xff0000 },
    y: { label: { text: "Y Axis" }, width: 0.002 },
    z: { color: 0x00ff00 },
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toBeInstanceOf(AxisConfig);
  expect(axesConfig.x["label"]).toEqual({ text: "x" });
  expect(axesConfig.x["color"]).toBe(0x000000);

  expect(axesConfig.y).toBeInstanceOf(AxisConfig);
  expect(axesConfig.y["label"]).toEqual({ text: "Y Axis" });
  expect(axesConfig.y["width"]).toBe(0.002);
  expect(axesConfig.x["color"]).toBe(0x000000);

  expect(axesConfig.z).toBeInstanceOf(AxisConfig);
  expect(axesConfig.z["color"]).toBe(0x00ff00);
});

// Should create an instance of AxesConfig with provided parameters for some of the axes
test("should create an instance of AxesConfig with provided parameters for some of the axes", () => {
  const params = {
    x: { label: true, color: 0xff0000 },
    z: { color: 0x00ff00 },
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toBeInstanceOf(AxisConfig);
  expect(axesConfig.x["label"]).toBe(true);
  expect(axesConfig.x["color"]).toBe(0xff0000);

  expect(axesConfig.y).toBe(false);

  expect(axesConfig.z).toBeInstanceOf(AxisConfig);
  expect(axesConfig.z["color"]).toBe(0x00ff00);
});

// Should create an instance of AxesConfig with all axes set to false
test("should create an instance of AxesConfig with all axes set to false", () => {
  const params = {
    x: false,
    y: false,
    z: false,
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toBe(false);
  expect(axesConfig.y).toBe(false);
  expect(axesConfig.z).toBe(false);
});

// Should create an instance of AxesConfig with all axes set to true
test("should create an instance of AxesConfig with all axes set to true", () => {
  const params = {
    x: true,
    y: true,
    z: true,
  };
  const axesConfig = new AxesConfig(params);

  expect(axesConfig.x).toBe(true);
  expect(axesConfig.y).toBe(true);
  expect(axesConfig.z).toBe(true);
});
