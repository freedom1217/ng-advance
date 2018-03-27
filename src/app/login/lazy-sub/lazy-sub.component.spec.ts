import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubComponent } from './lazy-sub.component';

describe('LazySubComponent', () => {
  let component: LazySubComponent;
  let fixture: ComponentFixture<LazySubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
