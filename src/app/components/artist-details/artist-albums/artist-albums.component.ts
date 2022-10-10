import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';

@Component({
	selector: 'app-artist-albums',
	templateUrl: './artist-albums.component.html',
	styleUrls: ['./artist-albums.component.sass']
})
export class ArtistAlbumsComponent implements OnInit {
	albums: Album[] = [];

	constructor() { }
	ngOnInit(): void {}
}
