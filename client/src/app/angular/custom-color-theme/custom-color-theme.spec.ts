import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorTheme } from './custom-color-theme';

describe('CustomColorTheme', () => {
  let component: CustomColorTheme;
  let fixture: ComponentFixture<CustomColorTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomColorTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomColorTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
