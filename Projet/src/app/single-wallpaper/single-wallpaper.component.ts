import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallpaper } from '../models/Wallpaper';
import { WallpaperRepository } from '../services/wallpaper-repository.service';

@Component({
  selector: 'app-single-wallpaper',
  templateUrl: './single-wallpaper.component.html',
  styleUrls: ['./single-wallpaper.component.scss']
})
export class SingleWallpaperComponent implements OnInit {

  constructor(
    private wallpapersRepository: WallpaperRepository,
    private activatedRoute: ActivatedRoute
    ) { }

  wallpaper?: Wallpaper = undefined;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.wallpapersRepository.getWallpaperById(String(this.activatedRoute.snapshot.params.id)).subscribe((reponse)=>{this.wallpaper=reponse.data});
    }
  }

  purityToClass(purity: string): string{
    switch (purity) {
      case "sfw":
        return "dove";
      case "sketchy":
        return "exclamation-circle";
      case "nsfw":
        return "exclamation-triangle";
      default:
        return "dove";
    }
  }

}
