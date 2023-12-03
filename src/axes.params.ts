import { NamedAxis } from "./axes";

export interface AxesParams extends Record<keyof typeof NamedAxis, AxisParams | boolean> {}

export interface AxisParams {
  length: number;
  label?: "string" | boolean;
  color?: number;
  width?: number;
}
