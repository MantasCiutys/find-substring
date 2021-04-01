import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubstringFinderService {

  private fullInputString: string;
  private substringString: string;

  constructor(fullString: string, substring: string) {
    this.fullInputString = fullString;
    this.substringString = substring;
  }
/*
  public function findSubstring() {
    return this.fullInputString.indexOf(this.substringString);
  }
  */
}
