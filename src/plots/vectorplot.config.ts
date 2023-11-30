import { PlaneAxes } from "../axes";
import { LineConfig } from "./line.config";

export const defaultPrimaryLine = {
  line: {
    type: "solid",
    style: {
      color: 0x000000,
      linewidth: 2,
    },
  },
} as const;

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

export interface VectorPlotPlaneConfig {
  projection?: LineConfig | boolean;
  component?: LineConfig | boolean;
  projectionAngle?: LineConfig | boolean;
}

export interface VectorPlotConfiguration
  extends Partial<Record<keyof typeof PlaneAxes, VectorPlotPlaneConfig | boolean>> {
  color?: number;
  angle?: LineConfig | boolean;
}

