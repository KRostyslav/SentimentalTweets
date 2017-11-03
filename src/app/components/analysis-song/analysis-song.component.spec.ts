import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSongComponent } from './analysis-song.component';

describe('AnalysisSongComponent', () => {
  let component: AnalysisSongComponent;
  let fixture: ComponentFixture<AnalysisSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
