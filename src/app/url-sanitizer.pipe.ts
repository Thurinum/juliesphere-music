import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'urlSanitizer' })
export class UrlSanitizerPipe implements PipeTransform {
	constructor(
		private sanitizer: DomSanitizer
	) { }

	transform(value: any, ...args: any[]): any {
		return this.sanitizer.bypassSecurityTrustResourceUrl(value);
	}
}
