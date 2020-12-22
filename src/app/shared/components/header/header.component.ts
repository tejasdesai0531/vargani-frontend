import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../core/services/util/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private __headerService: HeaderService) { }

  ngOnInit(): void {
  }

  editButtonClicked() {
    this.__headerService.editButtonClicked();
  }

}
