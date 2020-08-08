import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonderationsComponent } from './ponderations.component';

describe('PonderationsComponent', () => {
  let component: PonderationsComponent;
  let fixture: ComponentFixture<PonderationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonderationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
