import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  endpoint = 'https://api.themoviedb.org/3/genre/';
  key= 'api_key=68e82445c8842ba8616d0f6bf0e97a41';

  constructor(private http: HttpClient) { }
   getList(){
    return this.http.get(this.endpoint+'movie/list?'+this.key);
  }

  getMoviesList(genre_id){
    return this.http.get(this.endpoint+genre_id+'/movies?'+this.key)
  }
}
