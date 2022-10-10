import { Component } from '@angular/core';
import { HelperService } from './services/helper.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		public Helper: HelperService
	) { }
}
