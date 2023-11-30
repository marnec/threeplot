import { LineBasicMaterialParameters } from "three";
import { PlaneAxes } from "../axes";
import { ConfigParams } from "./base.config";
import { LineConfig, LineStyle } from "./line.config";
import { LabelProperties } from "../label";

export const defaultSecondaryLine = {
  line: {
    type: "dashed",
    style: {
      color: 0x000000,
      linewidth: 1,
      scale: 1,
      dashSize: 0.25,
      gapSize: 0.1,
    },
  },
} as const;

interface VectorPlotPlaneConfig {
  projection?: LineConfig | boolean;
  component?: LineConfig | boolean;
  projectionAngle?: LineConfig | boolean;
}

export interface VectorPlotConfiguration
  extends Partial<Record<keyof typeof PlaneAxes, VectorPlotPlaneConfig | boolean>> {
  color?: number;
  angle?: LineBasicMaterialParameters | boolean;
}

export class VectorPlotConfigurationParams extends ConfigParams implements VectorPlotConfiguration {
  color: number;
  angle?: LineBasicMaterialParameters;
  xy?: VectorPlotPlaneConfigParams;
  xz?: VectorPlotPlaneConfigParams;
  yz?: VectorPlotPlaneConfigParams;

  constructor(config: VectorPlotConfiguration | undefined) {
    super();
    const { angle, color, xy, xz, yz } = config || {};
    this.color = color || 0x000000;

    if (angle) this.angle = this.valueOrDefault(angle, { color: 0x000000 });
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
