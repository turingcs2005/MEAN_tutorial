import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscExtensions } from './vsc-extensions';

describe('VscExtensions', () => {
  let component: VscExtensions;
  let fixture: ComponentFixture<VscExtensions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscExtensions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscExtensions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
