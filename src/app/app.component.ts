import { Component, Input } from '@angular/core';
import { debug } from 'util';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type: 'iran', name : 'سرور تهران', content: 'محتوی برای سرور تهران اضافه شد'}];

  onLocalServer(localData){
    this.serverElements.push({
      type: 'iran',
      name: localData.nameServer,
      content: localData.contentServer
    })
  }

  onExternalServer(externalData){
    this.serverElements.push({
      type: 'france',
      name: externalData.nameServer,
      content: externalData.contentServer
    })
  }
}
