import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  endpoint = 'https://api.themoviedb.org/3/movie/'
  key = "api_key=68e82445c8842ba8616d0f6bf0e97a41"
  constructor(private http: HttpClient) { }
  
  getMovieDetails(movie_id){
    return this.http.get(this.endpoint+movie_id+'?'+this.key)
  }
}
