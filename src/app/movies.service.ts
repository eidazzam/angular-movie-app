import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {
   }
   getTrendingAll(pageNumber:any):Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=ea3a1fce6409d9a1d16b3801182db0a4&page="+pageNumber);
   }
   getTrendingMovie():Observable<any>
    {
      return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=ea3a1fce6409d9a1d16b3801182db0a4");
    }
    getTrendingTv():Observable<any>
    {
      return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=ea3a1fce6409d9a1d16b3801182db0a4");
    }
    getTrendingPeople():Observable<any>
    {
      return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=ea3a1fce6409d9a1d16b3801182db0a4");
    }
    getMovies(pageNumber:any):Observable<any>
    {
      return this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=ea3a1fce6409d9a1d16b3801182db0a4&page="+pageNumber);
    }

   getTest():string
  {
    return "hlbessa";
  }
}
