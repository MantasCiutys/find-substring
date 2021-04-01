import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextsComponent } from './input-texts.component';

describe('InputTextsComponent', () => {
  let component: InputTextsComponent;
  let fixture: ComponentFixture<InputTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
