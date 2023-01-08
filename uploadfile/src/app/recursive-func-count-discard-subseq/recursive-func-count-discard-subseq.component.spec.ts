import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveFuncCountDiscardSubseqComponent } from './recursive-func-count-discard-subseq.component';

describe('RecursiveFuncCountDiscardSubseqComponent', () => {
  let component: RecursiveFuncCountDiscardSubseqComponent;
  let fixture: ComponentFixture<RecursiveFuncCountDiscardSubseqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveFuncCountDiscardSubseqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveFuncCountDiscardSubseqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
