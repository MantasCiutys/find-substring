import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';
import { AbstractSubstring } from './abstractsubstring';

@Injectable({
  providedIn: 'root'
})
export class DefaultSubstringFinderService extends AbstractSubstring implements IFindSubstring {

  constructor() {
    super();
  }

    // for default, no pre-processing needed
  preProcessInputs(inputString: string, inputSubstring: string): void {
    return;
  }

  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    this.startProcessingTime = performance.now();

    this.isFound = inputString.includes(inputSubstring);

    this.endProcessingTime = performance.now();

    return this.isFound;
  }
}

