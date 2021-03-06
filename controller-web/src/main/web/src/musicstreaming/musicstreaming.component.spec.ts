import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MusicstreamingComponent } from './musicstreaming.component';

describe('MusicstreamingComponent', () => {
  let component: MusicstreamingComponent;
  let fixture: ComponentFixture<MusicstreamingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicstreamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicstreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
