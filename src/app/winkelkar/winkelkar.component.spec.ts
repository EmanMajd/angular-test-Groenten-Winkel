import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkelkarComponent } from './winkelkar.component';

describe('WinkelkarComponent', () => {
  let component: WinkelkarComponent;
  let fixture: ComponentFixture<WinkelkarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinkelkarComponent]
    });
    fixture = TestBed.createComponent(WinkelkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
