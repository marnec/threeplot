import { NamedAxis } from "./axes";
import { AxesParams, AxisParams } from "./axes.params";
import { LabelProperties } from "./label";
import { BaseConfig } from "./plots/base.config";

export class AxesConfig extends BaseConfig implements AxesParams {
  x: AxisConfig | false;
  y: AxisConfig | false;
  z: AxisConfig | false;

  constructor(params?: AxesParams) {
    super();

    const { x, y, z } = params || {};

    if (x !== false) this.x = new AxisConfig(this.defaultIfTrueOrUndefined(x, defaultAxisConfig.x), NamedAxis.x.name);
    if (y !== false) this.y = new AxisConfig(this.defaultIfTrueOrUndefined(y, defaultAxisConfig.y), NamedAxis.y.name);
    if (z !== false) this.z = new AxisConfig(this.defaultIfTrueOrUndefined(z, defaultAxisConfig.z), NamedAxis.z.name);
  }
}

export class AxisConfig extends BaseConfig implements Required<AxisParams> {
  label: LabelProperties;
  color: number;
  width: number;

  constructor(params: AxisParams, identifier: keyof typeof NamedAxis) {
    super();

    const { width, label, color } = params;

    if (label) this.label = this.defaultIfTrue(label, defaultAxisConfig[identifier].label);
    if (width) this.width = this.defaultIfTrue(width, defaultAxisConfig[identifier].width);
    if (color) this.color = this.defaultIfTrue(color, defaultAxisConfig[identifier].color);
  }
}

export const defaultAxisConfig = {
  x: {
    color: 0xff0000,
    width: 0.001,
    label: { text: "x" },
  },
  y: {
    color: 0x00ff00,
    width: 0.001,
    label: { text: "y" },
  },
  z: {
    color: 0x0000ff,
    width: 0.001,
    label: { text: "z" },
  },
} as const;
