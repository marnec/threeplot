import { z } from "zod";

const markersizeTypeZod = z.number().lte(10).gte(0.01);

export const scatterplotParams = z.object({
  markerSize: z.optional(z.union([markersizeTypeZod, z.array(markersizeTypeZod)])).default(0.1),
});

export type ScatterPlotParams = z.infer<typeof scatterplotParams>;
