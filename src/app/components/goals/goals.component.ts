import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals:string[] | undefined;
  constructor() { 
    this.goals = ["Watch Finding Nemo", "Watch No Way Home", "Watch Adam's Project"]
  }

 //String Interpolation / One Way Data Binding
  ngOnInit(): void {
  }

}
