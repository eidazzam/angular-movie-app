import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  ind;
  movieDetails:any={};
  constructor(_ActivatedRoute:ActivatedRoute, _MoviesService:MoviesService) {
    this.ind =_ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getTrendingAll(1).subscribe((data) => {this.movieDetails = data.results[this.ind?this.ind:0];
    console.log(data.results[this.ind?this.ind:0]);
    });
  }
    // window.alert(this.ind);

  ngOnInit(): void {
  }

}
