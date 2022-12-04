import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoDetailComponent } from './ho-detail.component';

describe('HoDetailComponent', () => {
  let component: HoDetailComponent;
  let fixture: ComponentFixture<HoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
