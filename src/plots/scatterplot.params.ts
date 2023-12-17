import { z } from "zod";

const markersizeTypeZod = z.number().lte(10).gte(0.01);

export const scatterplotParams = z.object({
  markerSize: z
    .union([markersizeTypeZod, z.array(markersizeTypeZod)])
    .default(0.25),

  markerColor: z
    .union([z.number(), z.array(z.number())])
    .default(0x00ff00)
});

export type ScatterPlotParams = z.input<typeof scatterplotParams>;
