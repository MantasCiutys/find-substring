import { Component, OnInit } from '@angular/core';
import { DefaultSubstringFinderService } from '../default-substring-finder.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private defaultSubstringFinderService: DefaultSubstringFinderService) { }

  ngOnInit() {
  }

  getDefaultProcessingTime(): number {
    return this.defaultSubstringFinderService.getSubstringFindTime();
  }

  getDefaultPreProcessingTime(): number {
    return this.defaultSubstringFinderService.getPreProcessSubstringTime();
  }

  getDefaultTotalTime(): number {
    return this.defaultSubstringFinderService.getTotalTime();
  }

  getDefaultIsFound(): string {
    return this.defaultSubstringFinderService.getIsFound() ? 'YES' : 'NO';
  }

}
