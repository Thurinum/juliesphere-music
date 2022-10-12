import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from './services/helper.service';
import { QueryService } from './services/query.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public query: QueryService,
		public helper: HelperService
	) { }
}
