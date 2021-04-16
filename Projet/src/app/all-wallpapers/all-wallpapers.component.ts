import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallpaper } from '../models/Wallpaper';
import { WallpaperRepository } from '../services/wallpaper-repository.service';

@Component({
  selector: 'app-all-wallpapers',
  templateUrl: './all-wallpapers.component.html',
  styleUrls: ['./all-wallpapers.component.scss'],
})
export class AllWallpapersComponent implements OnInit {
  allWallpapers: Wallpaper[] = [];
  pagesArray:  any[] = [];

  constructor(
    private wallpapersRepository: WallpaperRepository,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.text) {
        this.wallpapersRepository
          .getWallpapersBySearch(String(params.text))
          .subscribe((reponse) => {
            this.allWallpapers = reponse.data;
            const total = Math.round(reponse.meta.total / reponse.meta.per_page);
            this.pagesArray = new Array(total).map((value,index) => {return index + 1});
          });
      } else {
        this.wallpapersRepository.getAllWallpapers().subscribe((reponse) => {
          this.allWallpapers = reponse.data;
          const total = Math.round(reponse.meta.total / reponse.meta.per_page);
          this.pagesArray = new Array(10).fill(1).map((value,index) => {return `${index + 1}`});
        });
      }
    });
  }
}
