import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationReloadService {

  constructor(private router: Router) { }
  public reloadPage(){
    let date = new Date().getDate();
    if( date === 6){
      location.reload();
    }
   
  }
}
