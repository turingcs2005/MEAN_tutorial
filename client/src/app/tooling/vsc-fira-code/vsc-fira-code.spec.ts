import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscFiraCode } from './vsc-fira-code';

describe('VscFiraCode', () => {
  let component: VscFiraCode;
  let fixture: ComponentFixture<VscFiraCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscFiraCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscFiraCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
