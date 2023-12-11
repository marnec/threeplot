import { NamedAxis, PlaneAxes } from "./axes";
import { LabelProperties } from "./label";

export type AxesParams = Partial<Record<keyof typeof NamedAxis, AxisParams | boolean>>;

export type AxisParams = {
  label?: LabelProperties | boolean;
  color?: number;
  width?: number;
};

export type GridParams = Partial<Record<keyof typeof PlaneAxes, boolean>>;
