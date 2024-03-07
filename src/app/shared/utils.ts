import { FormArray, FormGroup } from "@angular/forms";

export class Utils{
  static getRawValue(control: any): any {

    if (control instanceof FormGroup) {
      const rawValue: {[key: string]: any} = {}; // Add index signature
      Object.keys(control.controls).forEach((key: string) => {
        const subControl = control.controls[key];
        rawValue[key] = Utils.getRawValue(subControl);
      });
      return rawValue;
    }
    else {
      return control.value;
    }
  }
}

export default Utils;
