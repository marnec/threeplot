import {
  VectorPlotConfigurationParams,
  VectorPlotPlaneConfigParams,
  defaultDashedLine,
} from "../../src/plots/vectorplot.config";

describe("VectorPlotConfigurationParams", () => {
  it("should set the color to the provided colorHex if it exists, otherwise set it to 0x000000", () => {
    const config = { color: 0xff0000 };
    const params = new VectorPlotConfigurationParams(config);
    expect(params.color).toBe(0xff0000);
  });

  it("should set the color to default it undefined passed", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.color).toBe(0x000000);
  });

  it("should create a new VectorPlotPlaneConfigParams object for xy, xz, yz when enabled", () => {
    const config = { xy: true, xz: true, yz: true };
    const params = new VectorPlotConfigurationParams(config);
    expect(params.xy).toBeInstanceOf(VectorPlotPlaneConfigParams);
    expect(params.xz).toBeInstanceOf(VectorPlotPlaneConfigParams);
    expect(params.yz).toBeInstanceOf(VectorPlotPlaneConfigParams);
  });

  it("should keep xy, xz, yz as undefined if passed as undefined", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.xy).toBeUndefined();
    expect(params.xz).toBeUndefined();
    expect(params.yz).toBeUndefined();
  });

  it("should set the color to 0x000000 if no colorHex is provided", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.color).toBe(0x000000);
  });

  it("should set xy, xz, and yz to undefined if they are not provided", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.xy).toBeUndefined();
    expect(params.xz).toBeUndefined();
    expect(params.yz).toBeUndefined();
  });

  it("should keep the angle undefined if no angle is provided", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.angle).toBeUndefined();
  });

  it("should set the angle to the provided angle object if it exists", () => {
    const config = { angle: { color: 0xff0000 } };
    const params = new VectorPlotConfigurationParams(config);
    expect(params.angle).toEqual({ color: 0xff0000 });
  });
});

describe("VectorPlotPlaneConfigParams", () => {
  it("should initialize all properties to defaultDashedLine when true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams(true);

    expect(configParams.projection).toEqual(defaultDashedLine);
    expect(configParams.component).toEqual(defaultDashedLine);
    expect(configParams.projectionAngle).toEqual(defaultDashedLine);
  });

  it("should initialize projection property to defaultDashedLine when projection is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projection: true });

    expect(configParams.projection).toEqual(defaultDashedLine);
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize component property to defaultDashedLine when component is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ component: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toEqual(defaultDashedLine);
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize projectionAngle property to defaultDashedLine when projectionAngle is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projectionAngle: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toEqual(defaultDashedLine);
  });

  it("should initialize all properties to undefined when an empty object is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({});

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize all properties to undefined when an object with all properties set to false is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({
      projection: false,
      component: false,
      projectionAngle: false,
    });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize all properties to defaultDashedLine when an object with all properties set to true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projection: true, component: true, projectionAngle: true });

    expect(configParams.projection).toEqual(defaultDashedLine);
    expect(configParams.component).toEqual(defaultDashedLine);
    expect(configParams.projectionAngle).toEqual(defaultDashedLine);
  });
});
