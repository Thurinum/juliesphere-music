import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { QueryService } from 'src/app/services/query.service';

@Component({
	selector: 'app-artist-album-tracks',
	templateUrl: './artist-album-tracks.component.html',
	styleUrls: ['./artist-album-tracks.component.sass']
})
export class ArtistAlbumTracksComponent implements OnInit {
	albumName: string = "";
	tracks: string[] = [];
	subscription?: Subscription

	getTracks(albumid: string): void {
		if (!albumid) {
			this.helper.popup("No album id provided.");
			return;
		}

		this.query.getAlbumTracks(albumid).then(
			request => {
				if (!request) {
					this.helper.popup("Could not fetch album's tracks from Spotify.");
					return;
				}

				request.subscribe(
					response => {
						if (!response || response.items.length === 0) {
							this.helper.popup(`Album has no tracks.`);
							return;
						}

						this.tracks = response.items.map((track: any) => track.name);
					}
				);
			}
		);
	}

	constructor(
		private route: ActivatedRoute,
		private query: QueryService,
		private helper: HelperService
	) { }

	ngOnInit(): void {		
		this.subscription = this.route.params.subscribe(params => {
			this.getTracks(params["id"]);
			console.log(history.state)
		});
	}
	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
