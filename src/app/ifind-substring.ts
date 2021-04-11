import { NumberValueAccessor } from '@angular/forms';

export interface IFindSubstring {
  // pre-process inputs
  preProcessInputs(inputString: string, inputSubstring: string): void;

  // returns if substring is available
  isSubstringFound(inputString: string, inputSubstring: string): boolean;
}
