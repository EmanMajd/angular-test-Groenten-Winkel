import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroentenFormulierComponent } from './groenten-formulier.component';

describe('GroentenFormulierComponent', () => {
  let component: GroentenFormulierComponent;
  let fixture: ComponentFixture<GroentenFormulierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroentenFormulierComponent]
    });
    fixture = TestBed.createComponent(GroentenFormulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
