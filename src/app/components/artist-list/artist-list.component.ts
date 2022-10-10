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
	datalist: string[] = [];

	addArtist(name: string): void {
		if (!name) {
			this.helper.popup("Please enter an artist name!", "Got it");
			return;
		}

		this.query.getArtist(name).then(
			request => {
				if (!request) {
					this.helper.popup("Unable to connect to Spotify's API.", "Damn it");
					return;
				}

				request.subscribe(
					response => {
						if (!response || response.artists.items.length === 0) {
							this.helper.popup(`Artist "${name}" not found.`);
							return;
						}

						if (response.artists.items.length > 1 && !response.artists.items.some((artist: any) => artist.name.toLowerCase() === name.toLowerCase().trim())) {
							this.helper.popup("Multiple artists found. Please be more specific.");
							this.datalist = response.artists.items.map((artist: any) => artist.name);
							return;
						}

						const artistObj = response.artists.items[0];

						if (this.artists.find(artist => artist.id === artistObj.id)) {
							this.helper.popup(`Artist "${name}" already added.`);
							return;
						}

						this.artists.push(
							new Artist(
								artistObj.id,
								artistObj.name,
								artistObj.images[0].url
							)
						);

						this.localStorage.setItem("artists", JSON.stringify(this.artists));
					}
				)
			}
		)
	}
	
	removeArtist(id: string): void {
		this.artists = this.artists.filter(artist => artist.id !== id);
		this.localStorage.setItem("artists", JSON.stringify(this.artists));
	}

	selectCard(card: CardComponent): void {
		if (this.selectedCard)
			this.selectedCard.selected = false;

		this.selectedCard = card;
		this.selectedCard.selected = true;
	}

	private selectedCard?: CardComponent;
	private localStorage: Storage = window.localStorage;

	constructor(
		private query: QueryService,
		private helper: HelperService
	) { 
		this.artists = JSON.parse(this.localStorage.getItem("artists") || "[]");
	}
	ngOnInit(): void { }
}
