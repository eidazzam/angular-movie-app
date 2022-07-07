import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {
  currentPage:number = 1;
  name?:string;
  term:any;
  pageNumbers:number[]=[];
  trendingAll:any=[];

  constructor(private _MoviesService:MoviesService) {
    for(let i=1;i<=10;i++)
    {
      this.pageNumbers.push(i);
    }

    _MoviesService.getTrendingAll(1).subscribe((data) => {
      this.trendingAll = data.results;
    });

   }

   prev()
   {
      if(this.currentPage>1)
      {
        this.currentPage--;
        this._MoviesService.getTrendingAll(this.currentPage).subscribe((data) => {
          this.trendingAll = data.results;
        });
      }
      else{
        this.currentPage=1;
      }
   }
   next()
   {
      if(this.currentPage<10)
      {
        this.currentPage++;
        this._MoviesService.getTrendingAll(this.currentPage).subscribe((data) => {
          this.trendingAll = data.results;
        });
      }
      else{
        this.currentPage=10;
      }
   }
   changeNumber(ind:any)
   {
      this.currentPage = ind;
    this._MoviesService.getTrendingAll(this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;
    });
   }
  ngOnInit(): void {
  }

}

let Observable =
{
  subscribe()
  {
    () => {}
  }
}
