import { MovieDetailsService } from './../movie-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviedetailsservice : MovieDetailsService) { }

  ngOnInit() {
    
  }
  
  
}