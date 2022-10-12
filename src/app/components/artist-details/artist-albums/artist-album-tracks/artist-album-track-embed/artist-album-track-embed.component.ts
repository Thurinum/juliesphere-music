import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artist-album-track-embed',
	templateUrl: './artist-album-track-embed.component.html',
	styleUrls: ['./artist-album-track-embed.component.sass']
})
export class ArtistAlbumTrackEmbedComponent implements OnInit {
	trackid: string = "";

	constructor(
		private route: ActivatedRoute
	) { }
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.trackid = params["id"];
		});
	}
}
