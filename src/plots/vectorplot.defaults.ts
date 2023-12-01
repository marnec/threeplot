export namespace VectorPlotDefault {
  const lineColor = 0x000000;

  export const primaryLine = {
    line: {
      type: "solid",
      style: {
        color: lineColor,
      },
    },
  } as const;

  export const secondaryLine = {
    line: {
      type: "dashed",
      style: {
        color: lineColor,
        scale: 1,
        dashSize: 0.25,
        gapSize: 0.1,
      },
    },
  } as const;
}
