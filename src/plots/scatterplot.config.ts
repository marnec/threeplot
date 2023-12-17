import { BaseConfig } from "./base.config";
import { ScatterPlotParams, scatterplotParams } from "./scatterplot.params";

export class ScatterPlotConfig extends BaseConfig implements Required<ScatterPlotParams> {
  markerSize: number[];
  markerColor: number[];

  constructor(nPoints: number, params?: ScatterPlotParams) {
    super();

    const scatterplotParams = this.refineScatterPlotParams(nPoints);

    const result = scatterplotParams.parse(params || {});

    let { markerSize, markerColor } = result;

    this.markerSize = this.expandDefaultIfNotExpanded(markerSize, nPoints);
    this.markerColor = this.expandDefaultIfNotExpanded(markerColor, nPoints);
  }

  refineScatterPlotParams(nPoints: number) {
    return scatterplotParams.extend({
      markerSize: scatterplotParams.shape.markerSize.refine(
        (arg) => arg === undefined || typeof arg === "number" || arg.length === nPoints,
        {
          message: `markerSize[].length !== points.lengths (${nPoints})`,
        }
      ),
      markerColor: scatterplotParams.shape.markerColor.refine(
        (arg) => arg === undefined || typeof arg === "number" || arg.length === nPoints,
        {
          message: `markerColor[].length !== points.lengths (${nPoints})`,
        }
      ),
    });
  }
}
