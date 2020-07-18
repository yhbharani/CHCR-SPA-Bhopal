import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations:[
    trigger('pull',[
      transition('void => *',[
        style({ transform: 'translateX(130%)' }),
        animate('0.4s ease-in')
      ]),
      transition('* => void',[
        animate('0.4s ease-out', style({ transform: 'translateX(130%)' }))
      ])
    ])
  ] 
})
export class NavigationComponent implements OnInit {

  drop: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.drop=!this.drop;
  }

}
