import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projet';
  search = new FormControl('');
  
constructor(
  private router: Router,
){}

  onEnter(){
    this.router.navigate(["wallpapers-search/" + this.search.value ]);
  }
}

