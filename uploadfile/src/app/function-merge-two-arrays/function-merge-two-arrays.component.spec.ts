import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionMergeTwoArraysComponent } from './function-merge-two-arrays.component';

describe('FunctionMergeTwoArraysComponent', () => {
  let component: FunctionMergeTwoArraysComponent;
  let fixture: ComponentFixture<FunctionMergeTwoArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionMergeTwoArraysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionMergeTwoArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
