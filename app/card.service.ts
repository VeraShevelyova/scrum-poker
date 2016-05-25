import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable()
export class CardService {

  private cardsUrl = 'app/cards';  // URL to web api

  constructor(private http: Http) { }

  getCards(){
		//return Promise.resolve(CARDS);
    return this.http.get(this.cardsUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}