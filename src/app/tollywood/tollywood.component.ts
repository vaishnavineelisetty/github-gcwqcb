import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { SevicingService } from '../sevicing.service';

@Component({
  selector: 'app-tollywood',
  templateUrl: './tollywood.component.html',
  styleUrls: ['./tollywood.component.less']
})
export class TollywoodComponent implements OnInit {

  constructor(private ser: SevicingService) { }
  movie: Movies[] = this.ser.cinema;

  ngOnInit(): void {
  }
  Genres(s: string) {
    for (let i = 0; i < this.movie.length; i++) {
      this.movie[i].visible = false;
      if (this.movie[i].genre == s)
        this.movie[i].visible = true;
    }
  }
  Lan(s: string) {
    for (let i = 0; i < this.movie.length; i++) {
      this.movie[i].visible = false;
      if (this.movie[i].language == s)
        this.movie[i].visible = true;
    }
  }
}