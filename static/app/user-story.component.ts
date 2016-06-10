import {Component, OnInit } from '@angular/core';

import { UserStory } from './user-story';

import { UserStoryService } from './user-story.service';

@Component({
    selector: 'user-story-container',
    templateUrl: 'app/user-story.component.html',
    styleUrls : ['app/user-story.component.css'],
    providers : [UserStoryService]
})

export class UserStoryComponent { 

error : String;
res : String;
socket :  null;
modalIsVisible = false;
userStories : UserStory[];
currentUserStory: UserStory = {
    title: "",
    description : ""
};


constructor( private userStoryService: UserStoryService ) { 

}

getUserStories(){
    this.userStoryService.getUserStories().subscribe(
        userStories => this.userStories = userStories,
        error =>  this.errorMessage = <any>error);
};

addUserStory() {
    if(!this.currentUserStory.id){
    this.userStoryService.addUserStory(this.currentUserStory)
        .subscribe(
        userStory  => this.userStories.push(userStory),
        error =>  this.errorMessage = <any>error);

    }
    else{
        this.userStoryService.updateUserStory(this.currentUserStory)
        .subscribe(
        userStory  => this.userStories.push(userStory),
        error =>  this.errorMessage = <any>error);
    }

    this.closeModal();
    this.getUserStories();
    this.currentUserStory = {
        title: "",
        description : ""
    };
};

deleteUserStory(userStory : UserStory){
    this.userStoryService.deleteUserStory(userStory).subscribe(
        res => this.res,
        error => this.errorMessage = <any> error);
    this.getUserStories();
};

editUserStory(userStory : UserStory){
    this.currentUserStory = userStory;
    this.showModal();
}

  ngOnInit() {
    this.getUserStories();
 };

 showModal(){
    this.modalIsVisible = true;
 };

 closeModal(){
    this.modalIsVisible = false;
 };
  
}