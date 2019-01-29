import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  id: number = 10;
  status: string ;
  serversList=[];

  constructor() {
    this.status = Math.random() > 0.5 ? 'فعال' : 'غیر فعال';
   }

   getServerStatus(){
     return this.status;
   }
  
   getColor(){
      return this.status === 'فعال' ? 'green' : 'red';
     }
 
  ngOnInit() {
  }

}
