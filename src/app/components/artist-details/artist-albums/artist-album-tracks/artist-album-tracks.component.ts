import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-artist-album-tracks',
	templateUrl: './artist-album-tracks.component.html',
	styleUrls: ['./artist-album-tracks.component.sass']
})
export class ArtistAlbumTracksComponent implements OnInit {
	tracks: string[] = [];

	constructor() { }
	ngOnInit(): void {}
}
