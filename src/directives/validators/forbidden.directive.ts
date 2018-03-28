import { Directive, Input, } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, } from '@angular/forms';

@Directive({
	selector: '[appForbidden]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: ForbiddenDirective,
			multi: true,
		},
	],
})
export class ForbiddenDirective implements Validator {

	@Input() forbiddenName: string;

	constructor() { }

	validate(control: AbstractControl): {[key: string]: any} {
		return this.forbiddenName ? this.forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
	}

	forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} => {
			console.log("jnfdkl");
			const forbidden = nameRe.test(control.value);
			return forbidden ? {
				'forbiddenName': { value: control.value, },
			} : null;
		};
	}
}
