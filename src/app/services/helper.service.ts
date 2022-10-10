import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class HelperService {
	popup(msg: string, action: string = "Ok"): void {
		this.snackBar.open(msg, action, { verticalPosition: 'top' });
	}

	constructor(public snackBar: MatSnackBar) { }
}
