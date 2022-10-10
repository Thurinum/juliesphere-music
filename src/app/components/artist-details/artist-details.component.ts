import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
	selector: 'app-artist-details',
	templateUrl: './artist-details.component.html',
	styleUrls: ['./artist-details.component.sass']
})
export class ArtistDetailsComponent implements OnInit {
	artist?: Artist;

	constructor() { }
	ngOnInit(): void { }
}
