import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTweetsComponent } from './analysis-tweet.component';

describe('SearchComponent', () => {
  let component: AnalysisTweetsComponent;
  let fixture: ComponentFixture<AnalysisTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
