import { z } from "zod";

const markersizeType = z.number().lte(10).gte(0.01);

const scatterplotParams = z.object({
  markerSize: z.union([markersizeType, z.array(markersizeType)]),
});

export type ScatterplotParams = {
  markerSize: number | number[];
  markerColor: number | number[];
};
