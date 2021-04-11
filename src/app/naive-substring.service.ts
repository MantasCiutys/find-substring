import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';

@Injectable({
  providedIn: 'root'
})
export class NaiveSubstringService implements IFindSubstring {

  private startProcessingTime: number;
  private endProcessingTime: number;
  private isFound = false;

  constructor() { }

  preProcessInputs(inputString: string, inputSubstring: string): void {
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
  getSubstringFindTime(): number {
    return this.endProcessingTime - this.startProcessingTime;
  }
  getPreProcessSubstringTime(): number {
    return 0;
  }

  getTotalTime(): number {
    return this.getPreProcessSubstringTime() + this.getSubstringFindTime();
  }

  getIsFound(): boolean {
    return this.isFound;
  }
}
