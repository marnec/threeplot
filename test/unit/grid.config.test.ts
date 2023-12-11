import { test, expect } from "vitest";
import { GridParams } from "../../src/axes.params";
import { GridConfig } from "../../src/axes.config";
test("grid config for each plane should be 'true' if params are an empty object", () => {
  const params: GridParams = {};

  const config = new GridConfig(params);

  expect(config.xy).toBe(true);
  expect(config.xz).toBe(true);
  expect(config.yz).toBe(true);
});

test("grid config for a plane should be true if params are undefined", () => {
  const config = new GridConfig(undefined);

  expect(config.xy).toBe(true);
  expect(config.xz).toBe(true);
  expect(config.yz).toBe(true);
});

test("grid config for a plane should be true when explicitely set to true", () => {
  const config = new GridConfig({ xy: true, xz: true, yz: true });

  expect(config.xy).toBe(true);
  expect(config.xz).toBe(true);
  expect(config.yz).toBe(true);
});

test("grid config for a plane should be true when only some are explicitely set to true", () => {
  const config = new GridConfig({ xy: true });

  expect(config.xy).toBe(true);
  expect(config.xz).toBe(true);
  expect(config.yz).toBe(true);
});

test("grid config for the others planes should be true when only one is set to false", () => {
  const config = new GridConfig({ xy: false });

  expect(config.xy).toBe(false);
  expect(config.xz).toBe(true);
  expect(config.yz).toBe(true);
});

test("grid config for the all planes should be false when all params are set to false", () => {
  const config = new GridConfig({ xy: false, xz: false, yz: false });

  expect(config.xy).toBe(false);
  expect(config.xz).toBe(false);
  expect(config.yz).toBe(false);
});
