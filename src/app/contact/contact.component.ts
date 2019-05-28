import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<div *ngFor="let color of colors; index as i">{{i}} {{color}} </div>',
  styles: []
})


export class ContactComponent implements OnInit {

  public colors = ["green","blue","pink","red"];

    constructor(){

    }
    ngOnInit(){

    }

}
