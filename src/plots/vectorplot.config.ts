import { LineBasicMaterialParameters, LineDashedMaterialParameters } from "three";
import { PlaneAxes } from "../axes";

export type LineStyle =
  | {
      linetype: "dashed";
      linestyle: LineDashedMaterialParameters;
    }
  | {
      linetype: "solid";
      linestyle: LineBasicMaterialParameters;
    };

type VectorPlotPlaneConfig = {
  projection?: LineStyle | boolean;
  component?: LineStyle | boolean;
  projectionAngle?: LineStyle | boolean;
};

export interface VectorPlotConfiguration
  extends Partial<Record<keyof typeof PlaneAxes, VectorPlotPlaneConfig | boolean>> {
  color?: number;
  angle?: LineBasicMaterialParameters | boolean;
}

export class VectorPlotConfigurationParams implements VectorPlotConfiguration {
  color: number;
  angle?: LineBasicMaterialParameters;
  xy?: VectorPlotPlaneConfigParams;
  xz?: VectorPlotPlaneConfigParams;
  yz?: VectorPlotPlaneConfigParams;

  constructor(config: VectorPlotConfiguration | undefined) {
    const { angle, color, xy, xz, yz } = config || {};

    this.setColorOrDefault(color);
    if (angle) this.setAngle(angle);
    if (xy) this.xy = new VectorPlotPlaneConfigParams(xy);
    if (xz) this.xz = new VectorPlotPlaneConfigParams(xz);
    if (yz) this.yz = new VectorPlotPlaneConfigParams(yz);
  }

  private setColorOrDefault(colorHex?: number) {
    colorHex = colorHex || 0x000000;

    this.color = colorHex;
  }

  private setAngle(angle: LineBasicMaterialParameters | true) {
    this.angle = angle === true ? { color: 0x000000 } : angle;
  }
}

export class VectorPlotPlaneConfigParams implements VectorPlotPlaneConfig {
  projection?: LineStyle;
  component?: LineStyle;
  projectionAngle?: LineStyle;

  constructor(plane: VectorPlotPlaneConfig | true) {
    plane = plane === true ? { projection: true, component: true, projectionAngle: true } : plane;

    const { component, projection, projectionAngle } = plane;

    if (projection) this.setProjection(projection);
    if (component) this.setComponent(component);
    if (projectionAngle) this.setProjectionAngle(projectionAngle);
  }

  private setProjection(projection: LineStyle | true) {
    this.projection = projection === true ? defaultDashedLine : projection;
  }

  private setComponent(component: LineStyle | true) {
    this.component = component === true ? defaultDashedLine : component;
  }

  private setProjectionAngle(projectionAngle: LineStyle | true) {
    this.projectionAngle = projectionAngle === true ? defaultDashedLine : projectionAngle;
  }
}

export const defaultDashedLine: LineStyle = {
  linetype: "dashed",
  linestyle: {
    color: 0x000000,
    linewidth: 1,
    scale: 1,
    dashSize: 0.25,
    gapSize: 0.1,
  },
};
