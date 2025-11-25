import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvm } from './nvm';

describe('Nvm', () => {
  let component: Nvm;
  let fixture: ComponentFixture<Nvm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nvm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nvm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
