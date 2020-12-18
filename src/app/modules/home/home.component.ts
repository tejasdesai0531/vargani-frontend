import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/util/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private __headerService: HeaderService) { }

  ngOnInit(): void {

    this.__headerService.editEvent.subscribe((isEdit:boolean) => {
      console.log("HIII Home module")
    });

  }

}
