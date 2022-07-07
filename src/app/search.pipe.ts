import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[], term:string):any{
    if(!term) return movies;
  return movies.filter(function(movies){
    return movies.title?.toLowerCase().includes(term.toLowerCase());
  });
  }

}
