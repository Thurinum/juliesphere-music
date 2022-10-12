import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BandsintownService } from 'src/app/services/bandsintown.service';
import { HelperService } from 'src/app/services/helper.service';
import { Concert } from 'src/app/models/concert.model';

@Component({
	selector: 'app-artist-concerts',
	templateUrl: './artist-concerts.component.html',
	styleUrls: ['./artist-concerts.component.sass']
})
export class ArtistConcertsComponent implements OnInit {
	concerts: Concert[] = [];

	getConcerts(artistName: string | null): void {
		if (!artistName) {
			this.helper.popup("No artist name was provided.", "DAMN IT");
			return;
		}

		this.bandsintown.request(artistName).then(
			request => {
				if (!request)
					return;

				request.subscribe(
					response => {
						if (response.length === 0) {
							this.helper.popup("No concerts found for this artist.");
							return;
						}

						this.concerts = response.map((concert: any) => new Concert(
							new Date(concert.datetime),
							concert.venue.street_address
						));
					}
				);
			}
		);
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private bandsintown: BandsintownService,
		private helper: HelperService
	) { }

	ngOnInit(): void {
		this.getConcerts(this.route.snapshot.paramMap.get("artistName"));
		this.router.events.subscribe((e => {
			if (e instanceof NavigationEnd)
				this.getConcerts(this.route.snapshot.paramMap.get("artistName"));
		}));
	}
}
