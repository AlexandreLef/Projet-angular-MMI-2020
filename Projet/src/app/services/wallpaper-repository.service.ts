import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Wallpaper } from '../models/Wallpaper';
import { Meta } from '../models/Meta';

@Injectable({
  providedIn: 'root',
})
export class WallpaperRepository {
  constructor(private httpClient: HttpClient) {}

  getAllWallpapers() {
    return this.httpClient.get<{data: Wallpaper[]; meta: Meta}>(`/api/v1/search`);
  }

  getWallpaperById(id: string) {
    return this.httpClient.get<{data: Wallpaper}>(`/api/v1/w/${id}?apikey=gC0X9sAYo1rzgd87GJJXkvHa9GyU70Qi`);
  }

  getWallpapersBySearch(text: string){
    return this.httpClient.get<{data: Wallpaper[]; meta: Meta}>(`/api/v1/search?q=${text}`);
  }

}