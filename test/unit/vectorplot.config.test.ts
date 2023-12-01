import {
  LineConfig,
  VectorPlotConfig,
  VectorPlotPlaneConfig,
} from "../../src/plots/vectorplot.config";
import { LineParams } from "../../dist/plots/line.config";
import { VectorPlotDefault } from "../../src/plots/vectorplot.defaults";

describe("VectorPlotConfigurationParams", () => {
  it("should set the color to the provided colorHex", () => {
    const config = { color: 0xff0000 };
    const params = new VectorPlotConfig(config);
    expect(params.color).toBe(0xff0000);
  });

  it("should set the color to default it undefined passed", () => {
    const config = {};
    const params = new VectorPlotConfig(config);
    expect(params.color).toBe(0x000000);
  });

  it("should create a new VectorPlotPlaneConfigParams object for xy, xz, yz when enabled singolarly", () => {
    const config = { xy: true, xz: true, yz: true };
    const params = new VectorPlotConfig(config);
    expect(params.xy).toBeInstanceOf(VectorPlotPlaneConfig);
    expect(params.xz).toBeInstanceOf(VectorPlotPlaneConfig);
    expect(params.yz).toBeInstanceOf(VectorPlotPlaneConfig);
  });

  it("should keep xy, xz, yz as undefined if passed as undefined", () => {
    const config = undefined;
    const params = new VectorPlotConfig(config);
    expect(params.xy).toBeUndefined();
    expect(params.xz).toBeUndefined();
    expect(params.yz).toBeUndefined();
  });

  it("should set xy, xz, and yz to undefined if they are not provided", () => {
    const config = {};
    const params = new VectorPlotConfig(config);
    expect(params.xy).toBeUndefined();
    expect(params.xz).toBeUndefined();
    expect(params.yz).toBeUndefined();
  });

  it("should keep the angle undefined if no angle is provided", () => {
    const config = {};
    const params = new VectorPlotConfig(config);
    expect(params.angle).toBeUndefined();
  });

  it("should keep the angle undefined if config undefined", () => {
    const config = undefined;
    const params = new VectorPlotConfig(config);
    expect(params.angle).toBeUndefined();
  });

  it("should set the angle to the provided angle object if it exists", () => {
    const config = { angle: { line: { type: "dashed", style: { color: 0x00ff00 } } } as LineParams };
    const params = new VectorPlotConfig(config);
    expect(params.angle).toEqual(new LineConfig(config.angle));
  });
});

describe("VectorPlotPlaneConfigParams", () => {
  it("should initialize all optional components to their default when true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfig(true);

    expect(configParams.projection).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.component).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.projectionAngle).toEqual(VectorPlotDefault.secondaryLine);
  });

  it("should initialize all properties to their default when an object with all properties set to true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfig({
      projection: true,
      component: true,
      projectionAngle: true,
    });

    expect(configParams.projection).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.component).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.projectionAngle).toEqual(VectorPlotDefault.secondaryLine);
  });

  it("should initialize projection component to its default when projection is true", () => {
    const configParams = new VectorPlotPlaneConfig({ projection: true });

    expect(configParams.projection).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize component component to its default when component is true", () => {
    const configParams = new VectorPlotPlaneConfig({ component: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toEqual(VectorPlotDefault.secondaryLine);
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize projectionAngle compoenent to its default when projectionAngle is true", () => {
    const configParams = new VectorPlotPlaneConfig({ projectionAngle: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toEqual(VectorPlotDefault.secondaryLine);
  });

  it("should initialize all properties to undefined when an empty object is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfig({});

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize all properties to undefined when an object with all components set to false is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfig({
      projection: false,
      component: false,
      projectionAngle: false,
    });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize integrate a partial configuration defining only the label with the line options", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfig({
      projection: partialConfig,
      component: partialConfig,
      projectionAngle: partialConfig,
    });

    expect(configParams.projection).toEqual({ ...VectorPlotDefault.secondaryLine, ...partialConfig });
    expect(configParams.component).toEqual({ ...VectorPlotDefault.secondaryLine, ...partialConfig });
    expect(configParams.projectionAngle).toEqual({ ...VectorPlotDefault.secondaryLine, ...partialConfig });
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfig({
      projection: partialConfig,
    });

    expect(configParams.projection?.line).toEqual(VectorPlotDefault.secondaryLine.line);
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfig({
      component: partialConfig,
    });

    expect(configParams.component?.line).toEqual(VectorPlotDefault.secondaryLine.line);
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfig({
      projectionAngle: partialConfig,
    });

    expect(configParams.projectionAngle?.line).toEqual(VectorPlotDefault.secondaryLine.line);
  });
});
