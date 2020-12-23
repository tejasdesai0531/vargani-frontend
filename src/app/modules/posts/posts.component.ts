import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../../shared/services/festival.service';
import { FestivalModel } from '../../shared/models/FestivalModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _festivalService: FestivalService) { }

  ngOnInit(): void {

    console.log("HII")
    this._festivalService.getAllFestivals().subscribe((res) => {
      console.log(res)
    })

  }

}
