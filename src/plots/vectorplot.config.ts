import { PlaneAxes } from "../axes";
import { LabelProperties } from "../label";
import { LineConfig } from "./line.config";

export const defaultPrimaryLine = {
  line: {
    type: "solid",
    style: {
      color: 0x000000,
    },
  },
} as const;

export const defaultSecondaryLine = {
  line: {
    type: "dashed",
    style: {
      color: 0x000000,
      scale: 1,
      dashSize: 0.25,
      gapSize: 0.1,
    },
  },
} as const;

export interface VectorPlotPlaneConfig {
  projection?: LineConfig | boolean;
  component?: LineConfig | boolean;
  projectionAngle?: LineConfig | boolean;
}

export interface VectorPlotConfiguration
  extends Partial<Record<keyof typeof PlaneAxes, VectorPlotPlaneConfig | boolean>> {
  label?: LabelProperties;
  color?: number;
  angle?: LineConfig | boolean;
}
