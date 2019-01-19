import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() list : []
  @Output() cardSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(cardId) {
    console.log("card id selected", cardId);
    this.cardSelected.emit(cardId);    
  }
}
