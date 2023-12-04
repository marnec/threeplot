import { NamedAxis } from "./axes";
import { LabelProperties } from "./label";

export type AxesParams = Record<Partial<keyof typeof NamedAxis>, AxisParams | boolean>;

export type AxisParams = {
  label?: LabelProperties | boolean;
  color?: number;
  width?: number;
};

export type GridParams = {};
