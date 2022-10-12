import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { QueryService } from 'src/app/services/query.service';

@Component({
	selector: 'app-artist-album-tracks',
	templateUrl: './artist-album-tracks.component.html',
	styleUrls: ['./artist-album-tracks.component.sass']
})
export class ArtistAlbumTracksComponent implements OnInit {
	artist: string = "";
	tracks: string[] = [];
	trackid: string = "";
	subscription?: Subscription

	getYoutubeUrl(track: string): void {
		this.query.getTrackYoutubeId(`${this.artist} ${track}`).then(
			request => {
				if (!request) {
					this.helper.popup("Could not fetch track's youtube id from Spotify.");
					return;
				}

				request.subscribe(
					response => {
						if (!response || response.items.length === 0) {
							this.helper.popup(`Track has no youtube ID!`);
							return;
						}

						this.trackid = response.items[0].id.videoId;						;
						this.showTrackPlayer();
					}
				);
			}
		);
	}

	showTrackPlayer(): void {
		if (!this.trackid)
			this.helper.popup("No track id provided.");
			
		this.router.navigate([this.trackid, 'play'], { relativeTo: this.route });
	}

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
						
						console.log(this.artist)
						this.artist = response.items[0].artists[0].name;
						this.tracks = response.items.map((track: any) => track.name);
					}
				);
			}
		);
	}

	constructor(
		private route: ActivatedRoute,
		private query: QueryService,
		private helper: HelperService,
		private router: Router
	) { }

	ngOnInit(): void {		
		this.subscription = this.route.params.subscribe(params => {
			this.getTracks(params["id"]);
		});
	}
	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
