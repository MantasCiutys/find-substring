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

  getDefaultApproachTime(): number {
    return this.defaultSubstringFinderService.getSubstringFindTime();
  }

}
