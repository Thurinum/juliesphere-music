import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { HelperService } from 'src/app/services/helper.service';
import { QueryService } from 'src/app/services/query.service';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-artist-list',
	templateUrl: './artist-list.component.html',
	styleUrls: ['./artist-list.component.sass']
})
export class ArtistListComponent implements OnInit {
	@Input() artists: Artist[] = [];

	addArtist(name: string): void {
		if (!name) {
			this.helper.popup("Please enter an artist name!", "Got it");
			return;
		}

		//this.query.getArtist()
	}

	selectCard(card: CardComponent): void {
		if (this.selectedCard)
			this.selectedCard.selected = false;

		this.selectedCard = card;
		this.selectedCard.selected = true;
	}

	private selectedCard?: CardComponent;

	constructor(
		private query: QueryService,
		private helper: HelperService
	) { }
	ngOnInit(): void { }
}
