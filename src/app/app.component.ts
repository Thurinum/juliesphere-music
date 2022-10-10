import { Component } from '@angular/core';
import { HelperService } from './services/helper.service';
import { QueryService } from './services/query.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		public query: QueryService,
		public helper: HelperService
	) { }
}
