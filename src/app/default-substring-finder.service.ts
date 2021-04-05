import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';

@Injectable({
  providedIn: 'root'
})
export class DefaultSubstringFinderService implements IFindSubstring {

  private startTime: number;
  private endTime: number;

  constructor() { }

  preProcessInputs(inputString: string, inputSubstring: string): number {
    // for default, no pre-processing needed
    return 0;
  }

  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    let isFound: boolean;
    this.startTime = performance.now();

    isFound = inputString.includes(inputSubstring);

    this.endTime = performance.now();

    return isFound;
  }

    getSubstringFindTime(): number {
      return this.endTime = this.startTime;
  }

}

