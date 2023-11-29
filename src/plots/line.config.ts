import { LineBasicMaterialParameters, LineDashedMaterialParameters } from "three";
import { LabelProperties } from "../label";


export type LineStyle =
  | {
      type: "dashed";
      style: LineDashedMaterialParameters;
    }
  | {
      type: "solid";
      style: LineBasicMaterialParameters;
    };

export interface LineConfig {
  line?: LineStyle;
  label?: LabelProperties;
}
