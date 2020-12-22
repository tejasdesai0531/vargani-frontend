import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services/ui/ui.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public isLoading = false;

  constructor(private __uiService: UIService) { }

  ngOnInit(): void {

    this.__uiService.loadingEvent.subscribe((isLoading:boolean) => {
      this.isLoading = isLoading;
    });

  }

}
