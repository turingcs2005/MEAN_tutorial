import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscKeyboardShortcuts } from './vsc-keyboard-shortcuts';

describe('VscKeyboardShortcuts', () => {
  let component: VscKeyboardShortcuts;
  let fixture: ComponentFixture<VscKeyboardShortcuts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscKeyboardShortcuts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscKeyboardShortcuts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
