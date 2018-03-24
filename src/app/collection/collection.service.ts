import { Injectable, } from '@angular/core';
import { ICollection, } from '../../models/collection';
import { Observable, } from 'rxjs/Observable';
import { DbService, } from '../../services/db.service';

@Injectable()
export class CollectionService {

	constructor(private dbService: DbService) { }

	getCollections(): Observable <ICollection[]> {
		return this.dbService.getData<ICollection[]>('http://localhost:3000/collections');
	}

}
