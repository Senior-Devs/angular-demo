import { Component, OnInit } from '@angular/core';
import { LocationReloadService } from 'src/app/services/location-reload.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private reloadMethod: LocationReloadService) { }

  ngOnInit(): void {
    this.Realod();
  }
  //DRY - Do Not Repeat Yourself
  public Realod(){
     this.reloadMethod.reloadPage()
    
  }
}
