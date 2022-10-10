import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'angular-tp2';

	constructor(
		public snackBar: MatSnackBar
	) { }
}
