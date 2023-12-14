import { getDefaults } from "../type-magic";
import { BaseConfig } from "./base.config";
import { ScatterPlotParams, scatterplotParams } from "./scatterplot.params";

export class ScatterPlotConfig extends BaseConfig implements Required<ScatterPlotParams> {
  markerSize: number[];

  constructor(nPoints: number, params?: ScatterPlotParams) {
    super();

    if (!params) {
      params = getDefaults(scatterplotParams);
    }

    const result = scatterplotParams.safeParse(params);

    if (!result.success) {
      throw new Error(result.error.message);
    }

    const { markerSize } = result.data;

    this.markerSize = typeof markerSize === "number" ? Array.from({ length: nPoints }, () => markerSize) : markerSize;
  }
}
