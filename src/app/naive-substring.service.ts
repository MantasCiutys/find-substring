import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';
import { AbstractSubstring } from './abstractsubstring';

@Injectable({
  providedIn: 'root'
})
export class NaiveSubstringService extends AbstractSubstring implements IFindSubstring {

  constructor() {
    super();
  }

  preProcessInputs(inputString: string, inputSubstring: string): void {
    return;
  }

  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    this.startProcessingTime = performance.now();

    const stringLength = inputString.length;
    const subLength = inputSubstring.length;

    for (let i = 0; i <= stringLength - subLength; i++) {
      let isSubstringMatching = true;
      innerLoop:
      for (let j = i, k = 0; j < i + subLength; j++, k++) {
        if (inputString[j] !== inputSubstring[k]) {
          isSubstringMatching = false;
          break innerLoop;
        }
      }
      // substring has been found, so return immediatelly
      if (isSubstringMatching) {
        this.isFound = true;
        this.endProcessingTime = performance.now();
        return this.isFound;
      }
    }
    this.isFound = false;

    this.endProcessingTime = performance.now();

    return this.isFound;
  }
}
