import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('serverContent') serverContent: ElementRef; 

  onAddPersianServer(){
    this.iranianServer.emit({nameServer: this.newServerName, contentServer: this.serverContent.nativeElement.value});
    // console.log(this.serverContent);
  }
  
  onAddFrenchServer(){
    this.frenchServer.emit({nameServer: this.newServerName, contentServer: this.newServerContent});

  }
  
  constructor() { }

  ngOnInit() {
  }

}
