import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractSubstring {
  startProcessingTime = 0;
  endProcessingTime = 0;
  startPreProcessingTime = 0;
  endPreProcessingTime = 0;
  isFound = false;

  getSubstringFindTime(): number {
    return this.endProcessingTime - this.startProcessingTime;
  }
  getPreProcessSubstringTime(): number {
    return this.endPreProcessingTime - this.startPreProcessingTime;
  }

  getTotalTime(): number {
    return this.getPreProcessSubstringTime() + this.getSubstringFindTime();
  }

  getIsFound(): boolean {
    return this.isFound;
  }
}
