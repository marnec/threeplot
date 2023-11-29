import {
  VectorPlotConfigurationParams,
  VectorPlotPlaneConfigParams,
  defaultSecondaryLine,
} from "../../src/plots/vectorplot.config";

describe("VectorPlotConfigurationParams", () => {
  it("should set the color to the provided colorHex", () => {
    const config = { color: 0xff0000 };
    const params = new VectorPlotConfigurationParams(config);
    expect(params.color).toBe(0xff0000);
  });

  it("should set the color to default it undefined passed", () => {
    const config = {};
    const params = new VectorPlotConfigurationParams(config);
    expect(params.color).toBe(0x000000);
  });

  it("should create a new VectorPlotPlaneConfigParams object for xy, xz, yz when enabled singolarly", () => {
    const config = { xy: true, xz: true, yz: true };
    const params = new VectorPlotConfigurationParams(config);
    expect(params.xy).toBeInstanceOf(VectorPlotPlaneConfigParams);
    expect(params.xz).toBeInstanceOf(VectorPlotPlaneConfigParams);
    expect(params.yz).toBeInstanceOf(VectorPlotPlaneConfigParams);
  });

  it("should keep xy, xz, yz as undefined if passed as undefined", () => {
    const config = undefined;
    const params = new VectorPlotConfigurationParams(config);
    expect(params.xy).toBeUndefined();
    expect(params.xz).toBeUndefined();
    expect(params.yz).toBeUndefined();
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

  it("should keep the angle undefined if config undefined", () => {
    const config = undefined;
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
  it("should initialize all optional components to their default when true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams(true);

    expect(configParams.projection).toEqual(defaultSecondaryLine);
    expect(configParams.component).toEqual(defaultSecondaryLine);
    expect(configParams.projectionAngle).toEqual(defaultSecondaryLine);
  });

  it("should initialize all properties to their default when an object with all properties set to true is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projection: true, component: true, projectionAngle: true });

    expect(configParams.projection).toEqual(defaultSecondaryLine);
    expect(configParams.component).toEqual(defaultSecondaryLine);
    expect(configParams.projectionAngle).toEqual(defaultSecondaryLine);
  });

  it("should initialize projection component to its default when projection is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projection: true });

    expect(configParams.projection).toEqual(defaultSecondaryLine);
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize component component to its default when component is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ component: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toEqual(defaultSecondaryLine);
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize projectionAngle compoenent to its default when projectionAngle is true", () => {
    const configParams = new VectorPlotPlaneConfigParams({ projectionAngle: true });

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toEqual(defaultSecondaryLine);
  });

  it("should initialize all properties to undefined when an empty object is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({});

    expect(configParams.projection).toBeUndefined();
    expect(configParams.component).toBeUndefined();
    expect(configParams.projectionAngle).toBeUndefined();
  });

  it("should initialize all properties to undefined when an object with all components set to false is passed as argument", () => {
    const configParams = new VectorPlotPlaneConfigParams({
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

    const configParams = new VectorPlotPlaneConfigParams({
      projection: partialConfig,
      component: partialConfig,
      projectionAngle: partialConfig,
    });

    expect(configParams.projection).toEqual({ ...defaultSecondaryLine, ...partialConfig });
    expect(configParams.component).toEqual({ ...defaultSecondaryLine, ...partialConfig });
    expect(configParams.projectionAngle).toEqual({ ...defaultSecondaryLine, ...partialConfig });
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfigParams({
      projection: partialConfig,
    });

    expect(configParams.projection?.line).toEqual(defaultSecondaryLine.line);
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfigParams({
      component: partialConfig,
    });

    expect(configParams.component?.line).toEqual(defaultSecondaryLine.line);
  });

  it("for a single component, should initialize a default line if only the label is defined ", () => {
    const partialConfig = { label: { text: "s" } };

    const configParams = new VectorPlotPlaneConfigParams({
      projectionAngle: partialConfig,
    });

    expect(configParams.projectionAngle?.line).toEqual(defaultSecondaryLine.line);
  });
});
