import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
	selector: 'app-artist-details',
	templateUrl: './artist-details.component.html',
	styleUrls: ['./artist-details.component.sass']
})
export class ArtistDetailsComponent implements OnInit {
	artist?: Artist;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }
	ngOnInit(): void {
		this.router.events.subscribe((() => {
			if (history.state.name)
				this.artist = history.state;
		}));
	}
}
