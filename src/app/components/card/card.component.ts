import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
	@Input() canRemove: boolean = false;
	@Input() model: any = {}
	@Output() remove = new EventEmitter<string>();
	selected: boolean = false;

	constructor() { }
	ngOnInit(): void { }
}
