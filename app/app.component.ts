import {Component} from '@angular/core';
import { CardComponent }     from './cards.component';
import { CardService } from './card.service';

@Component({
    selector: 'my-app',
    template: '<cards-container></cards-container> ',
    providers: [CardService],
    directives: [CardComponent]
})
export class AppComponent { }

