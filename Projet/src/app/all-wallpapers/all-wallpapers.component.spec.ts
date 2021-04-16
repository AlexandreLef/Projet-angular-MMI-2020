import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWallpapersComponent } from './all-wallpapers.component';

describe('AllWallpapersComponent', () => {
  let component: AllWallpapersComponent;
  let fixture: ComponentFixture<AllWallpapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWallpapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWallpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
