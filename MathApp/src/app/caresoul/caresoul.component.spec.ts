import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaresoulComponent } from './caresoul.component';

describe('CaresoulComponent', () => {
  let component: CaresoulComponent;
  let fixture: ComponentFixture<CaresoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaresoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaresoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
