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
title = "";
description = "";
userStories : UserStory[];
userStory: UserStory = {};


constructor( private userStoryService: UserStoryService ) { 

}

getUserStories(){
    this.userStoryService.getUserStories().subscribe(
        userStories => this.userStories = userStories,
        error =>  this.errorMessage = <any>error);
};

addUserStory() {
    this.userStory.id = 1;
    this.userStory.title = this.title;
    this.userStory.description = this.description;
    this.userStoryService.addUserStory(this.userStory)
        .subscribe(
        userStory  => this.userStories.push(userStory),
        error =>  this.errorMessage = <any>error);
};

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