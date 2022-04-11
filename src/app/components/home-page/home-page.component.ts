import { Component, OnInit } from '@angular/core';
import { LocationReloadService } from 'src/app/services/location-reload.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private reloadMethod: LocationReloadService) { }

  ngOnInit(): void {
    this.Reload()
  }

public Reload(){

  this.reloadMethod.reloadPage()
  
}
}