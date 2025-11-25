import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssistance } from './ai-assistance';

describe('AiAssistance', () => {
  let component: AiAssistance;
  let fixture: ComponentFixture<AiAssistance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAssistance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAssistance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
