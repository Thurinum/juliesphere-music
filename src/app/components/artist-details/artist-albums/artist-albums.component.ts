import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { HelperService } from 'src/app/services/helper.service';
import { QueryService } from 'src/app/services/query.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-artist-albums',
	templateUrl: './artist-albums.component.html',
	styleUrls: ['./artist-albums.component.sass']
})
export class ArtistAlbumsComponent implements OnInit {
	albums: Album[] = [];

	getAlbums(artistid: string): void {
		if (!artistid) {
			this.helper.popup("No artist ID was provided.");
			return;
		}

		this.query.getArtistAlbums(artistid).then(
			request => {
				if (!request) {
					this.helper.popup("An error occured while fetching the albums from Spotify's API.", "DAMN IT");
					return;
				}

				request.subscribe(
					response => {
						const albums = response.items;
						this.albums = [];

						albums.forEach((album: any) => {
							this.albums.push(new Album(
								album.id,
								album.name,
								album.images[0].url,
							))
						});
					}
				)
			}
		)
	}

	private subscription?: Subscription

	constructor(
		private route: ActivatedRoute,
		private query: QueryService,
		private helper: HelperService
	) { }

	ngOnInit(): void {		
		this.subscription = this.route.parent?.params.subscribe(params => {
			this.getAlbums(params["id"]);
		});
	}
	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
