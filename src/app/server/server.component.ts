import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  id: number = 10;
  status: string = 'فعال'; 
  btnActive:boolean = false;
  newServer= 'هنوز سروری ایجاد نشده است ';
  serverName="";

  constructor() { 
    setTimeout(()=>{
      this.btnActive= true;
    }, 2000)
  }

  ngOnInit() {
  }

  onNewServer(){
    this.newServer =' سرور '+ this.serverName +' با موفقیت اضافه شد ' ;
  }
  onUpdateServerName(event:any){
    this.serverName= event.target.value;
  }
}
