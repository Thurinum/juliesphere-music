import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
	selector: 'app-artist-list',
	templateUrl: './artist-list.component.html',
	styleUrls: ['./artist-list.component.sass']
})
export class ArtistListComponent implements OnInit {
	artists: Artist[] = [];

	constructor() { }
	ngOnInit(): void { }
}
