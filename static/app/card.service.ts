import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Card } from './card';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class CardService {

  constructor(private http: Http) { }

  getCards(): Observable<Card[]>{
  	 return this.http.get('api/cards').
     map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
  	let body = res.json();
  	return body || [];
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }

}