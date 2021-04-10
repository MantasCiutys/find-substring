import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';

@Injectable({
  providedIn: 'root'
})
export class DefaultSubstringFinderService implements IFindSubstring {

  private startProcessTime: number;
  private endProcessTime: number;
  isFound: boolean;

  constructor() { }

    // for default, no pre-processing needed
  preProcessInputs(inputString: string, inputSubstring: string): void {
  }

  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    this.startProcessTime = performance.now();

    this.isFound = inputString.includes(inputSubstring);

    this.endProcessTime = performance.now();

    return this.isFound;
  }

  getSubstringFindTime(): number {
      return this.endProcessTime - this.startProcessTime;
  }

  getPreProcessSubstringTime(): number {
    return 0;
  }

  getTotalTime(): number {
    return this.getPreProcessSubstringTime() + this.getSubstringFindTime();
  }

  getIsFound(): boolean {
    console.log('Default service ' + this.isFound);
    return this.isFound;
  }

}

