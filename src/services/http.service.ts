import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
			this.httpClient.delete(url, {headers: this.httpHeaders})
				.subscribe(
					(response: Response) => {
						resolve(response);
					},
					(err) => {
						reject(err);
					}
				);
		});
	}

	get(url: string, filter = null) {

		const httpParams: HttpParams = new HttpParams();
		if (filter) {
			Object.keys(filter).forEach((key: string) => {
				httpParams.set(key, filter[key]);
			});
		}

		return new Promise( (resolve: Function, reject: Function) => {
			this.httpClient.get(url, {
				headers: this.httpHeaders,
				params: httpParams,
				responseType: 'json'
			})
				.subscribe(
					(response: Response) => {
						resolve(response.text());
					},
					(err) => {
						reject(err);
					}
				);
		});
	}

	post(url: string, data: any) {
		return new Promise( (resolve: Function, reject: Function) => {
			this.httpClient.post(url, data, {headers: this.httpHeaders})
				.subscribe(
					(response: Response) => {
						resolve(response);
					},
					(err) => {
						reject(err);
					}
				);
		});
	}

	put(url: string, data: any) {
		return new Promise( (resolve: Function, reject: Function) => {
			this.httpClient.put(url, data, {headers: this.httpHeaders})
				.subscribe(
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
