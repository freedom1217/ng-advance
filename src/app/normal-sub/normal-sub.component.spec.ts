import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSubComponent } from './normal-sub.component';

describe('NormalSubComponent', () => {
  let component: NormalSubComponent;
  let fixture: ComponentFixture<NormalSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
