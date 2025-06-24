import { ColorPalettes } from "functionalui/types";

export enum ToastTypes {
  Success = 1,
  Alert,
  Error,
  Info,
  Static,
  Loading,
  SuccessStatic,
  ErrorStatic,
  LoadingStatic,
}
export type ToastNotification = {
  icon: string;
  color: ColorPalettes;
  default: string;
  isTimeout?: boolean;
  classname?: string;
}
export const TOAST_TYPE: { [key: number]: ToastNotification } = {
  [ToastTypes.Success]: { icon: 'check-circle', color: ColorPalettes.Green5, isTimeout: true, default: 'Success', classname: 'green', },
  [ToastTypes.Alert]: { icon: 'alert-circle', color: ColorPalettes.Yellow5, isTimeout: true, default: 'Alert', classname: 'orange', },
  [ToastTypes.Error]: { icon: 'x-octagon', color: ColorPalettes.Red5, isTimeout: true, default: 'Error', classname: 'red', },
  [ToastTypes.Info]: { icon: 'info', color: ColorPalettes.Grey7, isTimeout: true, default: 'Loading', classname: 'blue', },
  [ToastTypes.Loading]: { icon: 'spinner', color: ColorPalettes.Blue5, isTimeout: true, default: 'Info', classname: 'blue', },
  [ToastTypes.Static]: { icon: 'info', color: ColorPalettes.Blue5, isTimeout: false, default: 'Info', classname: 'blue', },
  [ToastTypes.SuccessStatic]: { icon: 'check-circle', color: ColorPalettes.Green5, isTimeout: false, default: 'Success', classname: 'green', },
  [ToastTypes.ErrorStatic]: { icon: 'x-octagon', color: ColorPalettes.Red5, isTimeout: false, default: 'Error', classname: 'red', },
  [ToastTypes.LoadingStatic]: { icon: 'spinner', color: ColorPalettes.Grey7, isTimeout: false, default: 'Loading', classname: '', },
}
