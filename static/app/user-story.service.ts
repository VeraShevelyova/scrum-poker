import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserStory } from './user-story';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class UserStoryService {

  constructor(private http: Http) { }

  userStoryUrl = "api/userStories";

  getUserStories(): Observable<UserStory[]>{
  	 return this.http.get(this.userStoryUrl).
     map(this.extractData)
      .catch(this.handleError);
  }

  addUserStory(userStory: UserStory): Observable<UserStory> {
    let body = JSON.stringify({userStory});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userStoryUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateUserStory(userStory: UserStory): Observable<UserStory> {
    let body = JSON.stringify({userStory});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.userStoryUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteUserStory(userStory: UserStory): Observable<UserStory> {
    let url = this.userStoryUrl + "/" + userStory.id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(url, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
  	let body = res.json();
  	return body || {};
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }

}