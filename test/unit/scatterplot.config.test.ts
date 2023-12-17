import { expect, test } from "vitest";
import { ScatterPlotConfig } from "../../src/plots/scatterplot.config";
import { ScatterPlotParams } from "../../src/plots/scatterplot.params";
import { scatterplotParams } from "../../dist/plots/scatterplot.params";
import { getDefaults } from "../../src/type-magic";

test("config correctly instantiates with markersize = 0.01", () => {
  const params: ScatterPlotParams = { markerSize: 0.01, markerColor: 0x000000 };
  const config = new ScatterPlotConfig(10, params);
  expect(config).toBeInstanceOf(ScatterPlotConfig);
});

test("config correctly instantiates with 10 > markersize > 0.01", () => {
  const params: ScatterPlotParams = { markerSize: 1, markerColor: 0x000000 };
  const config = new ScatterPlotConfig(10, params);
  expect(config).toBeInstanceOf(ScatterPlotConfig);
});

test("config throws if markersize < 0.01", () => {
  const params: ScatterPlotParams = { markerSize: 0.0099, markerColor: 0x000000 };
  expect(() => new ScatterPlotConfig(10, params)).toThrowError(Error);
});

test("config throws if markersize > 10", () => {
  const params: ScatterPlotParams = { markerSize: 10.1, markerColor: 0x000000 };
  expect(() => new ScatterPlotConfig(10, params)).toThrowError(Error);
});

test("config correctly instantiates with markersize.length === nPoints", () => {
  const params: ScatterPlotParams = { markerSize: [1, 1, 1, 1], markerColor: 0x000000 };
  const config = new ScatterPlotConfig(4, params);
  expect(config).toBeInstanceOf(ScatterPlotConfig);
});

test("config correctly instantiates with markercolor.length === nPoints", () => {
  const params: ScatterPlotParams = { markerSize: 1, markerColor: [1, 1, 1, 1] };
  const config = new ScatterPlotConfig(4, params);
  expect(config).toBeInstanceOf(ScatterPlotConfig);
});

test("config throws if markersize.length !== nPoints", () => {
  const params: ScatterPlotParams = { markerSize: [1], markerColor: 0x000000 };
  expect(() => new ScatterPlotConfig(10, params)).toThrowError(Error);
});

test("config throws if markercolor.length !== nPoints", () => {
  const params: ScatterPlotParams = { markerSize: 1, markerColor: [1] };
  expect(() => new ScatterPlotConfig(10, params)).toThrowError(Error);
});

test("config falls-back to defaults when params are unspecified", () => {
  const nPoints = 10;
  const config = new ScatterPlotConfig(nPoints);
  expect(config.markerSize).toHaveLength(nPoints);
  expect(config.markerSize.at(0)).toEqual(0.01);
  expect(config.markerColor).toHaveLength(nPoints);
  expect(config.markerColor.at(0)).toEqual(0x00ff00);
});

test("config falls-back to defaults when params are partially specified", () => {
  const nPoints = 10;
  const config = new ScatterPlotConfig(nPoints, { markerColor: 0x00ff00 });


  expect(config.markerSize).toHaveLength(nPoints);
  expect(config.markerSize.at(0)).toEqual(0.01);
});
