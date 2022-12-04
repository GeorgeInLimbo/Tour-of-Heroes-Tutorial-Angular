import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSearchComponent } from './ho-search.component';

describe('HoSearchComponent', () => {
  let component: HoSearchComponent;
  let fixture: ComponentFixture<HoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
