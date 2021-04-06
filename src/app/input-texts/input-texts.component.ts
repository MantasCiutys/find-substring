import { Component, OnInit, Input } from '@angular/core';
import { DefaultSubstringFinderService } from '../default-substring-finder.service';

@Component({
  selector: 'app-input-texts',
  templateUrl: './input-texts.component.html',
  styleUrls: ['./input-texts.component.css']
})
export class InputTextsComponent implements OnInit {

  inputString: string;
  inputSubstring: string;

  private isDefaultFound: boolean;

  constructor(private defaultSubstringFinderService: DefaultSubstringFinderService) { }

  ngOnInit() {
  }

  isDefaultSubstringFound(): boolean {
    this.isDefaultFound = this.defaultSubstringFinderService.isSubstringFound(this.inputString, this.inputSubstring);
    return this.isDefaultFound;
  }
}
