import {Component, OnInit } from '@angular/core';

import { Card } from './card';

import { CardService } from './card.service';

//import * as io from 'socket.io-client';

@Component({
    selector: 'cards-container',
    templateUrl: 'app/cards.component.html',
    styleUrls : ['app/cards.component.css'],
    providers : [CardService]
})

export class CardComponent { 

cards : Card[];
selectedCards: Card[];
error : String;
res : String;
socket :  null;
hasVoted : Boolean;
showVotess : Boolean;

constructor(private cardService: CardService ) { 
    this.socket = io();
    this.socket.on('voted', function(data){
        this.appendVote(data);
    }.bind(this));

    this.socket.on('showVotes', function(data){
        this.showVotes(data);
    }.bind(this));
    this.selectedCards = [];
    this.hasVoted = false;
    this.showVotess = false;
}

getCards(){
    this.cardService.getCards().subscribe(
        cards => this.cards = cards,
        error =>  this.errorMessage = <any>error);
};

  ngOnInit() {
    this.getCards();
 };

 onVote(card: Card){
    if(!this.hasVoted){
        this.hasVoted = true;
        this.socket.emit('vote', card);
    }
};

showVotes(currentuserRequested){
    if(currentuserRequested === true){
        this.socket.emit('requestShowVotes');
    }

    this.showVotess = true;
};


appendVote(card : Card){
    this.selectedCards.push(card);
};

  
}