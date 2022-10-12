import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlSanitizer' })
export class UrlSanitizerPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
