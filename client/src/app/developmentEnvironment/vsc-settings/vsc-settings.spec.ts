import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscSettings } from './vsc-settings';

describe('VscSettings', () => {
  let component: VscSettings;
  let fixture: ComponentFixture<VscSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
