import { LabelProperties } from "../label";
import { BaseConfig } from "./base.config";
import { LineParams, LineStyle } from "./line.params";
import { VectorPlotDefault } from "./vectorplot.defaults";
import { VectorPlotParams, VectorPlotPlaneParams } from "./vectorplot.params";

export class VectorPlotConfig extends BaseConfig implements VectorPlotParams {
  color: number;
  label?: LabelProperties;
  angle?: LineConfig;
  xy?: VectorPlotPlaneConfig;
  xz?: VectorPlotPlaneConfig;
  yz?: VectorPlotPlaneConfig;

  constructor(config: VectorPlotParams | undefined) {
    super();
    const { angle, color, label, xy, xz, yz } = config || {};
    this.color = color || 0x000000;
    this.label = label;

    if (angle) this.angle = new LineConfig(this.defaultIfTrue(angle, VectorPlotDefault.primaryLine));
    if (xy) this.xy = new VectorPlotPlaneConfig(xy);
    if (xz) this.xz = new VectorPlotPlaneConfig(xz);
    if (yz) this.yz = new VectorPlotPlaneConfig(yz);
  }
}

export class VectorPlotPlaneConfig extends BaseConfig implements VectorPlotPlaneParams {
  projection?: LineConfig;
  component?: LineConfig;
  projectionAngle?: LineConfig;

  constructor(plane: VectorPlotPlaneParams | true) {
    super();

    plane = this.defaultIfTrue(plane, { projection: true, component: true, projectionAngle: true });
    const { component, projection, projectionAngle } = plane;

    if (projection) this.projection = new LineConfig(this.defaultIfTrue(projection, VectorPlotDefault.secondaryLine));
    if (component) this.component = new LineConfig(this.defaultIfTrue(component, VectorPlotDefault.secondaryLine));
    if (projectionAngle)
      this.projectionAngle = new LineConfig(this.defaultIfTrue(projectionAngle, VectorPlotDefault.secondaryLine));
  }
}

type VectorPlotLineConfig = LineParams & Required<Pick<LineParams, "line">>;

export class LineConfig extends BaseConfig implements VectorPlotLineConfig {
  line: LineStyle;
  label?: LabelProperties;

  constructor({ line, label }: LineParams) {
    super();

    this.line = line || VectorPlotDefault.secondaryLine.line;
    this.label = label;
  }
}
