import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-artist-list',
	templateUrl: './artist-list.component.html',
	styleUrls: ['./artist-list.component.sass']
})
export class ArtistListComponent implements OnInit {
	artists: Artist[] = [];
	private selectedCard?: CardComponent;

	selectCard(card: CardComponent): void {
		if (this.selectedCard)
			this.selectedCard.selected = false;

		this.selectedCard = card;
		this.selectedCard.selected = true;
	}

	constructor() { }
	ngOnInit(): void { }
}
