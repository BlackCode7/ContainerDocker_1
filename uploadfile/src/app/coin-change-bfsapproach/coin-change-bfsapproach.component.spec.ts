import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinChangeBFSapproachComponent } from './coin-change-bfsapproach.component';

describe('CoinChangeBFSapproachComponent', () => {
  let component: CoinChangeBFSapproachComponent;
  let fixture: ComponentFixture<CoinChangeBFSapproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinChangeBFSapproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinChangeBFSapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
