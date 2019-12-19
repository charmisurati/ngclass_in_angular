import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  list =[{"name":"charmi","country":"IND"},
          {"name":"nirja", "country":"Aus"}];

          // getcolor(country){
          //   switch(country){
          //     case 'IND':
          //       return "red";
              
          //       case 'Aus':
          //         return "yellow";
          //   }
          // }
  ngOnInit() {
  }

}
