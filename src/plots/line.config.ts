import { LineBasicMaterialParameters, LineDashedMaterialParameters } from "three";
import { LabelParameters } from "../label";

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
  label?: LabelParameters;
}
