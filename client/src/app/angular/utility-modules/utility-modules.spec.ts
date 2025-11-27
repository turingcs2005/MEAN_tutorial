import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityModules } from './utility-modules';

describe('UtilityModules', () => {
  let component: UtilityModules;
  let fixture: ComponentFixture<UtilityModules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityModules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityModules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
