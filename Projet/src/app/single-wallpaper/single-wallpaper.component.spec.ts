import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWallpaperComponent } from './single-wallpaper.component';

describe('SingleWallpaperComponent', () => {
  let component: SingleWallpaperComponent;
  let fixture: ComponentFixture<SingleWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWallpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
