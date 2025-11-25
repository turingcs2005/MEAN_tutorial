import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vim } from './vim';

describe('Vim', () => {
  let component: Vim;
  let fixture: ComponentFixture<Vim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
