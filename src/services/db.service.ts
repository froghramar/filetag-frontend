import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

	constructor(private httpService: HttpService) { }

	getData<T>(url: string, params = null, filter = null): Observable <T> {
		switch (filter) {
			case null: {
				return this.httpService.get(url, params);
			}
			default: {
				return this.httpService.post(url, params, filter);
			}
		}
	}
}
