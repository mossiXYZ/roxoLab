import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {


  @Output() iranianServer: EventEmitter<{ nameServer: string , contentServer: string}> = new EventEmitter<{ nameServer: string , contentServer: string}>();
  @Output() frenchServer:  EventEmitter<{ nameServer: string , contentServer: string}> = new EventEmitter<{ nameServer: string , contentServer: string}>();

  serverElements=[];
  newServerName ='';
  newServerContent ='';

  onAddPersianServer(){
    this.iranianServer.emit({nameServer: this.newServerName, contentServer: this.newServerContent});
  }
  
  onAddFrenchServer(){
    this.frenchServer.emit({nameServer: this.newServerName, contentServer: this.newServerContent});

  }
  
  constructor() { }

  ngOnInit() {
  }

}
