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
  label: LabelProperties | false;
  color: number;
  width: number;

  constructor(params: AxisParams, identifier: keyof typeof NamedAxis) {
    super();

    const { width, label, color } = params || {};

    if (label !== false) this.label = this.defaultIfTrueOrUndefined(label, defaultAxisConfig[identifier].label);
    this.width = this.defaultIfNullish(width, defaultAxisConfig[identifier].width);
    this.color = this.defaultIfNullish(color, defaultAxisConfig[identifier].color);
  }
}

export const defaultAxisConfig = {
  x: {
    color: 0xff0000,
    width: 0.01,
    label: { text: "x" },
  },
  y: {
    color: 0x00ff00,
    width: 0.01,
    label: { text: "y" },
  },
  z: {
    color: 0x0000ff,
    width: 0.01,
    label: { text: "z" },
  },
} as const;
