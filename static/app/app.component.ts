import {Component} from '@angular/core';
import { CardComponent }     from './cards.component';
import { CardService } from './card.service';

//import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [CardService],
    directives: [CardComponent]
})

export class AppComponent { }

