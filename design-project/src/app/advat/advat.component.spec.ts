import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvatComponent } from './advat.component';

describe('AdvatComponent', () => {
  let component: AdvatComponent;
  let fixture: ComponentFixture<AdvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
