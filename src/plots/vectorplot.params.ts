import { LabelProperties } from "../label";
import { ConfigParams } from "./base.config";
import { LineConfig, LineStyle } from "./line.config";
import {
  VectorPlotConfiguration,
  VectorPlotPlaneConfig,
  defaultPrimaryLine,
  defaultSecondaryLine,
} from "./vectorplot.config";

export class VectorPlotConfigurationParams extends ConfigParams implements VectorPlotConfiguration {
  color: number;
  label?: LabelProperties;
  angle?: LineConfigParams;
  xy?: VectorPlotPlaneConfigParams;
  xz?: VectorPlotPlaneConfigParams;
  yz?: VectorPlotPlaneConfigParams;

  constructor(config: VectorPlotConfiguration | undefined) {
    super();
    const { angle, color, label, xy, xz, yz } = config || {};
    this.color = color || 0x000000;
    this.label = label;

    if (angle) this.angle = new LineConfigParams(this.valueOrDefault(angle, defaultPrimaryLine));
    if (xy) this.xy = new VectorPlotPlaneConfigParams(xy);
    if (xz) this.xz = new VectorPlotPlaneConfigParams(xz);
    if (yz) this.yz = new VectorPlotPlaneConfigParams(yz);
  }
}

export class VectorPlotPlaneConfigParams extends ConfigParams implements VectorPlotPlaneConfig {
  projection?: LineConfigParams;
  component?: LineConfigParams;
  projectionAngle?: LineConfigParams;

  constructor(plane: VectorPlotPlaneConfig | true) {
    super();

    plane = this.valueOrDefault(plane, { projection: true, component: true, projectionAngle: true });
    const { component, projection, projectionAngle } = plane;

    if (projection) this.projection = new LineConfigParams(this.valueOrDefault(projection, defaultSecondaryLine));
    if (component) this.component = new LineConfigParams(this.valueOrDefault(component, defaultSecondaryLine));
    if (projectionAngle)
      this.projectionAngle = new LineConfigParams(this.valueOrDefault(projectionAngle, defaultSecondaryLine));
  }
}

type VectorPlotLineConfig = LineConfig & Required<Pick<LineConfig, "line">>;

export class LineConfigParams extends ConfigParams implements VectorPlotLineConfig {
  line: LineStyle;
  label?: LabelProperties;

  constructor({ line, label }: LineConfig) {
    super();

    this.line = line || defaultSecondaryLine.line;
    this.label = label;
  }
}
