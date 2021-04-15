import { Component, OnInit } from '@angular/core';
import { RestAPIService } from './../restAPI.service';
import { MovieDetailsService } from './../movie-details.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesList = <any>[];
genresList = <any>[];
isShown: boolean = false 
  
  constructor(private rest:RestAPIService,
    private moviedetailsservice : MovieDetailsService) { }

  ngOnInit() {
    this.getGenres()
    // this.getMoviesList(id)
  }
  
getGenres(){
  
  this.rest.getList().subscribe(resp =>{
    this.genresList = resp;
    // console.log(this.genresList.genres)
  });
}
getMovies(id){
  this.isShown = ! this.isShown;
   this.rest.getMoviesList(id).subscribe(resp=>{
     this.moviesList = resp
    //  console.log(this.moviesList.results)
     
   })
 }

 getMovieDetails(movie_id){
  this.moviedetailsservice.getMovieDetails(movie_id).subscribe(resp=>{
    this.moviesList =resp
    console.log(this.moviesList)
  })
  }
}
