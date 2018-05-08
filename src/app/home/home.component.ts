import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger }
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string="Add item";
  goalText: string;
  goals =[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.goal.subscribe(res => this.goals=res);
    this.itemCount=this.goals.length;
    this.service.changeGoal(this.goals);
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount=this.goals.length;
    this.service.changeGoal(this.goals);
  }
  removeItem(i){
    this.goals.splice(i,1);
    this.service.changeGoal(this.goals);
  }

}
