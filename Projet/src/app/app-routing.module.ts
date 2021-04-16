import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllWallpapersComponent } from './all-wallpapers/all-wallpapers.component';
import { SingleWallpaperComponent } from './single-wallpaper/single-wallpaper.component';

const routes: Routes = [
  {
    path: 'wallpapers',
    component: AllWallpapersComponent,
  },
  {
    path: 'wallpaper/:id',
    component: SingleWallpaperComponent,
  },
  {
    path: '',
    component: AllWallpapersComponent,
  },
  {
    path: 'wallpapers-search/:text',
    component: AllWallpapersComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
