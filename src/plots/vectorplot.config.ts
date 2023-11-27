import { LineBasicMaterialParameters, LineDashedMaterialParameters } from "three";
import { AxesPlane } from "../axes";

type LineStyle =
  | {
      linetype: "dashed";
      linestyle: LineDashedMaterialParameters;
    }
  | {
      linetype: "solid";
      linestyle: LineBasicMaterialParameters;
    };

type VectorPlotPlaneConfig = {
  projection: LineStyle | false;
  projectionComponents: LineStyle | false;
  projectionAngle: LineStyle | false;
};

export interface VectorPlotConfiguration extends Record<keyof typeof AxesPlane, VectorPlotPlaneConfig> {
  linestyle: LineBasicMaterialParameters;
}

export const vectorplotDefaultConfig: VectorPlotConfiguration = {
  linestyle: { color: 0x000000 },
  xy: {
    projection: false,
    projectionComponents: false,
    projectionAngle: false,
  },
  xz: {
    projection: false,
    projectionComponents: false,
    projectionAngle: false,
  },
  yz: {
    projection: false,
    projectionComponents: false,
    projectionAngle: false,
  },
};
