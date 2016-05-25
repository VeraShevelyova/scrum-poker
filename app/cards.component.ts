import {Component, OnInit } from '@angular/core';

import { Card } from './card';

import { CardService } from './card.service';

@Component({
    selector: 'cards-container',
    templateUrl: 'app/cards.component.html',
    styleUrls : ['app/cards.component.css'],
    providers : [CardService]
})

export class CardComponent { 

cards : Card[];
selectedCard: Card;
error : String;
constructor(private cardService: CardService) { }

getCards(){
	 this.cardService.getCards().then(cards => this.cards = cards)
        .catch(error => this.error = error);
};

  ngOnInit() {
    this.getCards();
 };

 onVote(card: Card){
 	this.selectedCard = card
 }
  
}