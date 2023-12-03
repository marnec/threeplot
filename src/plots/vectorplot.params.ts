import { PlaneAxes } from "../axes";
import { LabelProperties } from "../label";
import { LineParams } from "./line.params";

export interface VectorPlotPlaneParams {
  projection?: LineParams | boolean;
  component?: LineParams | boolean;
  projectionAngle?: LineParams | boolean;
}

export interface VectorPlotParams extends Partial<Record<keyof typeof PlaneAxes, VectorPlotPlaneParams | boolean>> {
  label?: LabelProperties;
  color?: number;
  angle?: LineParams | boolean;
}
