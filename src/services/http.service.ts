import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Observable, } from 'rxjs/Observable';

@Injectable()
export class HttpService {

	private httpHeaders = new HttpHeaders();

	constructor(private httpClient: HttpClient) {
		this.init();
	}

	init() {
		this.setHeader('Content-Type', 'application/json');
	}

	delete(url?: string) {

		return new Promise( (resolve: Function, reject: Function) => {
			this.httpClient.delete(url, {
				headers: this.httpHeaders,
			}).subscribe(
				(response: Response) => {
					resolve(response);
				},
				(err) => {
					reject(err);
				}
			);
		});
	}

	get <T> (url: string, params = null): Observable<T> {

		const httpParams: HttpParams = new HttpParams();
		if (params) {
			Object.keys(params).forEach((key: string) => {
				httpParams.set(key, params[key]);
			});
		}

		return < Observable <T> > this.httpClient.get(url, {
			headers: this.httpHeaders,
			params: httpParams,
			responseType: 'json',
		});
	}

	post <T> (url: string, params = null, data: any): Observable<T> {

		const httpParams: HttpParams = new HttpParams();
		if (params) {
			Object.keys(params).forEach((key: string) => {
				httpParams.set(key, params[key]);
			});
		}

		return < Observable <T> > this.httpClient.post(url, data, {
			headers: this.httpHeaders,
			params: httpParams,
			responseType: 'json',
		});
	}

	put(url: string, data: any) {
		return new Promise( (resolve: Function, reject: Function) => {
			this.httpClient.put(url, data, {
				headers: this.httpHeaders,
			}).subscribe(
				(response: Response) => {
					resolve(response);
				},
				(err) => {
					reject(err);
				}
			);
		});
	}

	removeHeader(key: string) {
		this.httpHeaders.delete(key);
	}

	setHeader(key: string, value: string) {
		this.httpHeaders.set(key, value);
	}
}
