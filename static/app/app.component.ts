import {Component} from '@angular/core';
import { CardComponent }     from './cards.component';
import { UserStoryComponent }     from './user-story.component';
import { CardService } from './card.service';
import { UserStoryService } from './user-story.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

//import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ROUTER_PROVIDERS, CardService , UserStoryService],
    directives: [CardComponent, UserStoryComponent, ROUTER_DIRECTIVES]
})

export class AppComponent { }

