import { NamedAxis } from "./axes";
import { AxesParams, AxisParams } from "./axes.params";
import { LabelProperties } from "./label";
import { BaseConfig } from "./plots/base.config";

export class AxesConfig extends BaseConfig implements Required<AxesParams> {
  x: boolean | AxisConfig;
  y: boolean | AxisConfig;
  z: boolean | AxisConfig;

  constructor(params?: AxesParams) {
    super();

    const { x, y, z } = params || {};

    if (x) this.x = new AxisConfig(this.valueOrDefault(x, defaultAxisConfig), NamedAxis.x.name);
    if (y) this.y = new AxisConfig(this.valueOrDefault(y, defaultAxisConfig), NamedAxis.y.name);
    if (z) this.z = new AxisConfig(this.valueOrDefault(z, defaultAxisConfig), NamedAxis.z.name);
  }
}

export class AxisConfig extends BaseConfig implements Required<AxisParams> {
  label: boolean | LabelProperties;
  color: number;
  width: number;

  constructor(params: AxisParams, defaultLabel: string) {
    super();

    const { width, label, color } = params || {};

    const defaultLabelConfig: LabelProperties = { text: defaultLabel };

    if (label) this.label = this.valueOrDefault(label, defaultLabelConfig);
    if (width) this.width = this.valueOrDefault(width, defaultAxisConfig.width);
    if (color) this.color = this.valueOrDefault(color, defaultAxisConfig.color);
  }
}

export const defaultAxisConfig = {
  color: 0x000000,
  width: 0.001,
} as const;
