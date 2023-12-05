import { expect, test } from "vitest";
import { AxesConfig, AxisConfig, defaultAxisConfig } from "../../src/axes.config";

// Should create an instance of AxesConfig with default values when no parameters are provided
test("should create an instance of AxesConfig with default values when no parameters are provided", () => {
  const axesConfig = new AxesConfig();

  expect(axesConfig.x).toEqual(defaultAxisConfig["x"]);
  expect(axesConfig.y).toEqual(defaultAxisConfig["y"]);
  expect(axesConfig.z).toEqual(defaultAxisConfig["z"]);
});
